import React, { useState } from "react"
import Button from "../button"
import { Link } from "gatsby"
import TextField from '@material-ui/core/TextField';

const Form = () => {
  const [emailData, setEmailData] = useState({
    email: "",
  });

  const { email } =  emailData;

  const handleChange = (e) => {
    setEmailData({ 
      ...emailData, 
      [e.target.name]: e.target.value, 
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://v1.nocodeapi.com/sitright/google_sheets/brlkDKHNfTNVAngx?tabId=Sheet1?", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify([
            [email, new Date().toLocaleString],
          ]),
        }
      );
      await response.json()
      setEmailData({...emailData, email: ""})
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          padding: "4rem 1rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            zIndex: -5,
            height: "100vh",
            width: "100vw",
            opacity: 0.5,
          }}
        />
        <h1 style={{ textAlign: "center" }}>Join the Waitlist</h1>
        <p style={{ textAlign: "center", maxWidth: 440 }}>
          SitRight uses Machine Learning to help improve your daily posture habits. Join the waitlist below, or contribute to the project by taking a photo.
        </p>
        <div style={{display: "flex", fleXDirection: "row", justifyContent: "center", alignItems: "center"}}>  
          <form onSubmit={handleSubmit} >
              <TextField
                onChange={handleChange}
                id="outlined-helperText"
                name="email"
                label="Email"
                variant="outlined"
                defaultValue={email}
              >
              </TextField>
              <div style= {{width: "25px"}}></div>
              <Button type="submit"><Link style={{textDecoration: "none", color: "white"}} to="/thank-you">Submit</Link></Button>
              <button type="submit"></button>
            </form>
        </div>
        <br></br>
        <br></br>
        <div style={{ margin: 60, width: `250px`, position: "relative" }}>
          <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
          </div>
          <div
            style={{
              position: "absolute",
              width: "250px",
              top: 0,
            }}
          >
          </div>
        </div>
      </div>
    )

}
export default Form