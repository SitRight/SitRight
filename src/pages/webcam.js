import '../components/homeStyles.css'
import { WebcamCapture} from '../components/camera'
import React from 'react';
import PostureSelect from '../components/select';
import Button from '../components/button';

const Webcam = () => {

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
export default Webcam