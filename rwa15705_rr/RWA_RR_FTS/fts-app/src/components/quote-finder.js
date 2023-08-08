import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { findQuoteSaga, findQuote } from "../store/action";


class QuoteFinder extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <form className="form-inline my-2 my-lg-0">
                <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Pretraga" 
                aria-label="Search" 
                onChange={this.findQuoteOnChange}
                /> 
            </form>
        )
    }

    findQuoteOnChange = (event) => {
        let inputString = event.target.value;
        this.props.findQuotePropsSaga(inputString);
        // this.props.findQuoteProps(inputString);
    }
}

function mapStateToProps(state){
    return{
        quotes: state.quotes
    }
}

function MapDispatcherToProps(dispatch){
    return bindActionCreators({
        findQuoteProps: findQuote,
        findQuotePropsSaga: findQuoteSaga,
        findQuoteProps: findQuote
    },dispatch)
}

export default connect(mapStateToProps, MapDispatcherToProps)(QuoteFinder);