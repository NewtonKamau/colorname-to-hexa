import React from 'react'
import coloNames from 'colornames';
const Input = ({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkText}) => {
  return (
      <form onSubmit={(e)=> e.preventDefault()}>
          <label>Add color Name:</label> 
          <input 
              autoFocus
              type='text'
              placeholder='Add color name'
              required
              value={ colorValue }
              onChange={ (e) => {
                  setColorValue(e.target.value);
                  setHexValue(coloNames(e.target.value))
              } }
          />
          <button 
              type='button'
              onClick={ () => setIsDarkText(!isDarkText) }
          >Toggle Text color</button>
    </form>
  )
}

export default Input