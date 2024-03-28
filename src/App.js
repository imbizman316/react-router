import React from 'react';
import './App.css';

function App() {  

  const [email, setEmail] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(false)

  const [country, setCountry] = React.useState("");
  const [isCountryValid, setIsCountryValid] = React.useState(false)

  const [zipcode, setZipcode] = React.useState("");
  const [isZipCodeValid, setIsZipCodeValid] = React.useState(false)

  const [password, setPassword] = React.useState("");  
  const [isUpper, setIsUpper] = React.useState(false);
  const [isLower, setIsLower] = React.useState(false);
  const [isInt, setIsInt] = React.useState(false);
  const [isSpecial, setIsSpecial] = React.useState(false);
  
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [isPasswordMatch, setIsPasswordMatch] = React.useState(false)

  const [isAllGood, setIsAllGood] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();    

    alert("ALL GUT")

  }

  const handlePasswordChange = (e) => {

    setPassword((e.target.value).trim())      
    
  }

  function checkMatch () {

    if (password === passwordConfirm) {
      setIsPasswordMatch(true)
    } else {
      setIsPasswordMatch(false)
    }

  }

  React.useEffect(() => {

    if (isEmailValid && isCountryValid && isZipCodeValid && isUpper && isLower && isInt && isSpecial && isPasswordMatch) {
      setIsAllGood(true)
    } else {
      setIsAllGood(false)
    }

  },[isEmailValid, isCountryValid, isZipCodeValid, isUpper, isLower, isInt, isSpecial, isPasswordMatch])


  React.useEffect(() => {

    if (country !== "" && country !== "null") {
      setIsCountryValid(true)
    } else {      
      setIsCountryValid(false)
    }

  },[country])


  React.useEffect(() => {

    checkMatch()

  },[passwordConfirm])

  React.useEffect(() => {

    const integers = "0123456789";
    const specialChar = "!@#$%^&*()_+|[]{};:'~`"

    setIsUpper(false);
    setIsLower(false);
    setIsInt(false);
    setIsSpecial(false);    

    for (let i = 0; i < password.length; i++) {
      if (password[i] === password[i].toUpperCase() && !integers.includes(password[i]) && !specialChar.includes(password[i])) {
        setIsUpper(true);        
      } 
      else if (password[i] === password[i].toLowerCase()  && !integers.includes(password[i]) && !specialChar.includes(password[i])) {
        setIsLower(true);
      }
      else if (integers.includes(password[i])) {
        setIsInt(true);
      }
      else if (specialChar.includes(password[i])) {
        setIsSpecial(true);
      }      

      checkMatch()
      
    }
    
    console.log(password)

  },[password])

  const checkEmail = (e) => {

    setEmail((e.target.value).trim())   

  }

  React.useEffect(() => {

    const myRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let result = myRegex.test(email) 
    
    setIsEmailValid(result)
    

  },[email])

  React.useEffect(() => {
    const myRegex = /^[0-9]{5,5}$/g
    let result = myRegex.test(zipcode)

    setIsZipCodeValid(result)

  },[zipcode])
  
  console.log(isZipCodeValid);

  return (
    <div class="main">
      <div>
          <div className='header'>
            <h1 >Registration Form</h1>
          </div>          
        </div>
      <form class="form" onSubmit={handleSubmit}>
        
        <div>
          <label htmlFor="email">Email</label>
          <input type='text' name='email'
            value={email}
            onChange={checkEmail}
          />
        </div>
        <div>
          {!isEmailValid && 
            <h5 style={{color: 'red'}}>Email is not valid</h5>
          }
        </div>
        <div>
          <label htmlFor="county">Country</label>
          <select name='country' 
            value={country}
            onChange={(e)=>setCountry(e.target.value)}        
          >
            <option value="null">-----------</option>
            <option value="Korea">Korea</option>
            <option value="Japan">Japan</option>
            <option value="China">China</option>
            <option value="Taiwan">Taiwan</option>
            <option value="HongKong">Hong Kong</option>
            <option value="Thailand">Thailand</option>
            <option value="Mongolia">Mongolia</option>
          </select>
          {!isCountryValid && <h5 style={{color: 'red'}}>Select a country</h5>}
        </div>
        <div>
          <label htmlFor="zipcode">Zip Code</label>
          <input type='text' name='zipcode' 
            value={zipcode}
            onChange={(e)=>setZipcode((e.target.value).trim())}            
          />
        </div>
        <div>
          {!isZipCodeValid && 
            <h5 style={{color: 'red'}}>Zipcode is not valid</h5>
          }
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type='password' name='password' 
            value={password}
            onChange={handlePasswordChange}
            
          />
        </div>        
        <div>
          <ul>
            {password.length < 10 ? <li style={{color: 'red'}}>Has to be longer than 10 characters</li> : <li style={{color: 'green', textDecoration: 'line-through'}}>Has to be longer than 10 characters</li>}            
            {password.length > 20 ? <li style={{color: 'red'}}>Has to be less than 20 characters</li> : <li style={{color: 'green', textDecoration: 'line-through'}}>Has to be less than 20 characters</li>}
            {!isUpper ? <li style={{color: 'red'}}>Has to include at least one uppercase alphabet</li> : <li style={{color: 'green', textDecoration: 'line-through'}}>Has to include at least one uppercase alphabet</li>}            
            {!isLower ? <li style={{color: 'red'}}>Has to include at least one lowercase alphabet</li> : <li style={{color: 'green', textDecoration: 'line-through'}}>Has to include at least one lowercase alphabet</li>}                        
            {!isInt ? <li style={{color: 'red'}}>Has to include at least one number</li> : <li style={{color: 'green', textDecoration: 'line-through'}}>Has to include at least one number</li>}
            {!isSpecial ? <li style={{color: 'red'}}>Has to include at least one these special characters - !@#$%^&*</li> : <li style={{color: 'green', textDecoration: 'line-through'}}>Has to include at least one these special characters - !@#$%^&*</li>}            
          </ul>          
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input type='password' name='confirm_password' 
            value={passwordConfirm}
            onChange={(e)=>setPasswordConfirm((e.target.value).trim())}
          />          
        </div>
        <div>
          {!isPasswordMatch && <h3 style={{color: "red"}}>Password Doesn't Match</h3>}
        </div>
        {isAllGood ? <button>Submit</button> : <button disabled >Submit</button>}
      </form>
    </div>
  );
}

export default App;
