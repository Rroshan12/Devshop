import React from 'react'
import Aside from '../Aside/Aside'

function Banner() {
    return (
                 
        <section class="section-main bg padding-y">
        <div class="container">
        <div class="row">
         <Aside/>
           <div class="col-md-9">
              <article class="banner-wrap">
                    <img src="assets/images/2.jpg" class="w-100 rounded" />
              </article>
           </div> 
        </div>
        </div> 
        </section>
    )
}

export default Banner
