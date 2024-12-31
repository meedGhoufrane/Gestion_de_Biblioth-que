import { createContext, useContext, ReactNode } from 'react';
import { useAuth } from 'react-oidc-context';

interface AuthContextType {
  isAuthenticated: boolean;
  user: any;
  login: () => void;
  logout: () => void;
  getAccessToken: () => string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();

  const value = {
    isAuthenticated: auth.isAuthenticated,
    user: auth.user,
    login: () => auth.signinRedirect(),
    logout: () => auth.removeUser(),
    getAccessToken: () => auth.user?.access_token || null,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
} 