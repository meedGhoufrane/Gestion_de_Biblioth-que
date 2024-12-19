// App.js

import { useAuth } from "react-oidc-context";
import Header from './layout/Header';
import Footer from './layout/Footer';
import MainContent from './components/MainContent';

function App() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "mm0d3de70f9ju19tvaihoa9f4";
    const logoutUri = "http://localhost:5173/";
    const cognitoDomain = "https://us-east-11pw3pmere.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  return (
    <div>
      {auth.isAuthenticated ? (
        <>
          <pre>Hello: {auth.user?.profile.email}</pre>
          <pre>ID Token: {auth.user?.id_token}</pre>
          <pre>Access Token: {auth.user?.access_token}</pre>
          <pre>Refresh Token: {auth.user?.refresh_token}</pre>
          <button onClick={() => auth.removeUser()}>Sign out</button>
        </>
      ) : (
        <button onClick={() => auth.signinRedirect()}>Sign in</button>
      )}

      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;