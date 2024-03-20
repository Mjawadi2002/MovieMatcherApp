import { Component } from "react";

class Header extends Component{
    render(){
        return(
            <nav className='navbar navbar-expand-lg  ' >
            <div className="container-fluid">
              <a className="navbar-brand text-white" href="#">Movie <span style={{color:"red"}}>Matcher</span> </a>
              <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse  " >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="#">About Us</a>
                    
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">Contact Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="#">
                      <img
                      src="https://cdn-icons-png.flaticon.com/128/9068/9068842.png"
                      style={{width:"27px",height:"27px"}}
                      />


                    </a>
                  </li>
                  
                 
                </ul>
              </div>
            </div>
          </nav>
        );
    }
}

export default Header;