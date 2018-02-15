import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";
import ContactReducer from "./contactReducer";
import ModalReducer from "./modalReducer";

const reducers = {
  contactStore: ContactReducer,
  modalStore: ModalReducer,
  form: formReducer,
  routing: routerReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
