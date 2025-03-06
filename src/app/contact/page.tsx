'use client'

import { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', service:'', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatusMessage('Message sent successfully!');
      } else {
        setStatusMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatusMessage('Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  

    return(
        <section id="contact" className="flex justify-left w-full">
            <div className="relative flex max-w-7xl flex-col px-4 pb-20 lg:py-20 m-auto">
               <div className="grid gap-20 grid-cols-1 pt-10 lg:grid-cols-2 lg:pt-0 items-center">
                <div>
                    <h2 className="text-6xl font-bold text-black leading-normal">Let's start working together</h2>
                    <h3 className="text-3xl font-bold text-black leading-normal py-4">Say hello <span className="wave">👋</span></h3>
                    <div className="grid gap-2">
                    <span className="py-4 text-lg w-max underline">25media@gmail.com</span>
                    <span className="text-lg w-max underline">+91 9667564345</span>
                    <span className="py-4 text-lg w-max">Mumbai, Thane, Maharashtra</span>
                    </div>
                </div>
                <div className="pb-12">
                <form onSubmit={handleSubmit}>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
          <div className="mt-2">
            <input type="text" name="firstname" id="first-name" onChange={handleChange} autoComplete="given-name" className="block w-full border rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
          <div className="mt-2">
            <input type="text" name="lastname" id="last-name" onChange={handleChange} autoComplete="family-name" className="block w-full border rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" onChange={handleChange} autoComplete="email" className="block w-full border rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="service" className="block text-sm/6 font-medium text-gray-900">Select service</label>
          <div className="mt-2 grid grid-cols-1">
            <select id="service" name="service" onChange={handleChange} autoComplete="service-name" className="col-start-1 row-start-1 w-full border appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <option>Select service</option>
              <option>Branding and Strategy</option>
              <option>Graphic Design</option>
              <option>UI/UX Design</option>
              <option>Web Development</option>
              <option>Digital Marketing</option>
              <option>Other</option>
            </select>
            <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="col-span-full">
          <label htmlFor="message" className="block text-sm/6 font-medium text-gray-900">Message</label>
          <div className="mt-2">
            <textarea 
            name="message"
            id="message"
            rows={3} 
            onChange={handleChange}
            className="block w-full border rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></textarea>
          </div>
        </div>
        <button type="submit" disabled={isSubmitting} className="rounded-md w-max bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        </div>
        </form>
        {statusMessage && <p>{statusMessage}</p>}
                </div>
               </div>
            </div>
        </section>
    )
}

export default Contact;