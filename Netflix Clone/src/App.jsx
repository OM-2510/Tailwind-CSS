import Navbar from "./Components/navbar"
import SignIn from "./Components/sign-in"
import TrendingSection from "./Components/trending-section"

export default function App(){
    return(       
            <>
                <header className="relative h-full bg-cover bg-no-repeat bg-center bg-[url(/src/assets/bg.jpg)] m-0 p-0">
                    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                    <div className="relative z-10">
                        <Navbar />
                        <SignIn />
                    </div>
                </header>

                <div className="bg-black p-4 pb-10 pt-21 text-white md:px-40 ">
                    <TrendingSection />
                </div>


            
            </>
    )  
}