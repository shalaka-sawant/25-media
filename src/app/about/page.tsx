import Image from "next/image";

const About = () => {
    return(
        <section id="contact" className="justify-left w-full">
            <div className="relative flex max-w-7xl flex-col px-4 pb-20 lg:py-20 m-auto">
               <div className="">
                <h2 className="text-6xl font-bold text-black leading-normal">We are a full-service creative and digital agency, partnering with some of the world’s biggest brands.</h2>
                <div className="grid grid-cols-1 pt-10 lg:grid-cols-3 lg:col-span-1 lg:pt-0">
                    <div className="relative flex flex-col items-left gap-4 p-2 text-left lg:col-span-2">
                    <p className="text-lg py-4">We thrive on transforming ideas into powerful experiences. By blending creativity with digital innovation, we provide a complete suite of services that drive results, from design and development to digital marketing and branding. Whether you're looking to strengthen your online presence, enhance user engagement, or launch a compelling brand campaign, we have the expertise to make it happen and help your brand make an impact on the world stage.</p>
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
                    <h2 className="text-4xl font-bold text-black leading-normal lg:max-w-md">We deliver our best work with clients.</h2>
                    <p className="text-lg py-4">we collaborate closely, understand their unique goals, and align on a shared vision. By fostering open communication and a strong partnership, we are able to tailor our approach to meet their specific needs and challenges. This commitment to understanding and working together leads to results that exceed expectations and create lasting value.</p>
                    </div>
                    <div className="p-2">
                    <Image 
        src="/best-services.png" 
        alt="Description of image"
        layout="responsive" 
        width={1200} 
        height={800} 
      />
                    </div>
                </div>
                </div>
                <div className="testimonial">
                <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
    <div className="max-w-xl">
      <h2 className="text-4xl font-bold text-black leading-normal">Our leadership, driving success</h2>
      <p className="text-lg py-4"> Together, we shape the direction of the agency and ensure we stay ahead of the curve while delivering exceptional results for our clients.</p>
    </div>
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
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
    </ul>
  </div>
</div>

                </div>
        </section>
    )
}  

export default About;