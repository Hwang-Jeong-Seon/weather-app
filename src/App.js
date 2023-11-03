import './App.css';
import Card from "./component/Card";
import Button from "./component/Button";
import {useState, useEffect} from "react";

const apiKey = '419d0277703f712d2fe6563a79221bf5'
const region = {
    hanoi :{
        name : 'hanoi',
        latitude : 21.0090571,
        longitude : 105.8607507,
    },
    paris :{
        name : 'paris',
        latitude : 48.8032,
        longitude : 2.3511,
    },
    newYork :{
        name : 'newYork',
        latitude : 40.6643,
        longitude : -73.9385,
    },
    seoul :{
        name : 'seoul',
        latitude : 126.9779692,
        longitude : 37.566535,
    },
}

function App() {
    const cities = ['hanoi','paris','newYork','seoul'];
    const [weather, setWeather] = useState(null);
    const [clickBtn, setClickBtn] = useState({
        current : true, hanoi : false, paris : false, newYork : false, seoul : false
    });

    const getCurrentLocation = async () => {
        await navigator.geolocation.getCurrentPosition( async (position) => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;
            await getWeatherByCurrentLocation(latitude, longitude);
        });
    }
    const getWeatherByCurrentLocation = async (latitude, longitude) => {
     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
       let response = await fetch(url)
        let data = await response.json()
        setWeather(data);
    }
    const buttonClick = (cityName) =>{
     console.log('out ',cityName)

    }
    useEffect( () => {
        getCurrentLocation();
        return () => {
        };
    }, []);

  return (
    <div className="App">
        <Card weather={weather} />
        <div className='ButtonWrap'>
            <Button text='Current Location' click={clickBtn.current} isClick={()=>buttonClick('current')} />
            {cities.map((item, idx) => (
                <Button key={idx} text={item}  click={clickBtn[item]}  isClick={()=>buttonClick(item)} />
            ))}
        </div>
    </div>
  );
}

export default App;
