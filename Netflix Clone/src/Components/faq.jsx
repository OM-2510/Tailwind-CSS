import {PlusIcon} from "@heroicons/react/24/outline"
import clsx from "clsx"
import { useState } from "react";

export default function FAQ() {
    const questions = [
                "What is Netflix?",
                "How much does Netflix cost?",
                "Where can I watch?",
                "How do I cancel?",
                "What can I watch on Netflix?",
                "Is Netflix good for kids?",
            ]
    
    const answers = [
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.\n\n You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime..",
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    ];

    const [open, setOpen] = useState(Array(questions.length).fill(false))

    const toggle = (index)=>{
        const updated = [...open];
        updated[index] = !updated[index]
        setOpen(updated)
    }
    
    return (
        <>
            <p className="text-[18px] font-semibold pt-10 md:text-2xl md:font-semibold md:pb-3">Frequently Asked Questions?</p>
            
            {questions.map((question, index)=>(
            <a onClick={()=>{toggle(index)}}>
                <div className="flex flex-row justify-between bg-grey-800 p-5 mt-2 text-[18px] font-normal hover:bg-grey-700 cursor-pointer md:text-2xl">
                    
                    <p>{question}</p>
                    <PlusIcon className= {clsx ("h-6 w-6 md:font-extralight md:h-10 md:w-10" , {"rotate-45": open[index]})}/>
                </div>
                
                {open[index] && (<div className="flex flex-row justify-between mt-0.5 bg-grey-800 p-5 pr-7 text-[18px] font-normal">
                    <p className="whitespace-pre-line">{answers[index]}</p>    
                </div>
                )}

            </a>
            ))}            
        </>
    )
}
