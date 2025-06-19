import ArticleSection from "./Articles";

export default function FloatingNavbar(){
    const fontStyles = "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24";
    return(
        <div className="flex flex-col ml-50">
        <section className="sticky top-0 z-50 text-sm bg-white text-gray-600 font-extralight flex items-end h-17 w-165 justify-between mt-10 border-b border-gray-200 mr-40">
            <a className="hover:text-black pb-3" href="#"><span 
                class="material-symbols-outlined"
                style={{fontVariationSettings: fontStyles}}
            >
                add
            </span></a>
            <a className="hover:text-black pb-5" href="#">For You</a>
            <a className="hover:text-black pb-5" href="#">Following</a>
            <a className="hover:text-black pb-5" href="#">Featured</a>
            <a className="hover:text-black pb-5" href="#">Machine Learning</a>
            <a className="hover:text-black pb-5" href="#">Data Science</a>
            <a className="hover:text-black pb-5" href="#">Programming</a>
        </section>
        <ArticleSection />
        </div>
    )
}