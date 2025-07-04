import { ChevronRightIcon } from "@heroicons/react/16/solid"

export default function BottomSignIn(){
    return(
        <>
            <p className="md:text-center pt-12">Ready to watch? Enter your email to create or restart your membership</p>
            <form action="" >
                <div className="md:flex md:justify-center md:items-center md:px-10">
                    <input type="text" 
                        name="email-address" 
                        id="email-address" 
                        placeholder="Email address" 
                        className="w-full p-3 my-5 placeholder-gray-300 border bg-gray-950 border-gray-400 rounded-sm md:w-[65%]" />
                    
                    <button className="bg-red-600 px-4 py-2 rounded-md text-[18px] font-medium flex items-center md:h-13 md:mx-2 md:text-[23px] md:font-semibold">Get Started <ChevronRightIcon className="h-8 w-8 font-extralight"/> </button>
             
                </div>
            </form>
        </>
    )
}