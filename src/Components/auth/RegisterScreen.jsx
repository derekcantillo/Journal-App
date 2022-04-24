import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { remoreError, removeError, setError } from '../../actions/ui'
import { registerWithEmailPasswordName } from '../../actions/auth'
export const RegisterScreen = () => {

  const initalFormState={
    name: 'Alejandro Cadenas',
    email: 'alejandro@gmail.com',
    password: '123456',
    passwordc: '123456'
  }

  const [formValues, handleInputChange]=useForm(initalFormState)

  const {name, email, password, passwordc}=formValues;

  const dispatch = useDispatch()

  const {msgError} = useSelector(state => state.ui)

  const handleRegister=(e)=>{
    e.preventDefault()
    if(isFormValid()){
      dispatch(removeError())
      dispatch(registerWithEmailPasswordName(email, password, name))
    }
    
  }

  const isFormValid =()=>{
    let msgerror;
    if(name.trim().length === 0 ||
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      passwordc.trim().length === 0 ){
     
      msgerror='Debe llenar todos los campos del formulario'
      dispatch(setError(msgerror))
      return false;
    }else if (!validator.isEmail(email)){
    
      msgerror='Email incorrecto'
      dispatch(setError(msgerror))
      return false
    }else if(password!==passwordc){
      msgerror='Las contraseñas no coinciden'
      dispatch(setError(msgerror))
      return false
    }else if (password.length<5){
      msgerror='La contraseña debe tener al menos 5 caracteres'
      dispatch(setError(msgerror))
      return false

    }
    
    
    return true;
    
  }


  return (
    <div>
        <h3 className='auth__title'>Register</h3>
        <form onSubmit={handleRegister}>
          <div className={
            msgError !== null && 'auth__alert-error' 
          }>
            {msgError}
          </div>
          <input type='name' placeholder='Name' name='name' className='auth__input' autoComplete='off' value={name} onChange={handleInputChange}/>
          <input type='text' placeholder='Email' name='email' className='auth__input' autoComplete='off' value={email}  onChange={handleInputChange}/>
          <input type='password' placeholder='Password' name='password' className='auth__input' value={password} onChange={handleInputChange}/>
          <input type='password' placeholder='Confirm password' name='passwordc' className='auth__input' value={passwordc} onChange={handleInputChange}/>

          <button type='submit' className='btn btn-primary btn-block'>Login</button>
       
          

          <Link to={'/auth/login'} className='link mt-1'>
            Already register? Click here
          </Link>
          
        </form>
    </div>
  )
}
