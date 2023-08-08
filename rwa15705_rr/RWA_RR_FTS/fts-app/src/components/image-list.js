import React , { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { requestApiDataImages } from "../store/action";

class ImageList extends Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.props.requestApiDataImages();
    }
    render(){
        return(
            <div>
                <ul className="list-group">
                    {this.renderSagaList()}
                </ul>
            </div>
        );
    }
    renderSagaList(){
        let results = [];
        results = this.props.dataImages;

        console.log("renderSagaList() data: ", results);
    
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
        return list.map(img => {
            return (
                <li 
                className="list-group-item"
                key={img.id + "img"}
                >
                    <img 
                    className="d-block w-100" 
                    src={img.src}
                    alt={img.alt}>
                    </img>
                    <br />
                    {img.text}
                    <br />
                    <button className='btn btn-outline-primary'>Like</button>
                    
                </li>
            )
        });
    }
}

function mapStateToProps(state){
    return{
        dataImages: state.dataImages //za ovo mora da se predefinise baza
    }
}

function MapDispatcherToProps(dispatch){
    return bindActionCreators({
        requestApiDataImages: requestApiDataImages
    }, dispatch)
}

export default connect(mapStateToProps, MapDispatcherToProps)(ImageList);
