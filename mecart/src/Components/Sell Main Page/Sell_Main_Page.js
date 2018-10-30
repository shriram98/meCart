import React,{Component} from 'react'
import './Sell_Main_Page.css'

import 'bootstrap'
import logo from './logo.png'

class Sell_Main_Page extends Component{
    render(){
        return(
         
                    <div className="body">
                    <div className="buttons">
                    <button type="button" className="btn btn-primary btn-lg new-ad">New
                     Ad </button>
                    <button type="button" className="btn btn-secondary btn-lg">Edit 
                    My Ad</button>
                    </div>
                    <hr></hr>
                      <img src={logo} width="120" height="120" alt="" className="nav-logo "></img>
                    </div>
           
            
        );
    }
}
export default Sell_Main_Page