import {waveup,products} from '../assets/asset.js';

const Products = () => {
  return (
    <section className='bg-[#d9d9d9] w-full h-full pb-10'>
        <img id='products' src={waveup} alt="" className='rotate-180 w-full max-w-8xl mt-[-1px]'/>
        <div className=" px-[5%] mx-auto max-xl:max-w-full xl:max-w-fit">
            <a className='underline text-black font-bold text-4xl max-md:text-2xl' href="">Products</a>
            <ul className=' grid grid-cols-3 justify-items-center gap-[1.5rem] mt-10 max-md:grid-cols-[auto] max-xl:grid-cols-2'>
                {products.map((data,index)=>{
                    return <li className='bg-black w-full rounded-2xl py-8 px-20 max-md:px-5 mb-3 text-center max-md:w-full' key={index}>
                        <img className='rounded-xl w-[230px] h-[130px] mx-auto' src={data.img}alt={data.title} />
                        <h1 className='text-xl text-center font-medium my-1'>{data.title}</h1>
                        <p className='text-center text-[#87c159] font-bold text-3xl'>$ {data.price}</p>
                        <div className='mt-5 flex space-x-8 justify-center'>
                            <button className='py-3 px-6 max-md:px-3 font-bold text-xl cursor-pointer rounded-[10px] text-black bg-white'>Wish List</button>
                            <button className='py-3 px-6 max-md:px-3 font-bold text-xl cursor-pointer rounded-[10px] bg-[#87c159]'>Buy Now</button>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    </section>
  )
}

export default Products