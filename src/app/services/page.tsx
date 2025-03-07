'use client'

import { BlurFade } from "@/components/magicui/blur-fade";
import { SetStateAction, useState } from "react";
import { FaPlus } from "react-icons/fa6";


const Service = () => {

    const [open, setOpen] = useState(null);

    const toggle = (index : any) => {
      setOpen(open === index ? null : index);
    };
  
    const accordionItems = [
      {
        title: "Branding and Strategy",
        content: "Our approach to branding goes beyond just a logo or a color palette — it's about defining who you are, what you stand for, and how you connect with your customers. We work with you to create a compelling brand identity that tells your story and connects with your audience on a deeper level. Our strategy-driven approach ensures that your brand stands out by aligning your messaging, values, and goals with market demands."
      },
      {
        title: "Graphic Design",
        content: "We bring your ideas to life through visually striking designs that communicate your message effectively.We specialize in creating visually captivating designs that communicate your brand’s story and capture your audience's attention. From logos and brochures to social media graphics and website designs, our graphic design services are crafted to elevate your brand and create memorable experiences.By combining creativity, precision, and the latest design trends, we deliver designs that are not only aesthetically pleasing but also strategically aligned with your business goals, ensuring your visuals make a lasting impact."
      },
      {
        title: "UI/UX Design",
        content: "We specialize in crafting seamless and intuitive user experiences that delight and engage. Our approach to UI/UX design focuses on understanding your users’ needs and behaviors to create interfaces that are not only visually appealing but also highly functional. Our process combines user research, wireframing, prototyping, and usability testing to ensure that every design decision enhances the overall experience. From websites and mobile apps to complex platforms, we strive to create solutions that deliver both form and function for optimal user satisfaction."
      },
      {
        title: "Web Development",
        content: "We specialize in building high-performance, responsive websites and web applications tailored to your business needs. Our web development services cover everything from front-end design to back-end functionality, ensuring a seamless, scalable, and secure digital presence. Our goal is to create websites that are not only visually appealing but also intuitive, efficient, and optimized for performance. Whether you're launching a new site, revamping an existing one, or developing a complex web application, we leverage the latest technologies to create solutions that are not only functional but also user-centric and future-proof."
      },
      {
        title: "Digital Marketing",
        content: "We help businesses reach and engage their target audience through data-driven digital marketing strategies. Our services encompass SEO, social media marketing, email campaigns, content marketing, paid advertising, and more. By leveraging the latest tools and trends, we craft customized campaigns that drive traffic, boost brand visibility, and generate conversions. Whether you're looking to increase online presence, build meaningful customer relationships, or drive sales, our digital marketing strategies are designed to deliver measurable results and support long-term growth."
      },
    ];

    return(
        <section id="contact" className="justify-left w-full">
            <div className="relative flex max-w-7xl flex-col px-4 pb-20 lg:py-20 m-auto">
               <div className="">
               <BlurFade delay={0.25} inView direction="up">
                <h2 className="text-6xl font-bold text-black leading-normal">Step into new opportunities and lead your organization to unmatched success.</h2>
                </BlurFade>
                <div className="grid grid-cols-1 pt-10 lg:grid-cols-3 lg:col-span-1 lg:pt-0">
                    <div className="relative flex flex-col items-left gap-4 p-2 text-left lg:col-span-2">
                    <BlurFade delay={0.25 * 2} inView direction="up">
                    <p className="text-lg py-4">We specialize in crafting innovative digital solutions that solve UX and development challenges. From bespoke web development and seamless UI/UX design to dependable domain hosting, SEO, and comprehensive digital marketing strategies, we offer end-to-end services designed to help your business succeed online. Our commitment is to create accessible, intuitive experiences that foster growth and maximize engagement.</p>
                    </BlurFade>
                    </div>
                    
                </div>
               </div> 
               </div>
               <div className="bg-custom-background">
               <div className="relative py-20 max-w-7xl px-4 m-auto w-full">
      {accordionItems.map((item, index) => (
        <div key={index} className="">
        <BlurFade delay={0.50} inView direction="up">
          <button
            onClick={() => toggle(index)}
            className="w-full py-12 flex justify-between items-center border-b border-gray-300"
          >
            <span className="text-6xl">{item.title}</span>
            <span 
            className={`text-4xl li-icon transition-all ${open === index ? 'rotate-45' : ''}`}>
                <FaPlus />
                </span>
          </button>
          {open === index && (
            <div className="py-10">
              <p className="text-lg py-4">{item.content}</p>
            </div>
          )}
          </BlurFade>
        </div>
      ))}
                </div>
                </div>
        </section>
    )
} 

export default Service;