import { useState } from 'react';
import { CreateElement } from './components/Create_element';
import {Wheather_element} from './components/wheather_element';
function App() {
const [value, setValue]= useState("")
function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
  setValue(event.target.value)
  
}
console.log(Wheather_element);
let filterValue =Wheather_element.filter(weather =>{
  return weather.City.toLowerCase().includes(value.toLowerCase())
})
    console.log(filterValue);
    console.log(value);
    
    

  return (
    <>
    <div className="">
      <input className='text-white rounded border-none' type="text" placeholder='Enter city'
      value={value}
      onChange={changeHandler}
      />
    </div>
    <div className='flex flex-wrap justify-center'>
    {filterValue.map(product=><CreateElement Wheather_element={product}/>)}
    </div>
    </>
  );
}

export default App;
