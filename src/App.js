import './App.css';
import divider from './advice-generator-app-main/images/pattern-divider-desktop.svg'
import dice from "./advice-generator-app-main/images/icon-dice.svg"
import { useEffect, useState } from 'react';

function App() {

  const [quote, setQuote] = useState('')

  useEffect(() => {
    newQuote()
  },[])

  async function newQuote(){
    const data = await fetch('https://api.adviceslip.com/advice')
    const json = await data.json()
    setQuote(json.slip)
  }

  return (
    <div className="flex flex-col items-center
     justify-center w-[100vw] h-[100vh] bg-dark_gray    
     ">
      <div className='flex flex-col items-center
       sm:w-[350px] sm:h-[250px] w-[280px] bg-gray rounded-md
       p-10 relative border-2 border-white justify-between
       '>
        <p className='text-neon text-[11px]'>ADVICE #{quote.id}</p>
        <p className='font-Manrope font-semibold text-center text-[20px] text-cyan
        '>“{quote.advice}”</p>
        <img src={divider} alt="" className=''/>
        <div className='bg-neon p-3 rounded-[100%] 
        absolute bottom-[-20px] flex items-center justify-center
        cursor-pointer hover:bg-white
        ' onClick={() => newQuote()}>
          <img src={dice} alt="" className='h-[80%] w-[80%]'/>  
          </div>
      </div>
    </div>  
  );
}

export default App;
