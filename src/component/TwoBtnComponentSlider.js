import { useRef, useState } from "react";
import "./css/TwoBtnComponentSlider.css"
function TwoBtnComponentSlider({ component1, component2,btnText1,btnText2 }) {

    const box1Ref = useRef(null);
    const box2Ref = useRef(null);
    let [offSetToLeft, setOffSetToLeft] = useState(-100);
    let [visble, setVisble] = useState(0);

    function SlideMovie(dirictio) {

       
        if (dirictio === 1) {
            let setIntervalId =
                setInterval(function () {

                    if (offSetToLeft <= 0) {
                        setOffSetToLeft(offSetToLeft++);
                        setVisble(visble++);
                    }
                    ;
                }, 1);
            setTimeout(function () {
                clearInterval(setIntervalId);
            }, 1000);

        }
        if (dirictio === 2) {

            let setIntervalId =
                setInterval(function () {
                    if (offSetToLeft >= -100) {

                        setOffSetToLeft(offSetToLeft--);
                        setVisble(visble--);
                    }
                    ;
                }, 1);
            setTimeout(function () {

                clearInterval(setIntervalId);
            }
                , 1000);
        }
    }

    return (
        <div className="container">
            <div className="btnContainer">
                <button onClick={() => SlideMovie(1)}>cliv</button>
                <button onClick={() => SlideMovie(2)}>cdd</button>
            </div>
            <div className="slidContainer">
                <div className="box1" ref={box1Ref} style={{ transform: `translateX(${offSetToLeft}%)` }}>
                    {component1}
                </div>
                <div className="box2" ref={box2Ref} style={{ transform: `translateX(${visble}%)` }}>
                    {component2}
                </div>
            </div>
        </div>
    );
}

export default TwoBtnComponentSlider;