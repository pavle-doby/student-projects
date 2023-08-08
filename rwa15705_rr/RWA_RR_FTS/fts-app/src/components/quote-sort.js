import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { sortQuoteSagaAction, sortQuote } from "../store/action";
import { Quote } from "../models/quote.models";

class QuoteSort extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <ul className="navbar-nav mr-auto">
                {this.renderBtnsForSort()}
            </ul>
        );
    }
    renderBtnsForSort(){
        return this.props.quoteTypes.map(quoteType => {
            return (
                <li className="nav-item">
                    <a className="btn btn-outline-primary" onClick={() => this.props.sortQuotePropsSaga(quoteType)}> {quoteType} </a>
                </li>
            )
        })
    }
}

function mapStateToProps(state){
    return{
        quotes: state.quotes,
        quoteTypes: state.quotes.quoteType
    }
}

function MapDispatcherToProps(dispatch){
    return bindActionCreators({
        sortQuoteProps : sortQuote,
        sortQuotePropsSaga : sortQuoteSagaAction
    },dispatch)
}

export default connect(mapStateToProps, MapDispatcherToProps)(QuoteSort);
