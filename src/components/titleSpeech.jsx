import { useEffect, useRef } from "react";
import Button from "./buttons";
import '../stylesheets/titleSpeech.css'
import anime from 'animejs/lib/anime.es.js';

export default function TitleSpeech() {

const speechRef = useRef(null);

useEffect(() => {
    anime({
        targets: speechRef.current,
        easing: 'easeInOutExpo',
        opacity: [0, 1],
        duration: 1250,
        delay: 1450,
    })
})

    return (
        <div ref={speechRef} className="titleSpeech-container">
            <h2 className="titleSpeech">Organize your projects and ideas has never been so easy. Keep everything under control and share tasks with your team in an easy and intuitive manner.</h2>
            <h2 className="titleSpeech">What are you waiting for?</h2>
            <Button 
            type="Primary"
            label="Join Us"
            link="#"/>
        </div>
    )
}