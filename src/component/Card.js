import '../App.css'
const Card = ({weather}) =>{
    console.log('123',weather?.weather)
    return (
        <div className='card'>
            <h1>{weather?.name}</h1>
            <strong>{`${weather?.main?.temp}C / ${Math.round((weather?.main?.temp * 1.8 + 32)*100)/100}F`}</strong>
            <p>{weather?.weather[0]?.description?.toUpperCase()}</p>
        </div>
    )
}
export default Card