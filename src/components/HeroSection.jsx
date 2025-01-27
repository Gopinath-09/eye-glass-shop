import {glass,rectangle,waveup} from '../assets/asset.js';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center">
        <div className="flex items-center justify-center gap-x-20 max-sm:flex-col max-sm:gap-y-10 px-[5%]">
            <div className='w-1/2 flex flex-col gap-y-4 items-start z-10 max-sm:w-full max-md:items-left'>
                <h2 className='text-7xl uppercase font-semibold text-[#87c159] max-md:text-6xl'>Eye Glasses</h2>
                <p className='text-xl font-thin'>Fashionable eyewear for every mood, every day</p>
                <a href='#products' className='bg-black text-white font-semibold px-4 py-2 rounded cursor-pointer'>Shop Now</a>
            </div>
            <img src={glass} alt="glass" className='max-w-[500px] max-sm:w-3/4 max-md:px-[10%]' />
        </div>
        <a href='#products' className='mb-40 mt-5 z-10 bg-[#87c159] p-3 flex gap-1 rounded cursor-pointer max-md:mb-0'>
          <span className='font-bold'>View</span>
          <span className='font-bold text-black'>Products</span>
        </a>
        <img src={rectangle} alt="rectangle" className='absolute h-full w-full max-sm:object-cover'/>
        <img src={waveup} alt="" className='absolute bottom-0 w-full max-w-8xl'/>
    </section>
  )
}
