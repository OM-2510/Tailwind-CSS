export default function Cards(props){
    return(
        <img 
                src={props.img_src} 
                alt="movie-poster"
                className="w-[120px] rounded-lg md:w-[180px] md:mx-[12px] hover:scale-110 duration-400 ease-in-out "
                
            />
    )
}