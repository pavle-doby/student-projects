import { RECEIVE_API_DATA } from "../action/index";

export default (state={},{type,data}) => {
    switch(type){
        case RECEIVE_API_DATA: {
            // console.log("case :", type, " data: ", data);
            return data;
        }
        default: {
            return state;
        }
    }
}