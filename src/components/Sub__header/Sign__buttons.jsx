import "./Sub__header.css"


const Sign__buttons = ({onSignButtonClick}) =>{

    return(
        <>

        <button onClick={() => onSignButtonClick('signUp')}className='signup__btn'>Sign up</button>

        <button onClick={() => onSignButtonClick('signIn')}className='login__btn'>Login</button>
        
        </>
    )
   
}
export default Sign__buttons