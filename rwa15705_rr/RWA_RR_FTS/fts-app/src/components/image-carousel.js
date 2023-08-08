import React , { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { requestApiDataImages } from "../store/action";

class ImageCarousel extends Component{
    constructor(){
        super();
    }

    componentDidMount(){
        this.props.requestApiDataImages();
    }

    render(){
        return(
            <div>
                {this.renderCarousel()}
            </div>
        )
    }
    renderCarousel(){
        let results = this.props.dataImages;
        // console.log("rednderCarousel() dataImages: ", results);

        if(results !== undefined && results.length > 0)
            return(
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {this.renderImageList(results)}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            );
    }
    renderImageList(list){        
        if(list !== undefined && list.length > 0 ){
            let count = 0;            
            return list.map(img => {
                let pomClassName = count === 0 ? "carousel-item active" : "carousel-item";
                let modalTarget = 'exampleImageModal' + count;
                count++;                
                return (
                    <div className={pomClassName} data-toggle="modal" data-target={"#"+ modalTarget}>
                        <img 
                        className="d-block w-100" 
                        src= {img.src}
                        alt={img.alt}>
                        </img>
                        <p>{img.text}</p>
                        {/* Modal mora drugacije... :D */}
                        {/* <div className="modal fade" id={modalTarget} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{img.text}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img 
                                    className="d-block w-100" 
                                    src= {img.src}
                                    alt={img.alt}>
                                    </img>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                )
            });
        }
        else{
            <h1>Loading list of Images</h1>
        }
    }
}

function mapStateToProps(state){
    return{
        dataImages: state.dataImages
    }
}

function MapDispatcherToProps(dispatch){
    return bindActionCreators({
        requestApiDataImages: requestApiDataImages
    }, dispatch);
}

export default connect(mapStateToProps, MapDispatcherToProps)(ImageCarousel);