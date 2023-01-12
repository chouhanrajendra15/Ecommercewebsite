import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5 ">
      <div className="row">
        <div className="col-md-6">
          <h1 className='text-primary fw-bold mb-4'>About Us</h1>  
           <hr />

          <p className='lead mb-4 '>
         
           <h6> HII... THERE...🙌🏼 🙌🏼 🙌🏼🙌🏼</h6>

          <h6>  THIS SITE IS DEVELOPED BY RAJENDRA CHOUHAN...👦🏼👦🏼👦🏼👦🏼</h6>

           <h6> THIS IS A DEMO ECOOMERCE SHOPPING SITE 🖤🖤🖤🖤</h6>

           <h6> THANK YOU FOR VISITING 🍀🍀🍀🍀</h6>


           <h4> HAVE A GREAT DAY 😀😀😀😀</h4>
            </p>
            <hr />

            
            <Link to="/contact" className="btn btn-outline-primary px-3">Contact us</Link>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default About
