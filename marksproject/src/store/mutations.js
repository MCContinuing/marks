import {CHANGEINDEX} from "./mutations-types";

export default  {
  [CHANGEINDEX](state,index){
    state.index = index;
  },
}
