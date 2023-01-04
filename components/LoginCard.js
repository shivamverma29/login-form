import React from "react";

const LoginCard = () => {
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [ConfirmPassword, setConfirmPassword] = React.useState("")
    const [match, setMatch] = React.useState(true)

    function handleClick(event){
      if(password === ConfirmPassword)
      {const dataTemp = {username, email, password}
      fetch('http://localhost:8000/sign-up',{
        method : 'POST',
        headers : {"Content-Type" : "application/json"},
        body : JSON.stringify(dataTemp)
      })
      setMatch(true)
    }
      else{
        setMatch(false)
      }
    }

    return (<div className="card">
        <div className="center">
      <h1>Sign-up !</h1>
        <div className="txt_field">
          <input
           type="text" 
           required 
           value={username}
           onChange={(event)=> setUsername(event.target.value)}
           />
          <label>Username</label>
        </div>
        <div className="txt_field">
          <input
           type="text"
           required 
           value={email}
           onChange={(event)=> setEmail(event.target.value)}
           />
          <label>Email</label>
        </div>
        <div className="txt_field">
          <input
          type="password" 
          required 
          value={password}
          onChange={(event)=>setPassword(event.target.value)}
          />
          <label>Password</label>
          </div>
          <div className="txt_field">
          <input
          type="password" 
          required 
          value={ConfirmPassword}
          onChange={(event)=>setConfirmPassword(event.target.value)}
          />
          <label>Confirm Password</label>
        </div>
        {!match && <h4>passwords do not match</h4>}
        <div className="pass">Forgot Password?</div>

        <button onClick={handleClick}>Sign-up</button>
        {/* <div class="singup_link">Not a member? <a href="">Singup</a></div> */}
    </div>
    </div>
     );
}
 
export default LoginCard;