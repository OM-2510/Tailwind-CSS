export default function Navbar(){
    return(
        <nav className="flex justify-between items-center p-6">
            <img className="w-23" src="src\assets\logo.svg" alt="Netflix Logo" />
            <button className="text-white text-[15px] font-medium bg-red-600 px-4 py-1.5 rounded-md">
                Sign in
            </button>
        </nav>
    )
}