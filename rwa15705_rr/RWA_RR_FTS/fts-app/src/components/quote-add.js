import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import { addQuote } from "../store/action";
import { Quote } from "../models/quote.models";

import { addQuoteSaga } from "../store/action";

class QuoteAdd extends Component{
    constructor(){
        super();
        this.quote;
    }

    render() {   
        return (
        <div>
            <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                Dodaj post
            </button>
            <div className="collapse" id="collapseExample">
                <div className="card card-body">
                    {this.renderTextArea("Napisi nesto lepo :D", 3)}
                    {this.renderSelectOption()}   
                    {this.renderButton("Postavi")}               
                </div>
            </div>         
        </div>

        );
      }
      renderTextArea(text, rows){
          return(
            <div className="form-group">
                <h3 htmlFor="exampleFormControlTextarea1">{text}</h3>
                <textarea 
                className="form-control" 
                id="exampleFormControlTextarea1" 
                rows={rows}

                onChange={this.readTextFromTextArea}
                >
                </textarea>
            </div>
          )
      }
      renderSelectOption(){
        this.optionValue = this.props.quoteType[0];

          return(
            <div className="form-group">
                <h5 htmlFor="exampleFormControlSelect1">Odaberi vrstu</h5>
                <select 
                className="form-control" 
                id="exampleFormControlSelect1"
                onChange={this.getOptionValue}
                >
                {
                    this.props.quoteType.map(type => {
                        return(
                            <option key={type}>{type}</option>
                        )
                    })
                }
                </select>
            </div>
          );
      }
      renderButton(text){
        return(
          <button 
          type="button" 
          className="btn btn-primary"
          data-toggle="collapse" 
          data-target="#collapseExample" 
          aria-expanded="false" 
          aria-controls="collapseExample" 
          onClick={() => {
            //   return this.props.addQuoteProps(new Quote(0,this.textFromTextArea,this.optionValue));
            return this.props.addQuotePropsSaga(new Quote(0,this.textFromTextArea,this.optionValue));
            
              
          }}
          >
          {text}
          </button>
        )
       }
      getOptionValue = (event) => {
          this.optionValue = event.target.value;
          console.log("Opcija:",this.optionValue);
        }
      readTextFromTextArea = (event) => {
          this.textFromTextArea = event.target.value;
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
        addQuoteProps : addQuote,
        addQuotePropsSaga: addQuoteSaga
    },dispatch)
}

export default connect(mapStateToProps, MapDispatcherToProps)(QuoteAdd);