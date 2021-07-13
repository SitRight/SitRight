import './homeStyles.css'
import { WebcamCapture} from './Webcam'
import React from 'react';
import PostureSelect from './select';
import Button from './button';

const Home = () => {



    const submitForm = () => {
        alert("Form submitted");
    }


    return (
        <div className="home-container">
            <div className="container">
                <div className="text">
                    <form className="form">
                        <WebcamCapture/>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                            <PostureSelect></PostureSelect> 
                            <div style= {{width: "25px"}}></div>
                            <Button type="submit" id="login-button" onClick={(e) => submitForm(e)}>Submit</Button>
                        </div>   
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Home