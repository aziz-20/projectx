import "./css/LogiForm.css"
import { useRef,useState} from "react";
function LogingForm() {

    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    let [offSetToLeft, setOffSetToLeft] = useState(-100);
    let [visble, setVisble] = useState(0);
 

    function SlideMovie(dirictio) {
        
        // const email = emailRef.current;
        // const phone = phoneRef.current;

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
    const onclickEmail = () => {
        
        SlideMovie(1);
    }
    const onclickPhone = () => {
        SlideMovie(2);
    }

    return (
        <div>
            <div  className="container">
                <div className="row-1">
                    <button  onClick={onclickEmail} className="col-1">
                        Email
                   </button>
                    <button onClick={onclickPhone} className="col-1">
                        Phone
                    </button>
                </div>
                <div className="row-2">
                    <div ref={emailRef} className='Email 'style={{transform: `translateX(${offSetToLeft}%)`}}>
                        <div className="form-container">
                            <p className="title">Email</p>
                            <form className="form">
                                <div className="input-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" id="username" placeholder="" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder="" />
                                    <div className="forgot">
                                        <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                                    </div>
                                </div>
                                <button className="sign">Sign in</button>
                            </form>
                            <p className="signup">Don't have an account?
                                <a rel="noopener noreferrer" href="#" className="">Sign up</a>
                            </p>
                        </div>

                    </div>
                    <div ref={phoneRef} className='Phone' style={{transform: `translateX(${visble}%)`}}>
                        <div className="form-container">
                            <p className="title">Phone</p>
                            <form className="form">
                                <div className="input-group">
                                    <label htmlFor="username">Phone Number</label>
                                    <input type="text" name="username" id="username" placeholder="" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" placeholder="" />
                                    <div className="forgot">
                                        <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                                    </div>
                                </div>
                                <button className="sign">Sign in</button>
                            </form>
                            <p className="signup">Don't have an account?
                                <a rel="noopener noreferrer" href="#" className="">Sign up</a>
                            </p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}
export default LogingForm;