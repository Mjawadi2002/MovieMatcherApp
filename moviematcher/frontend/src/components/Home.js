import { Component } from "react";
import Slider from "./Slider";
import Services from "./Services";

class Home extends Component{
    render(){
        return(
            <div>
                <Slider />
                <Services />
            </div>
        );
    }
}

export default Home;