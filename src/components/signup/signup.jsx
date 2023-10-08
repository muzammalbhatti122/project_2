

import { useForm } from 'react-hook-form'
import './signup.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export function Signup(){

    let move = useNavigate()

    let {register , handleSubmit} = useForm();

    const onSave = (signUpData)=> {
                console.log(signUpData);
                axios.post('/signup-hogya' , signUpData).then(function(a){
                    console.log(a.data);
                    if(a.data){
                        move('/login')
                    }else{
                        alert('nahi')
                    }
                })
    }

    return <div>
        <form onSubmit={handleSubmit(onSave)} id="form-signup">
        <h2 class="animated">SignUp</h2>

                <br />
                <br />
            <div>
                <input className='inp' type="text" name="" id="" placeholder='Enter Your Name' {...register('userName')}  />
            </div>
            <br />
            <div>
                <input  className='inp' type="Email" name="" id="" placeholder='Enter Your Email' {...register('userEmail')}  />
            </div>
            <br />
            <div>
                <input className='inp' type="password" name="" id="" placeholder='Enter Your Password' {...register('userPassword')}   />
            </div>
            <br />
            <br />
            <div>
                {/* <Link to={'/login'}> */}
               <button id='btn-signup'>SignUp</button>
                {/* </Link> */}
            </div>
        </form>
    </div>
}