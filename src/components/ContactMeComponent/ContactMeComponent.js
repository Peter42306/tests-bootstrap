import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaTelegram, FaWhatsapp } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';


const ContactMeComponent = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_gzvll5q',
      'template_kuvgtyf',
      formRef.current,
      '0VXcN0MQ3Bj1v2Nqi'
    )
    .then(
      () => {
      alert('Message sent');
      e.target.reset();
      },
      (error) => {
      console.error('FAILED...', error.text);
      alert('Something went wrong. Try again later.');
      }
    );
  };

  return(
    <section id='contact' className='mt-2'>
      <h4>Contact</h4>
      <p>Send me a message</p>
      <Form ref={formRef} onSubmit={sendEmail} name='form'>
        <Form.Group className='mb-3'>
          <Form.Control 
            type='text' 
            name='name' 
            placeholder='Name' 
            minLength={2}
            maxLength={25}
            title='Enter a valid name'
            required/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            type='email' 
            name='email' 
            placeholder='Email' 
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title='Enter a valid email address'
            required/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            type='text' 
            name='title' 
            placeholder='Subject' 
            minLength={2}
            maxLength={50}
            title='Enter a valid Subject'
            required/>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control 
            as='textarea' 
            name='message' 
            rows={3} 
            placeholder='Message' 
            minLength={2}
            maxLength={500}
            title='Enter a valid message text'
            required/>
        </Form.Group>
        <Button 
          variant='outline-success' 
          className='mb-3' 
          type='submit'          
        >
          <FaPaperPlane className='me-2'/>
          Send Message
        </Button>
      </Form>
  
      <div className='mt-2'>      
        <div className="d-flex gap-2 mb-3">
          <a href='https://www.linkedin.com/in/petr-zalizko/' target='_blank' rel='noopener noreferrer'><FaLinkedin size={30} className='text-primary'/></a>
          <a href='https://github.com/Peter42306' target='_blank' rel='noopener noreferrer'><FaGithub size={30} className='text-secondary'/></a>
          <a href='https://wa.me/380674804846' target='_blank' rel='noopener noreferrer'><FaWhatsapp size={30} className='text-success'/></a>
          <a href='https://t.me/Peter42306' target='_blank' rel='noopener noreferrer'><FaTelegram size={30} style={{ color: '#0088cc' }}/></a>
          <a href='mailto:pzalizko@gmail.com' target='_blank' rel='noopener noreferrer'><FaEnvelope size={30} className='text-success'/></a>
        </div>
      </div>    
    </section>
  );

}; 

ContactMeComponent.propTypes = {};

ContactMeComponent.defaultProps = {};

export default ContactMeComponent;
