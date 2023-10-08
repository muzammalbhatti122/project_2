// import { useForm } from "react-hook-form"


// export function Login(){


//   let {register , handleSubmit} = useForm();


//   function onLogin(loginData){
//         console.log(loginData);
//   }

//     return <div>
//         <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
//   <div className="container py-5 h-100">
//     <div className="row d-flex justify-content-center align-items-center h-100">
//       <div className="col col-xl-10">
//         <div className="card" style={{ borderRadius: "1rem" }}>
//           <div className="row g-0">
//             <div className="col-md-6 col-lg-5 d-none d-md-block">
//               <img
//                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
//                 alt="login form"
//                 className="img-fluid"
//                 style={{ borderRadius: "1rem 0 0 1rem" }}
//               />
//             </div>
//             <div className="col-md-6 col-lg-7 d-flex align-items-center">
//               <div className="card-body p-4 p-lg-5 text-black">
//                 <form onSubmit={handleSubmit(onLogin)}>
//                   <div className="d-flex align-items-center mb-3 pb-1">
//                     <i
//                       className="fas fa-cubes fa-2x me-3"
//                       style={{ color: "#ff6219" }}
//                     />
//                     <span className="h1 fw-bold mb-0">Addidas</span>
//                   </div>
//                   <h5
//                     className="fw-normal mb-3 pb-3"
//                     style={{ letterSpacing: 1 }}
//                   >
//                     Sign into your account
//                   </h5>
//                   <div className="form-outline mb-4">
//                     <input
//                       {...register('userEmail')}
//                       type="email"
//                       className="form-control form-control-lg"
//                     />
//                     <label className="form-label" htmlFor="form2Example17">
//                       Email address
//                     </label>
//                   </div>
//                   <div className="form-outline mb-4">
//                     <input
//                       {...register('userPassword')}
//                       type="password"
//                       className="form-control form-control-lg"
//                     />
//                     <label className="form-label" htmlFor="form2Example27">
//                       Password
//                     </label>
//                   </div>
//                   <div className="pt-1 mb-4">
//                     <button
//                       className="btn btn-dark btn-lg btn-block"
//                       type="button"
//                     >
//                       Login
//                     </button>
//                   </div>
//                   <a className="small text-muted" href="#!">
//                     Forgot password?
//                   </a>
//                   <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
//                     Don't have an account?{" "}
//                     <a href="#!" style={{ color: "#393f81" }}>
//                       Register here
//                     </a>
//                   </p>
//                   <a href="#!" className="small text-muted">
//                     Terms of use.
//                   </a>
//                   <a href="#!" className="small text-muted">
//                     Privacy policy
//                   </a>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//     </div>
// }


















import { useForm } from 'react-hook-form'
// import './signup.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"



export function Login() {

  let dispatch = useDispatch();

  let { register, handleSubmit } = useForm();
  let move = useNavigate();

  const onSave = (loginData) => {
    console.log(loginData);
    axios.post('/login-hogya', loginData).then(function (b) {
      console.log(b.data);
      if(b.data){

        
        localStorage.setItem('meraToken' , b.data.myToken)

        move('/section')

        
        dispatch({
          type:'LOGINHOGYA',
          paylode:b.data
        })

      }else{
        alert('no')
      }
    })
  }

  return <div>
    <form onSubmit={handleSubmit(onSave)} id="form-signup">
      <h2 class="animated">Login</h2>

      <br />
      <br />
      <br />
      <div>
        <input className='inp' type="Email" name="" id="" placeholder='Enter Your Email' {...register('userEmail')} />
      </div>
      <br />
      <div>
        <input className='inp' type="password" name="" id="" placeholder='Enter Your Password' {...register('userPassword')} />
      </div>
      <br />
      <Link to={'/'}><span>Regester Hear</span></Link>
      <br />
      <br />
      <div>
        <button id='btn-signup'>Login</button>
      </div>
    </form>
  </div>
}













