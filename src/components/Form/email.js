import React, { useState } from "react"
import TextField from '@material-ui/core/TextField';
//import { makeStyles } from '@material-ui/core/styles';



const Email = () => {
  const [data, setData] = useState({
    email: ""
  });

  const { email } =  data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.email]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://v1.nocodeapi.com/sitright/google_sheets/brlkDKHNfTNVAngx?tabId=Sheet1", {
        method: "POST",
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify([email, new Date().toLocaleString])
        }
      );
      await response.json()
      setData({...data, email:''})

    } catch (error) {
      console.log(error)
    }
  }

    return (
        <form onSubmit={handleSubmit}>
          <TextField
            onChange={handleChange}
            id="outlined-helperText"
            label="Email"
            variant="outlined"
            value={email}
          >
          </TextField>
        </form>
    )
}
  
export default Email