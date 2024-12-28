import '../../components/Global__css/Global.styles.css'
import Forgotten__password from '../../components/Forgotten__password'
import Signup from '../../components/Signup'
import Signin from '../../components/Signin'
import Reset__password from '../../components/Reset__password'
import Verify__email from '../../components/Verify__email'
import Success from '../../components/Success__page/success'
import { useState } from 'react'


const Sign__form = () =>{
return(
    
    <>
        <Signup/>
        {/* <Forgotten__password/>
        <Signin/>
        <Reset__password/>
        <Verify__email/>
        <Success/> */}
    </>
)
}

export default Sign__form