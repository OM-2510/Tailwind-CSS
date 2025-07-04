import Navbar from "./navbar"
import SignIn from "./sign-in"
import TrendingSection from "./trending-section"
import USP from "./usp"
import FAQ from "./faq"
import BottomSignIn from "./btmsignin"
import Footer from "./footer"

export default function App(){
    return(       
            <>
                <header className="relative h-full bg-cover bg-no-repeat bg-center bg-[url(/src/assets/bg.jpg)] m-0 p-0">
                    <div className="absolute inset-0 bg-black opacity-55 z-0"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent,_rgba(0,0,0,0.67))] z-0"></div>

                    <div className="relative z-10">
                        <Navbar />
                        <SignIn />
                    </div>
                </header>

                <main className="bg-black p-4 px-6 pb-10 pt-21 text-white md:px-40 ">
                    <TrendingSection />
                    <USP />
                    <FAQ />
                    <BottomSignIn />
                </main>

                <Footer />
            
            </>
    )  
}