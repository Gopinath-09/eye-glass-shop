import { a1,a2,a3 } from "../assets/asset"
const Aboutus = () => {
  return (
    <section className="bg-[#d9d9d9] py-25 text-center">
        <h1 className="underline text-black font-bold text-4xl  max-md:text-2xl">About us</h1>
        <div className="flex mx-auto w-full justify-center justify-self-start gap-40 px-5 my-20 max-md:flex-col max-md:gap-20">
            <div className="space-y-1">
                <img className="w-65 mx-auto" src={a1} alt="" />
                <h1 className="text-3xl text-black font-bold">Trusted</h1>
                <p className="text-black text-xl">Over 1000</p>
                <p className="text-black text-xl">Happy Customers</p>
            </div>
            <div className="space-y-1">
                <img className="w-70 mx-auto" src={a2} alt="" />
                <h1 className="text-3xl text-black font-bold">Feedbacks</h1>
                <p className="text-black text-xl">4.0 of 5.0</p>
                <p className="text-black text-xl">Feedbacks</p>
            </div>
            <div className="space-y-1">
                <img className="w-70 mb-4 mx-auto" src={a3} alt="" />
                <h1 className="text-3xl text-black font-bold">Models</h1>
                <p className="text-black text-xl">99+ Models</p>
                <p className="text-black text-xl">Eye Wears</p>
            </div>
        </div>
        <p className="text-black max-w-[1280px] px-[5%] mx-auto text-xl">An eyeglasses e-commerce platform provides a convenient and accessible way for customers to browse, select, and purchase prescription eyewear online. This type of business leverages digital technology to offer a wide range of eyeglasses frames, lenses, and related products to consumers.</p>
    </section>
  )
}

export default Aboutus