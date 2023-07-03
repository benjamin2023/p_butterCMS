import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-12'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-10 flex flex-col justify-center w-full h-full items-center'>
                <p className='text-4xl font-bold inline border-b-2 border-cyan-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-2'>Get in Touch</p>
                </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required/>
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="6" placeholder='Message' required></textarea>
           <a href="mailto:abegundeben@gmail.com"><button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-1 my-8 mx-auto flex items-center'>Send message</button></a>
        </div>
        
    </div>
  );
}
export default Contact;