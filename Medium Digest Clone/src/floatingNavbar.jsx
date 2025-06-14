import ArticleSection from "./Articles";

export default function FloatingNavbar(){
    const fontStyles = "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 24";
    return(
        <div className="flex flex-col ml-50">
        <section className="text-sm text-gray-600 font-extralight items-center flex h-9.5 w-140 justify-between mt-10 border-b-1 border-gray-200 mr-70">
            <a className="hover:text-black" href="#"><span 
                class="material-symbols-outlined"
                style={{fontVariationSettings: fontStyles}}
            >
                add
            </span></a>
            <a className="hover:text-black pb-0.5" href="#">For You</a>
            <a className="hover:text-black pb-0.5" href="#">Following</a>
            <a className="hover:text-black pb-0.5" href="#">Featured</a>
            <a className="hover:text-black pb-0.5" href="#">Machine Learning</a>
            <a className="hover:text-black pb-0.5" href="#">Data Science</a>
            <a className="hover:text-black pb-0.5" href="#">Programming</a>
        </section>
        <ArticleSection />
        </div>
    )
}