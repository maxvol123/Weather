import { useState,useEffect } from 'react';
import { CreateElement } from './components/Create_element';
import {Wheather_element} from './components/wheather_element';
function App() {
const [value, setValue]= useState("")

const [dateNow, setDate] = useState(getTime())
console.log(dateNow);

useEffect( () => {
  setInterval(()=>{
    setDate(getTime())
  },1000)

})

function getTime() {
  return(  
  <>
  <div className="text-white text-5xl">{getDay()}</div>
  <div className="text-white text-4xl">{new Date().getHours()}:{new Date().getMinutes()}</div>
  </>)

}

function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
  setValue(event.target.value)
  
}
let filterValue =Wheather_element.filter(weather =>{
  return weather.City.toLowerCase().includes(value.toLowerCase())
})
    function getDay() {
      if (new Date().getDay()===1) {
        return "Monday"
      }
      if (new Date().getDay()===2) {
        return "Tuesday"
      }
      if (new Date().getDay()===3) {
        return "Wednesday"
      }
      if (new Date().getDay()===4) {
        return "Thursday"
      }
      if (new Date().getDay()===5) {
        return "Friday"
      }
      if (new Date().getDay()===6) {
        return "Saturday"
      }
      if (new Date().getDay()===0) {
        return "Sunday"
      }
    }
  
    

  return (
    <>
    <div className="time">
    {getTime()}
    </div>
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
