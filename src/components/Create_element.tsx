import {Wheather} from "../models";
import Sun from '../img/sun.png'
import Rain from '../img/rain.png'
import Cloud from '../img/cloud.png'

interface ElementProps {
    Wheather_element: Wheather
}
export function CreateElement(element: ElementProps){
    function weather_foto() {
        if (element.Wheather_element.wheather==="Sunny") {
            return(
                <img className=" z-5 w-20 h-20 absolute" src={Sun} alt="" />
            )
        }
        if (element.Wheather_element.wheather==="Rain") {
            return(
                <img className=" z-5 w-20 h-20 absolute" src={Rain} alt="" />
            )
        }
        if (element.Wheather_element.wheather==="Cloud") {
            return(
                <img className=" z-5 w-20 h-20 absolute" src={Cloud} alt="" />
            )
        }
    }
    return(
        <div className="border py-2 rounded flex flex-col items-center mb-2 z-0 w-80 mr-3 text-white" key={element.Wheather_element.id}>
            <div className="mr-auto select-none">{weather_foto()}</div>
            <div className="z-0">{element.Wheather_element.City}</div>
            <div className="z-0">{element.Wheather_element.wheather} </div>
            <div className="z-0">{element.Wheather_element.temperature}°C</div>
        </div>
    )
}