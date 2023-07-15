import Nav from './cmpnts/Nav';

import about from './img/about.jpg';
import f1 from './img/feature-1.jpg';
import f2 from './img/feature-2.jpg';
import f3 from './img/feature-3.jpg';
import f4 from './img/feature-4.jpg';

import {CgGym} from 'react-icons/cg/';
import {GiWeightLiftingUp} from 'react-icons/gi/';
import {GiMeal} from 'react-icons/gi/';
import {GiProgression} from 'react-icons/gi/';
import {SiRobotframework} from 'react-icons/si/';

const Blocks = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center relative bg-white overflow-hidden">

      <div className="w-5/6 bg-red-600 py-5 lg:py-20 px-5 relative mx-auto text-right max-w-[480px] md:mx-0 isolate overflow-hidden
                      before:content-['🏋️‍♀️'] before:text-[200px] before:block before:font-extrabold before:absolute before:align-baseline before:bottom-0 before:left-0 before:z-[-1] before:saturate-0 before:brightness-[100] before:opacity-10">
        <h1 className='heading'>Body Building</h1>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia ad maiores quisquam facilis labore veritatis expedita mollitia atque a, perferendis consectetur dolore explicabo odit non tempore vero culpa aspernatur minus! Reiciendis laudantium minus fugit.</p>
        <button className='btn'>Join Now</button>
      </div>

      <div className="w-5/6 relative bg-gray-900 py-5 lg:py-20 px-5 mx-auto text-left max-w-[480px] md:mx-0 isolate overflow-hidden
                      before:content-['💪'] before:text-[200px] before:block before:font-extrabold before:absolute before:align-baseline before:bottom-0 before:right-0 before:z-[-1] before:saturate-0 before:brightness-[100] before:opacity-10">
        <h1 className='heading'>Body Building</h1>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia ad maiores quisquam facilis labore veritatis expedita mollitia atque a, perferendis consectetur dolore explicabo odit non tempore vero culpa aspernatur minus! Reiciendis laudantium minus fugit.</p>
        <button className='btn'>Join Now</button>
      </div>
    </div>
  )
}

const Crew = ()=>{
  return(
    <div className=" flex flex-col bg-white my-10 md:flex-row max-w-[1200px] h-auto mx-auto relative">
      <div className="w-full p-1 ">
        <img src={about} alt="crew" className='w-5/6 md:h-[500px] sm:w-3/4 mx-auto md:w-full md:object-cover md:object-center lg:object-contain'/>
      </div>

      <div className="w-[95%] sm:w-5/6 md:w-full p-3 flex flex-col mx-auto">
        <h1 className='text-black font-bold font-sans text-3xl mb-3'>10 Years Experience</h1>
        <p className='text-lg md:text-xl text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem, nulla laborum, distinctio accusantium optio accusamus molestias qui sint quaerat obcaecati tempore! Veritatis, distinctio?</p>
        
        <div className="flex justify-between md:justify-around items-center w-full">
         <div className='flex-1'>
            <CgGym size={100} className='block w-full mx-auto'/>
            <h2 className='text-2xl font-bold text-slate-900'>Certified GYM</h2>
            <p className='text-md md:text-lg text-slate-700'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente. </p>
          </div>
          <div className='flex-1'>
            <GiWeightLiftingUp size={100} className='block w-full mx-auto'/>
            <h2 className='text-2xl font-bold text-slate-900'>Award Winning</h2>
            <p className='text-md md:text-lg text-slate-700'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente. </p>
          </div>
        </div>
         <button className='btn block !bg-red-600 mx-auto max-w-[200px] hover:!bg-slate-900 hover:!text-white'>Learn More</button>
      </div>
    </div>
  )
}

const Three = () => {
  return(
    <div className='flex flex-col justify-center py-5 md:py-20 my-2 md:my-8 items-center w-full md:h-96 text-gray-300 md:flex-row'>
      <div className="flex min-h-40 p-2 bg-slate-900 md:flex-col items-center ">
        <GiMeal size={100} className='p-2'/>
        <div className="flex flex-col pl-3">
          <h2 className='text-xl font-bold text-white md:my-2'>Nutrition</h2>
          <p className='text-gray-200'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus tempore amet officia ipsam minima corrupti ea! Iste cumque et magni! </p>
        </div>
      </div>

      <div className="flex min-h-40 p-2 bg-red-600 md:flex-col items-center ">
        <GiProgression size={100} className='p-2'/>
        <div className="flex flex-col pl-3">
          <h2 className='text-xl font-bold text-white md:my-2'>Progress</h2>
          <p className='text-gray-200'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus tempore amet officia ipsam minima corrupti ea! Iste cumque et magni! </p>
        </div>
      </div>

      <div className="flex min-h-40 p-2 bg-slate-900 md:flex-col items-center ">
        <SiRobotframework size={100} className='p-2'/>
        <div className="flex flex-col pl-3">
          <h2 className='text-xl font-bold text-white md:my-2'>Work Out</h2>
          <p className='text-gray-200'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus tempore amet officia ipsam minima corrupti ea! Iste cumque et magni! </p>
        </div>
      </div>
    </div>
  )
}

const Feature = ({img, header, text})=>{
  return(
    <div className="flex">
      <div className=''>
        <img src={img} alt={header} />
        <CgGym size={75} />
      </div>
      <div>
        <h1>{header}</h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

const Benifits = () => {
  return(
    <div className="my-2 md:my-4">
      <h2 className="text-red-600 font-bold text-center">Why Choose Us?</h2>
      <h1 className="text-3xl text-red-600 text-center font-bold">Why Chosse Us?</h1>
      <div className="flex">
        <Feature img={f1} header="Header" text='lorem'/>
      </div>  

    </div>
  )
}

function Home() {
  return(
    <div className='max-w-1200 mx-auto'>

      <div className="h-[700px] md:before:opacity-30 before:opacity-0 md:bg-[url('./img/carousel-1.jpg')] bg-cover bg-no-repeat bg-center fade">
        <Nav />
        <div className="relative mx-auto h-full flex flex-col items-center justify-center text-center w-full bg-[url('./img/carousel-1.jpg')] md:bg-none bg-cover bg-center fade md:before:opacity-0">
            <h3 className='relative text-2xl text-red-600 font-bold'>Gym & Fitness Center</h3>
            <h1 className='relative text-[350%] text-[#ddd] font-mono font-semibold py-6'>Get Body In Town</h1>
            <button className='relative btn'>Join Us Now</button>
        </div>
      </div>   

      <Blocks />   
      <Crew /> 
      <Three />
      <Benifits />

    </div>
  )
}

export default Home;
