import React ,{useEffect}from 'react'
import Banner from '../components/Banner/Banner'
import Product from '../components/Product/Product'
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

import { useDispatch} from 'react-redux';
import { getProducts } from '../actions/product';


function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts());
    }, [ dispatch]);

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
