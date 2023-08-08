import React , { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { likeQuoteSaga } from '../store/action';
import {requestApiData} from "../store/action";
import { myImage } from "../models/myImage.models";


class QuoteList extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.requestApiData();
    }

    render(){
        return(
            <div>
                <ul className="list-group">
                    {this.renderSagaList()}
                </ul>
            </div>
        )
    }
    renderSagaList(){
        let results = [];
        results = this.props.data;
    
        if(results !== undefined && results.length > 0){
            return(
                <div>
                    <ul className="list-group">
                        {this.renderQuoteList(results)}
                    </ul>
                </div>
            )
        }
    }
    renderQuoteList(list){
        if(!list){
            return <li> Lodaing... </li>
        }
        return list.map(quote => {
            return (
                <li 
                className="list-group-item"
                key={quote.id}
                >
                    {quote.text}
                    <br />
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type = "button" className='btn btn-outline-primary' onClick={() => this.props.likeQuoteSagaProps(quote)}>Like</button>                    
                        <span className='btn btn-outline-primary'>{quote.likes = quote.likes === 0 ? '' : quote.likes}</span>
                        {/* <button type = "button" className='btn btn-outline-primary'> {quote.likes}</button> */}
                    </div>
                    {/* <button className='btn btn-outline-primary' onClick={() => this.props.likeQuoteSagaProps(quote)}>Like</button> */}
                </li>
            )
        });
    }
    renderFilterList(){
        if(!this.props.quotesFiltered){
            return <li> Lodaing... </li>
        }
        return this.props.quotesFiltered.map(quote => {
            return (
                <li 
                className="list-group-item"
                key={quote.id}
                >
                    {quote.text}
                    <br />
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type = "button" className='btn btn-outline-primary' onClick={() => this.props.likeQuoteProps()}>Like</button>                    
                        <span className='btn btn-outline-primary'>{quote.likes = quote.likes === 0 ? '' : quote.likes}</span>
                        <button type = "button" className='btn btn-outline-primary'> {quote.likes}</button>
                    </div>
                </li>
            )
        });
    }

}

function mapStateToProps(state){
    return{
        quotesFiltered: state.quotes.quotesFiltered,
        data : state.data
    }
}

function MapDispatcherToProps(dispatch){
    return bindActionCreators({
        requestApiData: requestApiData,
        likeQuoteSagaProps : likeQuoteSaga
    }, dispatch);
}
export default connect(mapStateToProps , MapDispatcherToProps )(QuoteList);