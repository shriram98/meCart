import React,{Component} from 'react'
import './Sell_Main_Page.css'
import './bootstrap.css'
import 'bootstrap'
// import {collapse} from 'bootstrap'
class Sell_Main_Page extends Component{
    render(){
        return(
            <div className="body">
                <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                <img src="./download.png" className="" alt="" />
                Mecart
                </a>
                </nav>
                <div className="buttons">
                    <button type="button" className="btn btn-primary btn-lg new-ad">New Ad </button>
                    <button type="button" className="btn btn-secondary btn-lg">Edit My Ad</button>
                </div>
              
            </div>
        );
    }
}
export default Sell_Main_Page