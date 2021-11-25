import React from 'react'
import Banner from '../components/Banner/Banner'
import Product from '../components/Product/Product'
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';


function Home() {
    return (
        <div className="App">
              <Navigation />
          
            <Banner/>
           
          <Product />

          <Footer/>
            
        
            
           
       </div>
    )
}

export default Home
