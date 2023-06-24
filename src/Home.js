import Nav from './cmpnts/Nav';
import about from './img/about.jpg';
import {CgGym} from 'react-icons/cg/';
import {GiWeightLiftingUp} from 'react-icons/gi/';

const Blocks = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center relative'>
      <div className='w-3/4 bg-red-600 py-5 lg:py-20 px-5 mx-auto text-right max-w-[480px] md:mx-0'>
        <h1 className='heading'>Body Building</h1>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia ad maiores quisquam facilis labore veritatis expedita mollitia atque a, perferendis consectetur dolore explicabo odit non tempore vero culpa aspernatur minus! Reiciendis laudantium minus fugit.</p>
        <button className='btn'>Join Now</button>
      </div>

      <div className='w-3/4 bg-gray-900 py-5 lg:py-20 px-5 mx-auto text-left max-w-[480px] md:mx-0'>
        <h1 className='heading'>Body Building</h1>
        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia ad maiores quisquam facilis labore veritatis expedita mollitia atque a, perferendis consectetur dolore explicabo odit non tempore vero culpa aspernatur minus! Reiciendis laudantium minus fugit.</p>
        <button className='btn'>Join Now</button>
      </div>
      </div>
  )
}

const Crew = ()=>{
  return(
    <div className="flex flex-col py-10 md:flex-row max-w-[950px] mx-auto relative">
      <div className="block mx-auto lg:mx-0 basis-1">
        <img src={about} alt="crew" className='w-3/4 sm:w-[500px] md:w-[650px] lg:w-[700px]'/>
      </div>

      <div className="mx-auto flex flex-col lg:mx-0 p-3 md:pl-4 md:justify-between basis-1">
        <h1 className='text-black font-bold font-sans text-3xl mb-3'>10 Years Experience</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur exercitationem, nulla laborum, distinctio accusantium optio accusamus molestias qui sint quaerat obcaecati tempore! Veritatis, distinctio?</p>
        
        <div className="flex justify-around items-center">
         <CgGym size={125}/>
         <GiWeightLiftingUp size={125}/>
        </div>
         <button className='!border-black btn block !bg-red-600 mx-auto max-w-[200px]'>Join Now</button>
      </div>
    </div>
  )
}



function Home() {

  return(
    <div className='max-w-1200 mx-auto'>

      <div className="w-screen h-[700px] lg:before:opacity-30 before:opacity-0 lg:bg-[url('./img/carousel-1.jpg')] bg-cover bg-no-repeat bg-center fade">
        <Nav />
        <div className="relative mx-auto h-full flex flex-col items-center justify-center text-center w-screen bg-[url('./img/carousel-1.jpg')] lg:bg-none bg-cover bg-center fade lg:before:opacity-0">
            <h3 className='relative text-2xl text-red-900 font-bold'>Gym & Fitness Center</h3>
            <h1 className='relative text-[350%] text-[#ddd] font-mono font-semibold py-6'>Get Body In Town</h1>
            <button className='relative btn'>Join Us Now</button>
        </div>
      </div>   

      <Blocks />   

      <Crew /> 

    </div>
  )
}

export default Home;
