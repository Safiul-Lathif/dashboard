import React from 'react';
import './App.css';

function App() {
  const handleSubmit = event => {
    event.preventDefault();
    alert('You have submitted the form.')
  }
  return(
    <div className="wrapper">
      <h4>jassica john jones</h4>
      <h1>Please enter your details below</h1>
      <form onSubmit={handleSubmit}>
      
         
         <p>phone Numbe: +91
             <input type="number" name="phone" placeholder='please enter 10 digit mobile number'/> 
             <span>&#9989;</span>

            </p>
           <p>PAN card number:
           <input name="num"  placeholder='PAN CARD NUMBER '/></p>
           <p>Name as PAN card:
           <input name="name" type="text" placeholder='nmae as in PAN card' /></p>
            <p>email:
             <input name="mail" type="email" placeholder='email'/> 
             <span>&#9989;</span></p>
        
    
       <button type="submit">Submit</button>
       <button type="reset"> Clear</button>
      </form>
    </div>
  )
}

export default App;