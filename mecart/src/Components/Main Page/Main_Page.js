import React,{Component} from 'react'
import './Main_Page.css'
import '../Sell Main Page/Sell_Main_Page'
// import {Route,HashRouter} from 'react-router-dom'



class Main_Page extends Component{
    render(){
        return(
          
                    <div className="body">
                    <button onClick className="Buybutton">Buy</button>
                    <button onClick className="SellButton">Sell</button>
                    </div>   
           
         
          
            );
    }
}
export default Main_Page