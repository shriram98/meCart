import React,{Component} from 'react'
import './Sell_Main_Page.css'
import logo from './logo.png'

class Sell_Main_Page extends Component{
    render(){
        return(
         
                    <div className="body">
                    <div className="buttons">{/* Class  to group the buttons */}
                    <button type="button" className="btn btn-pri btn-lg new-ad">Post Ad </button>
                    <button type="button" className="btn btn-sec btn-lg">Edit My Ad</button>
                    </div>
                    <hr></hr>
                      <img src={logo} width="140" height="140" alt="" className="nav-logo "></img>
                    </div>
           
            
        );
    }
}
export default Sell_Main_Page