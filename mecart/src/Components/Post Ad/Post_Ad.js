import React,{Component} from 'react'
import './Post_Ad.css'
import logo from './logo.png'
import 'bootstrap'

class Post_Ad extends Component{
    render(){
        return(
            <div className="body">
            <div className="formstyle">
            <form>
                    <div className="form-group ">
                        <label for="AdTitle">Ad Title *</label>
                        <input type="text" className="form-control" id="AdTitle" placeholder="Enter Title here" required maxLength="25"/>
                        <small id="AdTitleHelpBlock" class="form-text text-muted">
                        Title should not exceed 25 characters
                        </small>                 
                    </div>
                 
                    
                    <div className="form-group" >
                        <label for="category" required>Category*</label>
                        <select className="form-control" id="Category" required >
                        <option value="0">Select Category:</option>
                        <option>Category 1</option>
                        <option>Category 2</option>
                        <option>Category 3</option>
                        <option>Category 4</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label for="AdDescription">Ad Description*</label>
                        <textarea className="form-control" id="AdDescription" rows="3" required maxLength="200"></textarea>
                        <small id="passwordHelpBlock" class="form-text text-muted">
                        Should not exceed 200 words
                        </small>
                    </div>
                  

                    <div className="form-group">
                        <label for="AdPhotos">Upload Photos*</label>
                        <input type="file" className="form-control-file" id="AdPhotos"  required/>
                        <small id="passwordHelpBlock" class="form-text text-muted">
                        Tip:Photos attract buyers
                        </small>
                    </div>

                    <div className="form-group ">
                        <label for="ContactName">Name *</label>
                        <input type="text" className="form-control" id="ContactName" placeholder="Enter Name here" required maxLength="25"/>
                        <small id="AdTitleHelpBlock" className="form-text text-muted">
                            Name to be displayed on the Ad
                        </small>                 
                    </div>

                     <div className="form-group ">
                        <label for="ContactNum">Phone *</label>
                        <input type="number" className="form-control" id="ContactNum" placeholder="Enter Phone number here" required maxLength="25"/>
                        <small id="AdTitleHelpBlock" className="form-text text-muted">
                            Contact to be shown
                        </small>                 
                    </div>

                    
                    <div className="form-group" >
                        <label for="category" required>Category*</label>
                        <select className="form-control" id="Category" required >
                        <option value="0">Select Class:</option>
                        <option>Class 1</option>
                        <option>Class 2</option>
                        <option>Class 3</option>
                        <option>Class 4</option>
                        <option>Class 5</option>
                        <option>Class 6</option>
                        <option>Class 7</option>
                        <option>Class 8</option>
                        </select>
                    </div>
                    
                

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="Terms" required/>
                        <label class="form-check-label" for="Terms">
                        * I agree to the terms and conditions 
                        </label>
                    </div>

                    <button className="btn btn-primary" type="submit">Post Ad</button>
               
                </form>

            </div>
              

            </div>
        );
    }
}
export default Post_Ad