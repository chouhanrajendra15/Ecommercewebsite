import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6 text-black">
                    <div className="px-5 ms-xl-4">
                        <i className='fas fa-crow fa-2x me-3 pt-5 mt-xl-4' style={{color:"#709085"}}></i>
                        
                    </div>
                    <div  className='d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5'>
                       <form style={{width:"23rem"}} >

                          <h3 class="fw-normal mb-3 pb-3" style={{"letter-spacing":"1px;"}} >Log in </h3>

                          <div className="form-outline mb-4">
                            <input type="email" id="form2Example18" className='form-control form-control-lg'/>
                            <label className='form-label' for="from2Example18">Email address</label>
                          </div>

                          <div className='form-outline mb-4'>
                            <input type="password" id="form2Example28" className='form-control form-control-lg' />
                            <label className='form-label' for="form2Example28" >Password</label>
                          </div>
                          <div className='pt-1 mb-4'>
                            <butoon className="btn btn-info btn-lg btn-block" type="button">Login</butoon>
                          </div>
                          <p className='small mb-5 pb-lg-2'><a className='text-muted' href="#!">Forget password?</a></p>
                          <p className="link-info">Don't have an account?<Link to="/Register" className='link-info'>Register here </Link></p>

                       </form>
                    </div>

                </div>
                <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone" />
      </div>

            </div>
        </div>
      </section>
    </div>
  )
}

export default Login
