import Image from "next/image";
import logo from '../../assets/rpLogoWhite.png'
import linkedIn from '../../assets/linkedin-square-logo-72.png'


function Footer() {
  return (
    <div className='bg-stone-950 text-white w-full py-5 lg:py-20 flex-1 lg:flex gap-4 align-top'>
        <div className="text-start ms-5 lg:text-center lg:w-2/5 md:text-xl">
            <span className="me-16 lg:me-5">The greatest enemy of knowledge  is not ignorance rather its the illusion of knowlegde</span>
        </div>

        <div className="flex align-top gap-5 ms-5 justify-start lg:justify-around lg:w-full">
            <div className="order-2  mt-5 lg:mt-0 lg:order-1">
                <p>tabotoben115@gmail.com</p>
                <p>
                    <a href="https://www.linkedin.com/in/tabot-oben-584673211" target="_blank" rel="noopener noreferrer" className="text-white-500 hover:underline">
                        <Image className="w-7" style={{display: "inline-block"}} src={linkedIn} alt="linedIn" /> <span>View Profile</span>
                    </a>
                </p>
            </div>
            <div className="order-1 mt-5 lg:mt-0 lg:order-2">
                <Image src={logo} alt="logo" />
            </div>
        </div>
    </div>
  )
}

export default Footer