import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeadInfo from './HeadInfo';
import Nav from './Nav';
import BackgroundVideo from './BackgroundVideo';
import Footer from './Footer';

import '../css/style.css';
import '../css/form.css';

function Enquiry() {

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comment: ''
    });
    
    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // Redirect to thank-you page
        // window.location.href = '../en/thank-you.html'; 
        navigate('/ThankYou');
    };

    return (
    <>
        <HeadInfo />
        <Nav />  
        <div>
            <BackgroundVideo />
            
            <section className="section" id="about">
                <div className="hero-banner">
                    <h2 className="hero-h2">Enquiry</h2>
                    <div className="form-big-group">
                        <p>If you have any question, please write down below those box and submit it.</p>
                        {/* <form action="../en/thank-you.html" method="GET" enctype="multipart/form-data"> */}
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="form-group">
                                <div className="name">  
                                    <label htmlFor="firstName">First Name:</label><br/>
                                    {/* <input type="text" id="firstName" minlength="1" maxLength="15" placeholder="First Name" required /> */}
                                    <input type="text" id="firstName" name="firstName" minLength="1" maxLength="15" placeholder="First Name" required value={formData.firstName} onChange={handleChange} />
                                </div>
                                <div className="name">
                                    <label htmlFor="lastName">Last Name:</label><br/>
                                    {/* <input type="text" id="lastName" minlength="1" maxLength="15" placeholder="Last Name" required /> */}
                                    <input type="text" id="lastName" name="lastName" minLength="1" maxLength="15" placeholder="Last Name" required value={formData.lastName} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="email">
                                    <label htmlFor="email">Email:</label><br/>
                                    {/* <input type="email" id="email" placeholder="example@example.com" required /> */}
                                    <input type="email" id="email" name="email" placeholder="example@example.com" required value={formData.email} onChange={handleChange} />
                                </div>
                                <div className="phone">
                                    <label htmlFor="phone">Phone:</label><br/>
                                    {/* <input type="tel" id="phone" placeholder="12346789" pattern="[0-9]{8}" required /> */}
                                    <input type="tel" id="phone" name="phone" placeholder="12346789" pattern="[0-9]{8}" required value={formData.phone} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="comment">
                                <label htmlFor="comment">Please write your question here below the white box.</label><br/>
                                {/* <textarea id="comment:" rows="3" cols="47" required placeholder="Please write your question here"></textarea><br/> */}
                                <textarea id="comment" name="comment" rows="3" cols="47" required placeholder="Please write your question here" value={formData.comment} onChange={handleChange}></textarea><br/>
                            </div>

                            <div className="form-group-6">        
                                {/* <input type="reset" value="Reset" /> */}
                                <input type="reset" value="Reset" onClick={() => setFormData({ firstName: '', lastName: '', email: '', phone: '', comment: '' })} />       
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </>
  )
}

export default Enquiry;