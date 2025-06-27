import { ChevronRightIcon } from "@heroicons/react/16/solid"

export default function SignIn(){
    return(
        <div className="text-white text-center py-16 px-8 text-[17px]">
            <p className="text-[32px] font-bold">Unlimited movies, TV shows and more</p>

            <p className="pb-4">Starts at ₹149. Cancel at any time.</p>

            <p>Ready to watch? Enter your email to create or restart your membership</p>

            <form action="" >
                <input type="text" 
                    name="email-address" 
                    id="email-address" 
                    placeholder="Email address" 
                    className="w-full p-3 my-5 placeholder-white-500 border border-gray-600 rounded-sm" />
                <button className="bg-red-600 px-4 py-2 rounded-md text-[18px] font-medium flex mx-auto items-center justify-between">Get Started <ChevronRightIcon className="h-8 w-8 font-extralight"/> </button>
            </form>
        </div>
    )
}