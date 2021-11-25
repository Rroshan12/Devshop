import React from 'react'

function Aside() {
    return (
        <aside class="col-md-3">
            <h1>Sort</h1>
        <nav class="card">
              <ul class="menu-category">
                  
                 <li><a href="#">Best clothes</a></li>
                 <li><a href="#">Automobiles</a></li>
                 <li><a href="#">Home interior</a></li>
                 <li><a href="#">Electronics</a></li>
                 <li><a href="#">Technologies</a></li>
                 <li><a href="#">Digital goods</a></li>
                 <li class="has-submenu"><a href="#">More items</a>
                    <ul class="submenu">
                          <li><a href="#">Submenu name</a></li>
                          <li><a href="#">Great submenu</a></li>
                          <li><a href="#">Another menu</a></li>
                          <li><a href="#">Some others</a></li>
                    </ul>
                 </li>
              </ul>
        </nav>
     </aside>
    )
}

export default Aside
