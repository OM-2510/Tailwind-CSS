import Navbar from "./Components/navbar"
import SignIn from "./Components/sign-in"

export default function App(){
    return(
            <main className="relative h-screen bg-cover bg-no-repeat bg-center bg-[url(/src/assets/bg.jpg)] m-0 p-0">
                
                <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
                
                <div className="relative z-10">
                    <Navbar />
                    <SignIn />
                </div>

            </main>
    )  
}