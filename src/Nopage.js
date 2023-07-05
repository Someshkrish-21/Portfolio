import React from 'react'
import {Link} from 'react-router-dom'
const Nopage = () => {
  return (
    

    <div class="container1">
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
                <div class="col-lg-12 text-404">
                    <b>404</b>
                </div>
                <div class="col-lg-12 text">
                    <b> PAGE NOT FOUND </b>
                </div>
                <div class="col-lg-12 text-btn">
                    <a href="index.php"><button name="login" class="btn5 d-block me-auto ms-auto"><Link to={'/'}>Back To Home</Link></button></a>
                </div>
            </div>
            <div class="col-lg-2"></div>
        </div>
    </div>












  )
}

export default Nopage