import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addImageSaga } from "../store/action";
import { myImage } from "../models/myImage.models";


class ImageAdd extends Component {
    constructor() {
        super();
        this.image;
        this.URLfromInput;
    }
    render() {
        return(
            <div>
                <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample_AddImage" aria-expanded="false" aria-controls="collapseExample_AddImage">
                     Dodaj sliku  
                </button>
                <div className= "collapse card" id="collapseExample_AddImage">
                    {/* <h3>Unesi URL neke fantastične slike :D</h3> */}
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">URL</span>
                    </div>
                    <input 
                    onChange = {this.readURLfromInput}
                    type="text" 
                    class="form-control" 
                    placeholder="" 
                    aria-label="" 
                    aria-describedby="basic-addon1">
                    </input>
                    </div>

                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1">OPIS</span>
                    </div>
                    <input 
                    onChange = {this.readTextInput}
                    type="text" 
                    class="form-control" 
                    placeholder="" 
                    aria-label="" 
                    aria-describedby="basic-addon2">
                    </input>
                    <div class="input-group-append">
                        <button 
                        onClick = { () => {
                            return this.addImage();
                        }}
                        class="btn btn-outline-primary" 
                        type="button">
                        DODAJ
                        </button>
                    </div>
                    </div>
                </div>
                
            </div>
        )
    }

    readTextInput = (event) => {
        this.TextFromInput = event.target.value;
    }
    readURLfromInput = (event) => {
        this.URLfromInput = event.target.value;
    }
    addImage = () => {
        if(this.URLfromInput !== undefined && this.URLfromInput !== ''){
            this.props.addImagePropsSaga(new myImage(0,this.TextFromInput, "",this.URLfromInput));
        } else {
            console.log("Los URL"); // neki alert
        }
    }

}

function mapStateToProps(state){
    return{
        quotes: state.quotes,
        quoteType: state.quotes.quoteType 
    }
}

function MapDispatcherToProps(dispatch){
    return bindActionCreators({
        addImagePropsSaga: addImageSaga
    },dispatch)
}

export default connect(mapStateToProps, MapDispatcherToProps)(ImageAdd);