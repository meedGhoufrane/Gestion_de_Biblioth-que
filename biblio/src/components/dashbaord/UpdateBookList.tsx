import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import SidebarDashboard from '../AccountDashboardSidebar';

const UpdateBookList: React.FC = () => {
    const { bookId } = useParams<{ bookId: string }>();
    const history = useHistory();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        price: '',
        genre: '',
        description: '',
    });

    useEffect(() => {
        const fetchBookDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/books/${bookId}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching book details:', error);
            }
        };

        fetchBookDetails();
    }, [bookId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:3000/books/${bookId}`, formData);
            console.log('Book updated successfully:', response.data);
            history.push('/my-list-details'); // Redirect after successful update
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    return (
        <div>
            <Header />
            <section className="bj_account_dashboard" data-bg-color="#f5f5f5">
                <div className="container">
                    <div className="row">
                        <SidebarDashboard />
                        <div className="col-lg-9">
                            <div className="account_dashboard_body">
                                <div className="account_dashboard_content">
                                    <div className="account_dashboard_content_header">
                                        Update Book
                                    </div>
                                    <div className="content_body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row gy-3">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="title">Title: *</label>
                                                        <input type="text" className="form-control" id="title" name="title" placeholder="Enter book title" value={formData.title} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="author">Author: *</label>
                                                        <input type="text" className="form-control" id="author" name="author" placeholder="Enter author's name" value={formData.author} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="price">Price: *</label>
                                                        <input type="number" className="form-control" id="price" name="price" placeholder="Enter book price" value={formData.price} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="genre">Genre: *</label>
                                                        <input type="text" className="form-control" id="genre" name="genre" placeholder="Enter book genre" value={formData.genre} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="description">Description: *</label>
                                                        <textarea className="form-control" id="description" name="description" placeholder="Enter book description" value={formData.description} onChange={handleChange} required></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div>
                                                        <button type="submit" className="bj_theme_btn">Save Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default UpdateBookList;