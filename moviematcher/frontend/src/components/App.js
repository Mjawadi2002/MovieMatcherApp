import { Component } from "react";
import Header from './Header'
import Slider from "./Slider";
import Services from "./Services";
import Footer from "./Footer";

class App extends Component{
  render(){
    return (
              <div className='container-fluid'>
              <Header />
              <Slider />

              <Services />
              <br />
              <Footer />

            </div>
    

    );
    }
  }


export default App;
