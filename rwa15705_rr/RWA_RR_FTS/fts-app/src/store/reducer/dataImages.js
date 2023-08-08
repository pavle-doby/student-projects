import { RECEIVE_API_DATA_IMAGES} from "../action/index";

export default (state={},{type,dataImages}) => {
    switch(type){
        case RECEIVE_API_DATA_IMAGES: {            
            // console.log("case :", type, " dataImages: ", dataImages);
            return dataImages;
        }
        default: {
            return state;
        }
    }
}