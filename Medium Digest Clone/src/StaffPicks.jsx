export default function StaffPicks(){
    return(
        <section className="border-gray-200 border-l-1 h-screen p-9.5 text-md flex flex-col font-semibold">
            Recommended Topics
            <div className="max-w-75 h-auto mt-3.5">
                <button className="bg-gray-200 m-3 mb-1 ml-0 px-4 py-2 rounded-4xl font-extralight text-sm hover: cursor-pointer">Writing</button>
                <button className="bg-gray-200 m-3 mb-1 ml-0 px-4 py-2 rounded-4xl font-extralight text-sm hover: cursor-pointer">Technology</button>
                <button className="bg-gray-200 m-3 mb-1 ml-0 px-4 py-2 rounded-4xl font-extralight text-sm hover: cursor-pointer">Self Improvement</button>
                <button className="bg-gray-200 m-3 mb-1 ml-0 px-4 py-2 rounded-4xl font-extralight text-sm hover: cursor-pointer">Relationships</button>
                <button className="bg-gray-200 m-3 mb-1 ml-0 px-4 py-2 rounded-4xl font-extralight text-sm hover: cursor-pointer">Politics</button>
                <button className="bg-gray-200 m-3 mb-1 ml-0 px-4 py-2 rounded-4xl font-extralight text-sm hover: cursor-pointer">Cryptocurrency</button>
                <button className="bg-gray-200 m-3 mb-1 ml-0 px-4 py-2 rounded-4xl font-extralight text-sm hover: cursor-pointer">Productivity</button>
            </div>
            <a href="#" className="text-gray-700 font-extralight text-sm mt-5">See more topics</a>
            
            <div className="text-gray-700 font-extralight text-[12px] mt-10 flex flex-wrap max-w-75">
                <a href="#" className="ml-0 m-1">Help</a>
                <a href="#" className="ml-0 m-1">Status</a>
                <a href="#" className="ml-0 m-1">About</a>
                <a href="#" className="ml-0 m-1">Careers</a>
                <a href="#" className="ml-0 m-1">Press</a>
                <a href="#" className="ml-0 m-1">Blog</a>
                <a href="#" className="ml-0 m-1">Privacy</a>
                <a href="#" className="ml-0 m-1">Rules</a>
                <a href="#" className="ml-0 m-1">Terms</a>
                <a href="#" className="ml-0 m-1">Text to speech</a>
            </div>
        </section>
    )
}