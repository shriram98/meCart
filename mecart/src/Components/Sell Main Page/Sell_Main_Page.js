import React,{Component} from 'react'
import './Sell_Main_Page.css'
import logo from './logo.png'
import { Route, Switch, HashRouter } from 'react-router-dom'

import PostAd from ''
import EditMyAd from ''

class Sell_Main_Page extends Component{
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(e) {
        if(e.target.id == "button1") {
            this.props.history.push("/postad")
        }
        else {
            this.props.history.push("/editad")
        }
    }    
    render(){
        return(
                <HashRouter>
                    <div className="body">
                    <div className="buttons">{/* Class  to group the buttons */}
                    <button type="button" id="button1" className="btn btn-pri btn-lg new-ad" onClick={this.handleClick}>Post Ad </button>
                    <button type="button" id="button2" className="btn btn-sec btn-lg" onClick={this.handleClick}>Edit My Ad</button>
                    </div>
                    <hr></hr>
                      <img src={logo} width="140" height="140" alt="" className="nav-logo "></img>
                    </div>
            
                    <div className="page-content">
                        <Switch>
                            <Route path="/postad" component={PostAd} />
                            <Route path="/editad" component={EditMyAd} />
                        </Switch>
                    </div>
                </HashRouter>
                
            
        );
    }
}
export default Sell_Main_Page
