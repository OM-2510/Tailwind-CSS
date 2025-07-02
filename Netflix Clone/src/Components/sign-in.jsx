import { ChevronRightIcon } from "@heroicons/react/16/solid"

export default function SignIn(){
    return(
        <div className="text-white text-center py-16 px-8 text-[17px] md:w-[57%] mx-auto md:px-28 md:py-36">
            <p className="text-[32px] font-bold md:text-[52px] md:pb-3 md:font-extrabold md:px-10">Unlimited movies, TV shows and more</p>

            <p className="pb-4 md:text-[21px] md:font-semibold md:pb-8">Starts at ₹149. Cancel at any time.</p>

            <p>Ready to watch? Enter your email to create or restart your membership</p>
        
            <form action="" >
                <div className="md:flex md:justify-around md:items-center md:px-10">
                    <input type="text" 
                        name="email-address" 
                        id="email-address" 
                        placeholder="Email address" 
                        className="w-full p-3 my-5 placeholder-gray-300 border bg-gray-950 border-gray-400 rounded-sm md:w-[65%]" />
                    <button className="bg-red-600 px-4 py-2 rounded-md text-[18px] font-medium flex mx-auto items-center justify-between md:h-13 md:mx-0 md:text-[23px] md:font-semibold">Get Started <ChevronRightIcon className="h-8 w-8 font-extralight"/> </button>

                </div>
            </form>
                    </div>
    )
}