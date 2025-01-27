import { logo,insta,x,fb,wa } from "../assets/asset"

const Footer = () => {
  return (
    <footer className="p-20">
        <div className="flex justify-center gap-40 max-xl:gap-20 max-sm:gap-10 max-xl:flex-wrap">
            <div className="flex flex-col justify-end max-md:text-center gap-6">
                <img className="w-34 max-md:mx-auto" src={logo} alt="" />
                <a href="">Contact Us</a>
                <a href="">Email:eyeglasses@gmail.com</a>
                <a href="">PH:+123 456 789</a>
            </div>
            <div className="flex flex-col justify-end text-center gap-6">
                <h1 className="font-bold">Quik Links</h1>
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Sign in / Sign up</a>
            </div>
            <div className="flex flex-col justify-end gap-2">
                <h1 className="font-bold">Follow US</h1>
                <a href=""><img className="w-7 mx-auto" src={insta} alt="" /></a>
                <a href=""><img className="w-7 mx-auto" src={fb} alt="" /></a>
                <a href=""><img className="w-7 mx-auto" src={x} alt="" /></a>
                <a href=""><img className="w-7 mx-auto" src={wa} alt="" /></a>
            </div>
            <div className="flex flex-col justify-center text-center gap-4">
                <h1 className="font-bold">Suscribe us</h1>
                <a className="py-1 px-16 rounded-[9px] bg-[#87c159]" href="">Email</a>
                <a className="px-2 py-1 rounded-[9px] font-bold w-max mx-auto bg-white text-black" href="">suscribe</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer