import Navbar from "../Navbar/Navbar"

// eslint-disable-next-line react/prop-types
const Header = ({title})=>{
    return<>
        <Navbar />
        <header className="bg-black text-white relative">
            <div className="mx-auto w-full h-[200px] text-center align-content-center">
                <div className="flex justify-center items-center absolute inset-0">
                        <h1 className="font-bold text-[40px] cursor-default">{title}</h1>
                </div>
            </div>
        </header>
    </>
}
export default Header 