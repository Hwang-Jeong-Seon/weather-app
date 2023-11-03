import '../App.css'
const Button =({ isClick, text, click }) =>{
    console.log('test : ',isClick())
    return (
        <button
            type='button'
            className={`button ${click ? 'active' : ''}`}
            onClick={(props) => isClick(text)}>
            {text}
        </button>
    )
}
export default Button