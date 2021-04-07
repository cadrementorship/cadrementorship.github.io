import React, {useState, useRef} from "react";
import './css/Accordion.css';
import Chevron from './Chevron';

function Accordion(props){
    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("42px");
    const [setRotate, setRotateState] = useState("accordion-icon");

    const content = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "accordion-button-active" : "");
        setHeightState(setActive === "accordion-button-active" ? "42px" : `${content.current.scrollHeight}px`);
        setRotateState(setActive === "accordion-button-active" ? "" : "accordion-icon-rotate");
        // console.log(content.current.scrollHeight);
    }
    // console.log(`hello ${setHeight} god`);
    return(
        <div className="accordion-container">
            <p ref={content} style={{maxHeight: setHeight}} className="accordion-text">
                {props.content}
            </p>
            <div className={`accordion-button ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion-button-text">More</p>
                <Chevron className={`accordion-icon ${setRotate}`} width={15} fill={'#777'}/>
            </div>
        </div>
    )
}

export default Accordion;