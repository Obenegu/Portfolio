import Image from "next/image"
import html from '../../assets/html5-logo-72.png'
import css from '../../assets/css3-logo-72.png'
import javascript from '../../assets/javascript-logo-72.png'
import typescript from '../../assets/typescript-logo-72.png'
import wordpress from '../../assets/wordpress-logo-72.png'
import csharp from '../../assets/1175240gg.webp'
import react from '../../assets/react-logo-72.png'
import arow from '../../assets/Arrow right.png'
import thumbnail from '../../assets/art-4377201_1280.jpg'
import geniusland from '../../assets/WhatsApp Image 2024-10-19 at 03.30.06_3e1bd5b0.jpg'



function AboutMe() {

    const skillset = [
        {skill: 'HTML', icon: html},
        {skill: 'CSS', icon: css},
        {skill: 'JAVASCRIPT', icon: javascript},
        {skill: 'C#', icon: csharp},
        {skill: 'REACT/NEXT JS', icon: react},
        {skill: 'React Native', icon: react},
        {skill: 'Typescript', icon: typescript},
        {skill: 'Wordpress', icon: wordpress}
    ]

    const projects = [
        {title: "Bloosat", language: "C#", thumbnail: thumbnail, tools: "GitHub", work: "Full website", siteLink: "https://bloosat.com/"},
        {title: "Bank of Africa UK", language: "Html css js bootstrap", thumbnail: thumbnail, tools: "GitHub", work: "Full website (Team work)", siteLink: "https://www.bankofafricaunitedkingdom.co.uk/html/home/index.html"},
        {title: "Agora Grp", language: "C#", thumbnail: thumbnail, tools: "GitHub", work: "Landing Page", siteLink: "https://www.agoraafricalimited.com/"},
        {title: "Express Grp", language: "C#", thumbnail: thumbnail, tools: "GitHub", work: "Landing Page", siteLink: "https://expressgroupcam.my.canva.site/"},
        {title: "U-Ride", language: "Wordpress", thumbnail: thumbnail, tools: "N/A", work: "Single Page", siteLink: "https://car.ebureautique.com/"},
        {title: "Sunday", language: "C#", thumbnail: thumbnail, tools: "GitHub", work: "Full website (Team Work)", siteLink: "https://www.sunday-org.com/"},
        {title: "Ventes Real Estate", language: "Wordpress", thumbnail: thumbnail, tools: "N/A", work: "Full website", siteLink: "https://location.ebureautique.com/"}
    ]

  return (
    <>
    <div className="bg-white text-stone-950 px-6 md:px-0 md:w-4/6 md:mx-auto">

        <div className="md:w-9/12 md:mx-auto mb-10">

            <div className="">
                <h1 className="font-bold mb-3 mt-7">About me</h1>
                <p className="text-justify">
                    I’m <b>TABOT</b>, a creative and detail-driven front-end developer good in both french and english with a knack for crafting stunning, user-friendly interfaces. Skilled in React, TypeScript, C#, JavaScript, and Tailwind CSS, I turn ideas into sleek, responsive web experiences that captivate and engage.
                    With a strong eye for design and a passion for performance, I specialize in building interfaces that are as functional as they are beautiful. 
                </p>
            </div>

            <div className="mt-10">
                <h3 className="font-bold mb-5">My Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

                    {
                        skillset.map((item, index) => (

                            <div key={index} className="flex gap-1 align-top" style={{alignItems: 'center'}}>
                                <div>
                                    <Image src={item.icon} className="w-8 h-8" alt={item.skill} />
                                </div>
                                <p>{item.skill}</p>
                            </div>

                        ))
                    }

                </div>
            </div>

        </div>

        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-3">
                {
                    projects.map((item, index) => (

                        <div key={index} className="relative w-full h-full text-white border-2">
                            <Image src={item.thumbnail} className="w-full h-full" alt="card" />
                            <div className="absolute z-10 h-full w-full px-2 top-0 left-0 ms-1">
                                <h1 className="text-white mt-5 text-xl md:text-sm lg:text-xl"><span>Project Title - </span>{item.title}</h1>
                                <h3 className="text-white mt-3 text-xl md:text-sm lg:text-xl">Technologies Used:</h3>
                                <ul className="mt-5 list-disc text-xl md:text-sm lg:text-xl list-inside">
                                    <li>Frontend: {item.language}</li>
                                    <li className="mt-2">Tools: {item.tools}</li>
                                    <li className="mt-2">{item.work}</li> 
                                </ul>
                            </div>

                            <button className="mb-3 absolute z-20 bottom-5 left-2/4" style={{transform: 'translateX(-50%)'}}>
                                <a href={item.siteLink} className="rounded-2xl text-sm tracking-wide border border-amber-700 p-2 bg-amber-700" target="_blank">Visit Website</a>
                            </button>
                    </div>
                    ))
                }

            </div>
        </div>

        <div className="md:flex gap-5 my-5 justify-center">
            <button className="flex justify-center py-1 px-3 w-full md:w-auto mb-5 md:mb-0" style={{alignItems: 'center', backgroundColor: 'lightgrey'}}>
                <Image src={arow} alt="arrow" style={{width: '2rem'}}/>
                <span className="text-sm">
                    <a href="https://wa.me/237671316753" target="_blank" rel="noopener noreferrer" className="text-white-500 hover:underline">
                        ask more info
                    </a>
                    {/* <Link href="/allProjects">ALL Projects</Link> */}
                </span>
            </button>
        </div>
    </div>

<section className="bg-gray-100 py-16 px-4">
<div className="max-w-7xl mx-auto">
    {/* <!-- Section Heading --> */}
    <h2 className="text-xl font-bold text-center text-gray-800 mb-8 md:text-4xl">
        Mobile Development Expertise
    </h2>

    {/* <!-- Content Wrapper --> */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
    {/* <!-- Text Content --> */}
    <div className="lg:ms-10 text-sm md:text-base">
        <h3 className="text-xl text-center font-semibold text-gray-800 mb-4">
            I Build User-Centric Mobile Applications
        </h3>
        <p className="text-gray-600 mb-4">
        With a passion for mobile development, I specialize in creating
        intuitive and dynamic mobile applications. One of my notable projects
        is <span className="font-bold text-gray-800">GeniusLand</span>.
        </p>
        <p className="text-gray-600 mb-4">
        Technologies used in GeniusLand:
        </p>
        <ul className="list-disc list-outside ms-5 text-gray-600 mb-4">
        <li><span className="font-medium text-gray-800">React Native Paper</span>: Smooth and consistent UI components</li>
        <li><span className="font-medium text-gray-800">TanStack Query</span>: Efficient data fetching and state management</li>
        <li><span className="font-medium text-gray-800">Async Storage</span>: Seamless offline data storage</li>
        </ul>
        <p className="text-gray-600 ms-5">
        I strive to create seamless and powerful user experiences that solve
        real-world problems.
        </p>
    </div>

    {/* <!-- Image/Visual Content --> */}
    <div className="flex justify-center">
        <Image
        src={geniusland}
        alt="GeniusLand Application"
        className="rounded-lg shadow-lg h-auto w-56"
        />
    </div>
    </div>
</div>
</section>
</>
  )
}

export default AboutMe