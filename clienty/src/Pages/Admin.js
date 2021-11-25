import React ,{useEffect} from 'react'
import Aside from '../components/Aside/Aside'
import { useDispatch,useSelector} from 'react-redux';
import { getProducts } from '../actions/product';

function Admin() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getProducts());
    }, [ dispatch]);
    const product = useSelector((state) => state);
    console.log(product.products);


    return (
        <div>
            <header class="section-header">
        <section class="header-main border-bottom">
           <div class="container">
        <div class="row align-items-center">
           <div class="col-lg-2 col-4">
              Devshop.com
           </div>
           <div class="col-lg-6 col-sm-12">
 
           </div> 
           <div class="col-lg-4 col-sm-6 col-12">
              <div class="widgets-wrap float-md-end">
                  
                    <div class="widget-header icontext">
                       <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
                       <div class="text">
                          <span class="text-muted">Welcome!</span>
                          <div> 
                                <a href="#">Sign in</a> |  
                                <a href="#"> Register</a>
                          </div>
                       </div>
                    </div>
              </div> 
           </div> 
        </div> 
           </div> 
        </section> 
        
        </header>

        <section class="section-name padding-y-sm">
        <div class="container">
                               
        <section class="section-main bg padding-y">
        <div class="container">
        <div class="row">
         <Aside/>
           <div class="col-md-9">
            <h1>Add Products</h1>
<form>
  <div class="mb-3">
    <label  class="form-label">Title</label>
    <input type="text" class="form-control" />
  </div>
  <div class="mb-3">
    <label  class="form-label">Category-id</label>
    <input type="text" class="form-control" />
  </div>
  <div class="mb-3">
    <label  class="form-label">Description</label>
    <input type="text" class="form-control" />
  </div>
  <div class="mb-3">
    <label  class="form-label">Image</label>
    <input type="text" class="form-control" />
  </div>

  <div class="mb-3">
    <label  class="form-label">Price</label>
    <input type="text" class="form-control" />
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
           </div> 
        </div>
        </div> 
        </section>
        <header class="section-heading">
           <a href="#" class="btn btn-outline-primary float-end">See all</a>
           <h3 class="section-title">All products</h3>
        </header>

     
           
        <div class="row">


           {
               product.products.map((item)=>(

                <div class="col-md-3">
                <div href="#" class="card card-product-grid">
                      <a href="#" class="img-wrap"> <img src={`${item.image}`} /> </a>
                      <figcaption class="info-wrap">
                         <a href="#" class="title">{item.title}</a>
                         <div class="price mt-1">$ {item.price}</div> 
                         <a href="#" class="btn btn-outline-primary float-end m-2 ">Edit</a>&nbsp;
                         <a href="#" class="btn btn-outline-secondary float-end m-2 ">Delete</a>
                      </figcaption>
                </div>
             </div> 
                  
               ))
           }
          
           
        </div> 
        </div>
        </section>


           
        </div>
    )
}

export default Admin
