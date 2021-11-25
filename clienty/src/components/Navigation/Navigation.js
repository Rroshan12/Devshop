import React from 'react'

function Navigation() {
    return (
        <header class="section-header">
        <section class="header-main border-bottom">
           <div class="container">
        <div class="row align-items-center">
           <div class="col-lg-2 col-4">
              Devshop.com
           </div>
           <div class="col-lg-6 col-sm-12">
              <form action="#" class="search">
                    <div class="input-group w-100">
                       <input type="text" class="form-control" placeholder="Search" />
                       <div class="input-group-append">
                          <button class="btn btn-primary" type="submit">
                          <i class="fa fa-search"></i>
                          </button>
                       </div>
                    </div>
              </form>
           </div> 
           <div class="col-lg-4 col-sm-6 col-12">
              <div class="widgets-wrap float-md-end">
                    <div class="widget-header  me-3">
                       <a href="#" class="icon icon-sm rounded-circle border"><i class="fa fa-shopping-cart"></i></a>
                       <span class="badge badge-pill badge-danger notify">0</span>
                    </div>
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
        <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
        <div class="container">
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                 <li class="nav-item dropdown">
                 <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="#">Supermarket</a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="#">Partnership</a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="#">Baby &amp; Toys</a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="#">Fitness sport</a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="#">Clothing</a>
              </li>
              <li class="nav-item">
                 <a class="nav-link" href="#">Furnitures</a>
              </li>
              <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                 </a>
                 <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Foods and Drink</a></li>
                    <li><a class="dropdown-item" href="#">Home interior</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Home interior 2</a></li>
                 </ul>
              </li>
              </ul>
           </div> 
        </div> 
        </nav>
        </header>
    )
}

export default Navigation
