



import { Link } from 'react-router-dom'
import './header.css'
import { useDispatch, useSelector } from 'react-redux'


export function Header(){

  let dispatch = useDispatch();


  let userMila = useSelector(function(store){
    return store.adUserData.cruntUser
  })

    return <div>
        <nav id='header' className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand"to={'/'}>
    <img id="logo" src="logo.webp" alt="" />
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup"
    aria-expanded="false"
    aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon" />
  </button>
    {userMila ? <span>Welcome , {userMila.userEmail}</span> :null}
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">

{

userMila == null ?

      <Link className="nav-item nav-link active"to={'/login'} >
        Login <span className="sr-only">(current)</span>
      </Link>

:<Link className="nav-item nav-link active"to={'/login'} 
onClick={function(){
  dispatch({
    type:'LOGOUTHOGYA'
  })
}}>
Logout <span className="sr-only">(current)</span>
</Link>
}

      <Link className="nav-item nav-link"to={'/admin'}>
        Admin Panal
      </Link>
      
     
    </div>
  </div>
</nav>

    </div>
}