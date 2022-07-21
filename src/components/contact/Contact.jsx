import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

  	const sendEmail = (e) => {
    	e.preventDefault();

    	emailjs.sendForm('service_jrai4wo', 'template_us0nsqa', form.current, 'hx-_XrRRHoye_QbdV')
      	.then((result) => {
          console.log(result.text);
      	}, (error) => {
          console.log(error.text);
    	})

    	e.target.reset();
	};

    return(
        <div className="container">
			<h2 dir="rtl">با ما به تماس شوید</h2>
			<div className='container contact_container'>
				<div className='contact_options'>
					<article className='contact_option'>
						<MdOutlineEmail className='contact_option-icon'/>
						<h5>zangi1370gmail.com</h5>
						<a href="zangi1370gmail.com" target="_blank">Send a message</a>
					</article>

					<article className='contact_option'>
						<RiMessengerLine className='contact_option-icon'/>
						<a href="https://m.me/mortaza.khavari.9" target="_blank">Send a message</a>
					</article>

					<article className='contact_option'>
						<BsWhatsapp className='contact_option-icon' />
						<a href="http://wa.me/+93789612429" target="_blank">Send a message</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS*/}
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" name="name" placeholder='Your Full Name' required />
					<input type="email" name="email" placeholder='Your Email' required/>
					<textarea name="message" rows="7" placeholder='Your Message' required></textarea>
					<button type='submit'className='btn btn-primary'>Send Message</button>
				</form>
			</div>
			  
        </div>
    );
}

export default Contact;