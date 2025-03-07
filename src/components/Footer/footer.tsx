import Link from "next/link";
import MouseFollow from "../Header/mouseFollows"
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
    return(
    <footer className="bg-dark-background text-dark-text-color">
        <section className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 ">
            <div className="py-8">
                <div className="grid grid-cols-1 py-8 lg:grid-cols-3">
                  <div className="lg:col-span-2 text-left relative">
                  <h2 className="text-7xl font-medium">Let's work together</h2>
                  <Link href="/contact" className="flex ml-1 mt-10 font-semibold relative gap-2 text-xl pb-1 items-center btn-underline max-w-max btn-arrow">Contact Us <span className="li-icon"><MdArrowOutward size={20}/></span></Link>
                  </div>
                  <div className="lg:col-span-1 text-left content-center">
                    <div className="grid gap-10">
                    <span className="py-4 px-10 border rounded-full text-lg w-max">25media@gmail.com</span>
                    <span className="py-4 px-10 border rounded-full text-lg w-max">+91 9667564345</span>
                    </div>
                  </div>
                </div>
            </div>
        <div className="grid grid-cols-1 py-8 lg:grid-cols-4 border-t border-gray-300">
            <div className="lg:col-span-1">
           <Link href='/'>Privacy Policy </Link>            </div>
            <div className="lg:col-span-2 text-center">
            <span className="">© 2025 | 25 Media Private Limited | All rights reserved</span>
            </div>
            <div className="lg:col-span-1 text-right">
            <span className="">Follow us</span>
            </div>
            </div>
        <MouseFollow />
        </section>
        </footer>
    )
}

export default Footer;