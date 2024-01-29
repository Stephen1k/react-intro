import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')

  const passRef = useRef(null)
  
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed])

  useEffect(() => {
    generatePassword()
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current.select()
  }


  return (
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" value={password} id='pass' className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passRef}/>
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="length" 
          id="length"
           />
           <label htmlFor="length" >Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed} 
          onChange={() =>{setNumberAllowed((prev) => !prev)}} 
          name= "numberAllowed" 
          id="numberAllowed"
          />
        
          <label htmlFor="numberAllowed" >Numbers: </label>
      </div>
      <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed} 
          onChange={() =>{setCharAllowed((prev) => !prev)}} 
          name="charAllowed" 
          id="charAllowed" 
          />
        
          <label htmlFor="charAllowed" >Characters: </label>
      </div>
    </div>
   </div>
  )
}

export default App
