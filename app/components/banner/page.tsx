import './styles.css'
import Image from "next/image";
import profilePhoto from '../../assets/Cv photo.jpg'
import NavButton from '../../assets/Group 6.png'

function Banner() {
  return (
    <div className="banner-bg-img bg-cover bg-center bg-stone-950 text-white w-full h-lvh" style={{height: '80vh'}}>
      <div className='flex justify-between container mx-auto pt-9 px-5' style={{alignItems: 'center'}}>
        <div className='rounded-2xl border-2 border-black w-24'>
          <Image className='w-full rounded-3xl h-auto object-fill' src={profilePhoto} alt='Profile-photo' />
        </div>
        <div>
          <Image src={NavButton} alt='nav button' />
        </div>
      </div>
      <div className='grid place-items-center md:place-items-start py-9 h-3/5'>
        <div className='md:w-2/4 md:ms-12'>
          <h1 className='banner-heading-fs font-bold text-center md:text-left tracking-wider'>TABOT JUNIOR</h1>
          <p className='font-light banner-paragraph-fs text-center md:text-left'>FRONT-END WEB <br /> DEVELOPER</p>
        </div>
      </div>
    </div>
  )
}

export default Banner