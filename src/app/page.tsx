'use client'

import { WordRotate } from "@/components/magicui/word-rotate";
import { Carousel, CarouselContent,  CarouselItem,  CarouselNext,  CarouselPrevious, } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { MdAccessAlarms, MdArrowOutward, MdLeakAdd } from "react-icons/md";
import Autoplay from "embla-carousel-autoplay"
import React from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import Loader from "@/components/Header/loader";
import StarRating from "@/components/StarRating";

export default function Home() {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false})
  )

  
  return (
    
      <main className="relative flex flex-col items-center justify-center">
      <div className="absolute -z-50 inset-0 size-[300px] bottom-0 w-full 
      bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
      bg-[size:50px_50px] 
      [mask-image:radial-gradient(ellipse_100%_80%_at_50%_50%,#000_40%,transparent_100%)]">
        </div>
      <section id="hero" className="flex justify-left w-full">
        <div className="relative flex max-w-7xl flex-col px-4 pb-20 lg:py-20 m-auto">
          <div className="grid grid-cols-1 pt-10 lg:grid-cols-2 lg:pt-0 items-center">
          <BlurFade delay={0.25} inView>
            <div className="relative mx-auto flex max-w-2xl flex-col items-left self-center gap-4 p-2 text-left">
              <div className="heading">
              <h1 className="leading-normal text-6xl font-bold text-black">We provide Digital Solutions that</h1>
              <WordRotate
      className="lg:text-3xl text-2xl font-bold text-black"
      words={["Boost Profitability", "Elevate Brand Awareness", "Generate Leads", "Accelerate Business Growth"]}
    /></div>
    <p className="text-lg">Our focus is on delivering accessible, user-friendly experiences that drive growth, engagement, and long-term success.</p>
    <Link href="/about" className="flex ml-1 mt-4 font-semibold relative gap-2 text-m pb-1 items-center btn-underline max-w-max btn-arrow">About Us <span className="li-icon"><MdArrowOutward size={15}/></span></Link>
            </div>
            </BlurFade>
            <BlurFade delay={0.25 * 2} inView>
            <div className="relative flex flex-col items-center justify-center p-2 pt-20 lg:pt-0">
            <Image 
        src="/25-media.png" 
        alt="Description of image"
        layout="responsive" 
        width={1200} 
        height={800} 
      />
            </div>
            </BlurFade>
          </div>
        </div>
      </section>  
      <section id="fetures" className="flex w-full bg-custom-background">
        <div className="relative flex max-w-7xl flex-col px-4 m-auto">
          <div className="grid grid-cols-1 pt-10 lg:grid-cols-2 lg:pt-0">
            <div className="relative mx-auto flex max-w-2xl flex-col items-left self-center gap-4 p-2 text-left">
            <BlurFade delay={0.25} inView direction="up">
               <h2 className="text-4xl font-bold text-black dark:text-white leading-normal lg:max-w-md">We shape the Perfect Solutions</h2>
            </BlurFade>
            </div>
            <div className="relative flex flex-col items-center justify-center p-2 pt-20 lg:p-28 gap-10 bg-dark-background text-white">
               <BlurFade delay={0.25} inView direction="up">
               <p className="text-lg">We are committed to providing our customers with exceptional service with a focus on innovation, creativity, and efficiency, we strive to deliver impactful results that drive success.</p>
               </BlurFade>
               <BlurFade delay={0.25 * 2} inView direction="up">
               <p className="text-lg">we provide the perfect solutions to help your brand stand out and thrive in today's fast-paced media landscape.</p>
               </BlurFade>
            </div>
          </div>
          <div className="grid grid-cols-1 pt-10 lg:grid-cols-2 lg:pt-0">
            <div className="relative mx-auto flex max-w-2xl flex-col items-left self-center gap-4 lg:-mt-10 lg:-mr-10 text-left">
            <BlurFade delay={0.50} inView direction="left">
            <Image 
        src="/25-media-perfect-solution.png" 
        alt="Description of image" 
        width={800} 
        height={500} 
      />
      </BlurFade>
            </div>
            <div className="relative flex flex-col items-center justify-center lg:pt-0">
               <div className="grid grid-cols-1 pt-10 lg:grid-cols-2 lg:pl-28 gap-10">
               <BlurFade delay={0.25} inView direction="right">
                <div className="">
                <MdAccessAlarms size={50} />
                <p className="mt-7 text-xl font-semibold">Quicker than building an in-house creative team</p>
                </div>
                </BlurFade>
                <BlurFade delay={0.25} inView direction="left">
                <div className="">
                <MdLeakAdd size={50} />
                <p className="mt-7 text-xl font-semibold">All your design needs, under one roof</p>
                </div>
                </BlurFade>
               </div>
            </div>
          </div>
        </div>
        </section>  
        <section id="services" className="flex w-full">
        <div className="relative flex max-w-7xl flex-col px-4 pb-20 lg:py-20 m-auto">
          <div className="grid grid-cols-1 pt-10 lg:grid-cols-3 lg:col-span-1 lg:pt-0">
          <div className="relative mx-auto flex max-w-2xl flex-col items-left gap-4 p-2 text-left md:ml-12 lg:col-span-1">
          <h2 className="text-4xl font-bold text-black leading-normal lg:max-w-md">
          Services We Provide With Exceptional Care.
          </h2>
          <BlurFade delay={0.25} inView>
          <Image 
        src="/services.png" 
        alt="Description of image" 
        width={500} 
        height={700} 
      />
      </ BlurFade>
            </div>
            <div className="lg:col-span-2 lg:ml-24">
            <p className="lg:max-w-md pb-4 text-lg">We offer a comprehensive range of creative services to help your business stand out in the digital world.</p>
            <Link href="/services" className="flex font-semibold relative gap-2 text-m pb-1 items-center btn-underline max-w-max btn-arrow">Know More <span className="li-icon"><MdArrowOutward size={15}/></span></Link>
            <ul>
            <BlurFade delay={0.25} inView direction="left">
            <li className="py-10 mt-10 flex items-center border-b border-gray-300 li-service"> <span className="mr-8 text-indigo-600">01</span> <span className="w-9/12 text-4xl">Branding and Strategy</span></li>
            </BlurFade>
            <BlurFade delay={0.50} inView direction="left">
            <li className="py-10 flex items-center border-b border-gray-300 li-service"> <span className="mr-8 text-indigo-600">02</span> <span className="w-9/12 text-4xl">Graphic Design</span></li>
            </BlurFade>
            <BlurFade delay={0.75} inView direction="left">
            <li className="py-10 flex items-center border-b border-gray-300 li-service"> <span className="mr-8 text-indigo-600">03</span> <span className="w-9/12 text-4xl">UI/UX Design</span></li>
            </BlurFade>
            <BlurFade delay={1} inView direction="left">
            <li className="py-10 flex items-center border-b border-gray-300 li-service"> <span className="mr-8 text-indigo-600">04</span> <span className="w-9/12 text-4xl">Web Development</span></li>
            </BlurFade>
            <BlurFade delay={1.25} inView direction="left">
            <li className="py-10 flex items-center border-b border-gray-300 li-service"> <span className="mr-8 text-indigo-600">05</span> <span className="w-9/12 text-4xl">Digital Marketing</span></li>
            </BlurFade>
            </ul>
            </div>
            </div>
            </div>
          </section>  
          <section id="client" className="flex w-full bg-custom-background">
          <div className="relative flex max-w-7xl flex-col px-4 pb-20 lg:py-20 m-auto">
          <BlurFade delay={0.25} inView direction="up">
          <h2 className="text-4xl font-bold text-black leading-normal lg:max-w-5xl mb-6 text-left">We've been fortunate to work with and for people from some amazing organizations.</h2>
          </BlurFade>
          <BlurFade delay={0.50} inView direction="up">
          <div className="grid grid-cols-5">
          <div className="p-14 border"><Image 
        src="/gmp-technical.jpg" 
        alt="Description of image" 
        width={150} 
        height={50} /></div>
      <div className="p-14 border"><Image 
        src="/lifeplan-techno.jpg" 
        alt="Description of image" 
        width={150} 
        height={50} /></div>
      <div className="p-14 border"><Image 
        src="/microrite.jpg" 
        alt="Description of image" 
        width={150} 
        height={50} /></div>
      <div className="p-14 border"><Image 
        src="/N.L.Dalmia-institute.jpg" 
        alt="Description of image" 
        width={150} 
        height={50} /></div>
      <div className="p-14 border"><Image 
        src="/urban-farm.jpg" 
        alt="Description of image" 
        width={150} 
        height={50}/></div>
      <div className="p-14 border"><Image 
        src="/valical.jpg" 
        alt="Description of image" 
        width={150} 
        height={50} /></div>
        <div className="p-14 border"><Image 
        src="/25-media-logo.png" 
        alt="Description of image" 
        width={150} 
        height={50} /></div>
        <div className="p-14 border"><Image 
        src="/25-media-logo.png" 
        alt="Description of image" 
        width={150} 
        height={50} /></div>
        <div className="p-14 border"><Image 
        src="/25-media-logo.png" 
        alt="Description of image" 
        width={150} 
        height={50} /></div>
        <div className="p-14 border"><Image 
        src="/25-media-logo.png" 
        alt="Description of image" 
        width={150} 
        height={50} /></div>
          </div>
          </BlurFade>
          </div>
          </section>
          <section id="testimnonial" className="flex justify-center w-full">
            <div className="relative flex max-w-7xl flex-col px-4 pb-20 lg:py-20 m-auto">
            <BlurFade delay={0.25} inView direction="up">
              <h2 className="text-4xl font-bold text-black leading-normal mb-6 text-center">Clients Feedback</h2>
            </BlurFade>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
                <BlurFade delay={0.50} inView direction="up">
                <div
                        className="bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
                        <div
                            className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                            <StarRating rating={5} />
                        </div>
                        <p className="text-lg leading-8 h-56 transition-all duration-500 mb-9 group-hover:text-gray-800 border-b">
                        Working with 25 Media for our brands has been a remarkable experience. The team is professional, and creative and brings quality to our brands through their innovative ideas.
                        </p>
                        <div className="flex items-center gap-5">
                            <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696229969.png" alt="avatar" />
                            <div className="grid gap-1">
                                <h5
                                    className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                                    Prashant K, </h5>
                                <span className="text-sm leading-6 text-gray-500">SEO Manager - Valical </span>
                            </div>
                        </div>
                    </div> 
                    </BlurFade>
                    <BlurFade delay={0.75} inView direction="up">
                    <div
                        className="bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
                        <div
                            className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                            <StarRating rating={5} />
                        </div>
                        <p className="text-lg leading-8 h-56 transition-all duration-500 mb-9 group-hover:text-gray-800 border-b">
                        Very understanding and many times go out of their way to assist their customers.
                        </p>
                        <div className="flex items-center gap-5">
                            <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696229969.png" alt="avatar" />
                            <div className="grid gap-1">
                                <h5
                                    className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                                    Alson David, </h5>
                                <span className="text-sm leading-6 text-gray-500">UF </span>
                            </div>
                        </div>
                    </div>
                    </BlurFade>
                    <BlurFade delay={1} inView direction="up">
                    <div
                        className="bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600 slide-active:border-indigo-600">
                        <div
                            className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                            <StarRating rating={5} />
                        </div>
                        <p className="text-lg leading-8 h-56 transition-all duration-500 mb-9 group-hover:text-gray-800 border-b">
                        Our experience with 25 Media and Team has been really good. We contacted them for Social Media and Websites services and we got results in first 6 months itself.
                        </p>
                        <div className="flex items-center gap-5">
                            <img className="rounded-full object-cover" src="https://pagedone.io/asset/uploads/1696229969.png" alt="avatar" />
                            <div className="grid gap-1">
                                <h5
                                    className="text-gray-900 font-medium transition-all duration-500  group-hover:text-indigo-600 swiper-slide-active:text-indigo-600">
                                    Prashant Kakde, </h5>
                                <span className="text-sm leading-6 text-gray-500">HB </span>
                            </div>
                        </div>
                    </div> 
                </BlurFade>
            </div>
            </div>
    </div>
          </section>
          <Loader />
    </main>
  );
}
