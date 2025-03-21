import { BlurFade } from "@/components/magicui/blur-fade";
import Image from "next/image";

const About = () => {
    return(
        <section id="contact" className="justify-left w-full">
            <div className="relative flex max-w-7xl flex-col px-4 pb-20 lg:py-20 m-auto">
               <div className="">
               <BlurFade delay={0.25} inView direction="up">
                <h2 className="text-6xl font-bold text-black leading-normal">We are a full-service creative and digital agency, partnering with some of the world’s biggest brands.</h2>
                </BlurFade>
                <div className="grid grid-cols-1 pt-10 lg:grid-cols-3 lg:col-span-1 lg:pt-0">
                    <div className="relative flex flex-col items-left gap-4 p-2 text-left lg:col-span-2">
                    <BlurFade delay={0.25 * 2} inView direction="up">
                    <p className="text-lg py-4">We thrive on transforming ideas into powerful experiences. By blending creativity with digital innovation, we provide a complete suite of services that drive results, from design and development to digital marketing and branding. Whether you're looking to strengthen your online presence, enhance user engagement, or launch a compelling brand campaign, we have the expertise to make it happen and help your brand make an impact on the world stage.</p>
                    </BlurFade>
                    </div>
                    <div className="lg:col-span-1 lg:ml-24 content-center">
                        <div className="">
                        </div>
                    </div>
                </div>
               </div> 
               </div>
               <div className="relative flex w-full bg-custom-background">
               <div className="grid grid-cols-1 max-w-7xl px-4 m-auto py-20 lg:grid-cols-2">
                    <div className="content-center p-2">
                    <BlurFade delay={0.25} inView direction="right">
                    <h2 className="text-4xl font-bold text-black leading-normal lg:max-w-md">We deliver our best work with clients.</h2>
                    <p className="text-lg py-4">we collaborate closely, understand their unique goals, and align on a shared vision. By fostering open communication and a strong partnership, we are able to tailor our approach to meet their specific needs and challenges. This commitment to understanding and working together leads to results that exceed expectations and create lasting value.</p>
                    </BlurFade>
                    </div>
                    <BlurFade delay={0.25} inView direction="left">
                    <div className="p-2">
                    <Image 
        src="/best-services.png" 
        alt="Description of image"
        layout="responsive" 
        width={1200} 
        height={800} 
      />
                    </div>
                    </BlurFade>
                </div>
                </div>
                <div className="testimonial">
                <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
  <BlurFade delay={0.25} inView direction="up">
    <div className="max-w-xl">
      <h2 className="text-4xl font-bold text-black leading-normal">Our leadership, driving success</h2>
      <p className="text-lg py-4"> Together, we shape the direction of the agency and ensure we stay ahead of the curve while delivering exceptional results for our clients.</p>
    </div>
    </BlurFade>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
    <BlurFade delay={0.25} inView direction="up">
      <li>
        <div className="flex items-center gap-x-6">
        <Image 
        src="/asawari.png" 
        alt="Description of image"
        className="size-16 rounded-full bg-custom-background"
        width={70} 
        height={70} 
      />
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Asawari Mestry</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Project Cosnsultant</p>
          </div>
        </div>
      </li>
      </BlurFade>
      <BlurFade delay={0.50} inView direction="up">
      <li>
        <div className="flex items-center gap-x-6">
        <Image 
        src="/Ashwini.png" 
        alt="Description of image"
        className="size-16 rounded-full bg-custom-background"
        width={70} 
        height={70} 
      />
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Ashwini M</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Creative Head</p>
          </div>
        </div>
      </li>
      </BlurFade>
      <BlurFade delay={0.75} inView direction="up">
      <li>
        <div className="flex items-center gap-x-6">
        <Image 
        src="/prashant.png" 
        alt="Description of image"
        className="size-16 rounded-full bg-custom-background"
        width={70} 
        height={70} 
      />
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Prashant G.</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Front End Developer</p>
          </div>
        </div>
      </li>
      </BlurFade>
      <BlurFade delay={1} inView direction="up">
      <li>
        <div className="flex items-center gap-x-6">
        <Image 
        src="/shalaka.png" 
        alt="Description of image"
        className="size-16 rounded-full bg-custom-background"
        width={70} 
        height={70} 
      />
          <div>
            <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Shalaka Sawant</h3>
            <p className="text-sm/6 font-semibold text-indigo-600">Full Stack Developer</p>
          </div>
        </div>
      </li>
      </BlurFade>
    </ul>
  </div>
</div>
</div>
<div className="bg-custom-background py-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
  <div className="grid grid-cols-1 gap-x-24 gap-y-16 lg:grid-cols-3">
  <BlurFade delay={0.25} inView direction="up">
    <div className="grid">
      <span className="text-5xl font-bold text-black leading-normal border-b">05+</span>
      <span className="text-2xl font-bold text-black leading-normal pt-5">Years of Experience</span>
      <p className="text-lg py-4">we have successfully developed and executed data-driven strategies that drive brand awareness, engagement.</p>
    </div>   
    </BlurFade>
    <BlurFade delay={0.50} inView direction="up">
    <div className="grid">
      <span className="text-5xl font-bold text-black leading-normal border-b">50+</span>
      <span className="text-2xl font-bold text-black leading-normal pt-5">Projects Delivered</span>
      <p className="text-lg py-4">We ensuring that every project we handle exceeds client expectations, driving measurable success and growth.</p>
    </div> 
    </BlurFade>
    <BlurFade delay={0.75} inView direction="up">
    <div className="grid">
     <span className="text-5xl font-bold text-black leading-normal border-b">98%</span>
     <span className="text-2xl font-bold text-black leading-normal pt-5">Client Satisfaction</span>
     <p className="text-lg py-4">Client satisfaction is not just a goal but a reflection of our passion for delivering impactful, high-quality outcomes.</p>
    </div>
    </BlurFade>
  </div>
</div>
</div>
        </section>
    )
}  

export default About;