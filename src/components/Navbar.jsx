import {logo , navLink} from '../assets/asset';

export const Navbar = () => {
  window.addEventListener('scroll',()=>{
    console.log(window.scrollY);
    window.scrollY > 100 ? document.getElementById('navbar').style.backgroundColor = 'black' :
    document.getElementById('navbar').style.backgroundColor = '';
  })
  return (
    <nav id='navbar' className='px-4 py-4 flex justify-between fixed w-full z-100 gap-6 xl:px-[5%]'>
        <img src={logo} alt="" className='w-28 max-md:w-15 max-md:h-12'/>
        <div className='flex items-center gap-x-6 max-md:gap-3'>
            <ul className='flex items-center justify-between gap-x-6 max-md:gap-x-3 text-white'>
                {navLink.map((link, index)=>(
                    <li className='cursor-pointer font-medium max-md:text-[.9rem]' key={index}>{link.title}</li>
                ))}
            </ul>
            <button className='bg-slate-200 text-black font-semibold px-4 py-2 rounded max-md:text-[.8rem] max-md:px-3 max-md:py-2'>Sign In</button>
        </div>
    </nav>
  )
}
