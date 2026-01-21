import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaTelegram } from 'react-icons/fa6';

import { FaYoutube } from 'react-icons/fa';


const ContactMeComponent = () => {
  const formRef = useRef();
  const [sending, setSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    //console.log("API URL:", process.env.REACT_APP_API_URL);

    const formData = new FormData(formRef.current);

    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('title'),
      message: formData.get('message')
    };

    try{

      setSending(true);

      const apiUrl = process.env.REACT_APP_API_URL;
      if(!apiUrl){
        throw new Error('REACT_APP_API_URL is not defined');
      };

      const response = await fetch(`${apiUrl}/api/contact`,{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(payload)
      });

      if(!response.ok){
        const errorText = await response.text().catch(() => '');
        console.error("FAILED:", response.status, errorText);
        alert(`Failed to send message.\nStatus: ${response.status}\n${errorText || ''}`);
        return;
      }

      alert("Message sent successfully!");
      e.target.reset();
    } catch(error){
      console.error(error);
      alert("Something went wrong, try again later.");
    } finally{
      setSending(false);
    }
  };

  return(
    <section id='contact' className='mt-3'>
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
            //pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
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
          size='sm'
        >
          <FaPaperPlane className='me-2'/>
          Send Message
        </Button>
      </Form>
  
      <div className='mt-2'>      
        <div className="d-flex gap-2 mb-3">
          <a href='mailto:pzalizko@gmail.com' target='_blank' rel='noopener noreferrer'><FaEnvelope size={30} className='text-success'/></a>
          <a href='https://www.linkedin.com/in/petr-zalizko/' target='_blank' rel='noopener noreferrer'><FaLinkedin size={30} className='text-primary'/></a>
          <a href='https://github.com/Peter42306' target='_blank' rel='noopener noreferrer'><FaGithub size={30} className='text-secondary'/></a>          
          <a href='https://t.me/Peter42306' target='_blank' rel='noopener noreferrer'><FaTelegram size={30} style={{ color: '#0088cc' }}/></a>          
          <a href='https://www.youtube.com/@petrzalizko1713' target='_blank' rel='noopener noreferrer'><FaYoutube size={30} style={{ color: '#FF0000' }}/></a>          
        </div>
      </div>    
    </section>
  );

}; 

ContactMeComponent.propTypes = {};

ContactMeComponent.defaultProps = {};

export default ContactMeComponent;
