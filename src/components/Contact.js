import React from 'react';
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

        <div class='mt-10'>
			<h2 dir="rtl">با ما به تماس شوید</h2>
			<div className='mt-10 flex items-center justify-center gap-16'>
				<div className='flex flex-col space-y-10'>
					<article class='flex flex-col items-center'>
						<MdOutlineEmail className='contact_option-icon'/>
						<h5>zangi1370@gmail.com</h5>
						<a href="zangi1370gmail.com" target="_blank">پیام بفرستید</a>
					</article>

					<article className='flex flex-col items-center'>
						<RiMessengerLine className='contact_option-icon'/>
						<a href="https://m.me/mortaza.khavari.9" target="_blank">پیام بفرستید</a>
					</article>

					<article className='flex flex-col items-center'>
						<BsWhatsapp className='contact_option-icon' />
						<a href="http://wa.me/+93789612429" target="_blank">پیام بفرستید</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS*/}
				<form class="flex flex-col items-center space-y-4 " ref={form} onSubmit={sendEmail}>
					<input class="w-30rem p-4" type="text" name="name" placeholder='اسم مکمل' required dir='rtl'/>
					<input class="w-30rem p-4" type="email" name="email" placeholder='ایمل آدرس' required  dir='rtl'/>
					<textarea class="w-30rem p-4" name="message" rows="7" placeholder='متن پیام' required dir='rtl'></textarea>
					<button type='submit'>ارسال</button>
				</form>
			</div>
			  
        </div>
    );
}

export default Contact;