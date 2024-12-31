import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import SidebarDashboard from '../AccountDashboardSidebar';

const CreateBookList: React.FC = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publicationYear: '',
        genre: '',
        description: '',
        language: '',
        coverImageUrl: '',
        availableCopies: '',
        totalCopies: '',
        borrowCount: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = e.target;
        if (files && files.length > 0) {
            setFormData({ ...formData, coverImageUrl: URL.createObjectURL(files[0]) });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const bookData = {
            title: formData.title,
            author: formData.author,
            publicationYear: Number(formData.publicationYear),
            genre: formData.genre,
            description: formData.description,
            language: formData.language,
            coverImageUrl: formData.coverImageUrl,
            availableCopies: Number(formData.availableCopies),
            totalCopies: Number(formData.totalCopies),
            borrowCount: formData.borrowCount ? Number(formData.borrowCount) : undefined,
        };

        try {
            const response = await axios.post('http://localhost:3000/books', bookData);
            console.log('Book created successfully:', response.data);
            setFormData({
                title: '',
                author: '',
                publicationYear: '',
                genre: '',
                description: '',
                language: '',
                coverImageUrl: '',
                availableCopies: '',
                totalCopies: '',
                borrowCount: '',
            });
        } catch (error) {
            console.error('Error creating book:', error);
        }
    };

    const handleUpdate = async (bookId: string) => {
        try {
            const response = await axios.put(`http://localhost:3000/books/${bookId}`, formData);
            console.log('Book updated successfully:', response.data);
            // Handle success
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };

    const handleDelete = async (bookId: string) => {
        try {
            const response = await axios.delete(`http://localhost:3000/books/${bookId}`);
            console.log('Book deleted successfully:', response.data);
            // Handle success
        } catch (error) {
            console.error('Error deleting book:', error);
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
                                        Create A Book
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
                                                        <label className="form-label" htmlFor="publicationYear">Publication Year: *</label>
                                                        <input type="number" className="form-control" id="publicationYear" name="publicationYear" placeholder="Enter publication year" value={formData.publicationYear} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="genre">Genre: *</label>
                                                        <input type="text" className="form-control" id="genre" name="genre" placeholder="Enter genre" value={formData.genre} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="description">Description:</label>
                                                        <textarea className="form-control" id="description" name="description" placeholder="Write a brief description" value={formData.description} onChange={handleChange}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="language">Language: *</label>
                                                        <input type="text" className="form-control" id="language" name="language" placeholder="Enter language" value={formData.language} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="coverImage">Cover Image:</label>
                                                        <input type="file" className="form-control" id="coverImage" name="coverImage" onChange={handleFileChange} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="availableCopies">Available Copies: *</label>
                                                        <input type="number" className="form-control" id="availableCopies" name="availableCopies" placeholder="Enter available copies" value={formData.availableCopies} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="totalCopies">Total Copies: *</label>
                                                        <input type="number" className="form-control" id="totalCopies" name="totalCopies" placeholder="Enter total copies" value={formData.totalCopies} onChange={handleChange} required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="form-label" htmlFor="borrowCount">Borrow Count:</label>
                                                        <input type="number" className="form-control" id="borrowCount" name="borrowCount" placeholder="Enter borrow count" value={formData.borrowCount} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div>
                                                        <button type="submit" className="bj_theme_btn">Save Book</button>
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

export default CreateBookList; 