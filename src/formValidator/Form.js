import {useState} from 'react'

function Form (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState ('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [message, setMessage] = useState('')

    const findErrors = () => {
        const errors = []
        if(!email || !password || !passwordConfirm) errors.push('All fields must be filled in')
        if([...email].filter(i => i ==='@').length !==1){
           errors.push('an email must have exactly one @ sign') 
        }
        if(password.length < 8) errors.push('password must be 8 characters or longer')
        if(password!==passwordConfirm)errors.push('password must match')

        return errors
    }
    const handleSubmit = e => {e.preventDefault()
    
    const errors = findErrors()
    setMessage(errors.length ? errors.join(',') : 'User created!')
    }
    return (

        <form className=' text-center' onSubmit={handleSubmit}>
            <h2 className='font-bold text-2xl my-2'>Sign Up!</h2>
            
            <div className='text-sm font-size-0.75rems'><label htmlFor= 'email'>Email</label></div>
            <div className='mb-4'><input type = 'text' name='email'className='border-2 border-gray-400' onChange={e=> setEmail(e.target.value)}/></div>
            

            <div className='text-sm font-size-0.75rems'><label htmlFor= 'email'>Password (8+ characters)</label></div>
            <div className='mb-4'><input type = 'password' name='password' className='border-2 border-gray-400' onChange={e=> setPassword(e.target.value)}/></div>

            <div className='text-sm font-size-0.75rems'><label htmlFor= 'password-confirm'>Confirm Password</label></div>
            <div className='mb-1'><input type = 'password' name='password-confirm' className='border-2 border-gray-400 m-1' onChange={e=> setPasswordConfirm(e.target.value)}/></div>

            <div className='forgot-password text-sm font-size-0.75rems mb-2'>Lost password? <span>Click here! </span></div>
            <input type ='submit' value = 'Submit' className='text-black border-2 border-gray-400 px-3 py-1 text-sm font-size-0.75rems'/>
            <div className='text-xs '>{message}</div>
        </form>
    )
}
export default Form;