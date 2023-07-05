
import  {Container, Col, Row }  from 'react-bootstrap'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast,ToastContainer} from "react-toastify"

const Contact = () => {
const form = useRef();
    const submit = (e) =>{
        e.preventDefault()
        emailjs.sendForm('service_9qpay4i', 'template_iaqhthr', form.current, '9JondUbA9x-oaRRFH')
        .then((result) => {
            console.log(result.text);
            toast.success('Message sent',{
                position:"top-right",
                theme:"dark"

            })
        }, (error) => {
            console.log(error.text);
            toast.error('Something went wrong,pleae try again',{
                position:"top-right",
                theme:"dark"

            })
        });
    }

    

  return (
    <Container fluid className='contact1'>
        <ToastContainer></ToastContainer>
    <Container className='contact1'>
        <Row className='justify-content-center'>

        <Col lg='6' md='6' sm='12' xs='12'> 
        <h1 className='contcolor text-center fs-1 mt-5' >Reach Out to me!</h1>
        <form onSubmit={submit} ref={form}>
          
                <input type='text' placeholder='Your Name' className=' impt w-100 d-block mt-5 ms-auto me-auto' name='name'></input>
                <input type='email' placeholder='Your Email' className=' impt w-100 d-block mt-5 ms-auto me-auto' name='email'></input>
                <input type='message' placeholder='Message' className=' impt w-100 d-block mt-5 ms-auto me-auto' name='message'></input>
                <button type='submit' className=' btn3 d-block mt-5 ms-auto me-auto'>Sent</button>
        </form>
        
        </Col>
        </Row>
    </Container>
    </Container>
  )
}

export default Contact;