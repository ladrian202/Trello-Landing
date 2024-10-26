import {useRef, useEffect} from "react";
import "../stylesheets/buttons.css"
import anime from 'animejs';
import PropTypes from 'prop-types';

export default function Button({type, label, link}) {

    const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current) {
          anime({
            targets: buttonRef.current,
            opacity: [0, 1],
            duration: 1250,
            delay: 1450,
            easing: 'easeInOutExpo',
          });
        }
      }, []);


    return (
        <div className="buttonContainer" ref={buttonRef}>
        <a className={type} href={link}>{label}</a>
        </div>
    )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};