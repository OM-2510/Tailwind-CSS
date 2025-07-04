export default function Footer(){
    return(
        <footer className="bg-black text-gray-300 md:px-40 p-7 text-[15px]">
                    <p className="inline-block md:text-[16px]">Questions? Call </p>
                    <a className="underline decoration-1 md:text-[16px]" href="#"> 000-919-1743</a>
                    
                    <div className="flex flex-col md:flex-row justify-between w-full py-10">
                        <div className="flex flex-col">
                            <a className="py-2 underline decoration-1" href="#">FAQ</a>
                            <a className="py-2 underline decoration-1" href="#">Investor Relations</a>
                            <a className="py-2 underline decoration-1" href="#">Privacy Relations</a>
                            <a className="py-2 underline decoration-1" href="#">Speed Test</a>
                        </div>

                        <div className="flex flex-col">
                            <a className="py-2 underline decoration-1" href="#">Help Centre</a>
                            <a className="py-2 underline decoration-1" href="#">Jobs</a>
                            
                            <a className="py-2 underline decoration-1" href="#">Cooki Preferences</a>
                            <a className="py-2 underline decoration-1" href="#">Legal Notices</a>
                        </div>

                        <div className="flex flex-col">
                            <a className="py-2 underline decoration-1" href="#">Account</a>
                            <a className="py-2 underline decoration-1" href="#">Ways to Watch</a>
                            <a className="py-2 underline decoration-1" href="#">Corporate Information</a>
                            <a className="py-2 underline decoration-1" href="#">Only on Netflix</a>
                        </div>

                        <div className="flex flex-col">
                            <a className="py-2 underline decoration-1" href="#">Media Centre</a>
                            <a className="py-2 underline decoration-1" href="#">Terms of Use</a>
                            <a className="py-2 underline decoration-1" href="#">Contact Us</a>
                        </div>

                    </div>

                    <div className="pb-34">
                        <p>Netflix India</p>
                        <p className="inline-block py-7 text-[13px] text-gray-400">This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
                        <a className="text-blue-500 underline decoration-1 text-[13px]" href="#"> Learn more</a>
                    </div>

                </footer>
    )
}