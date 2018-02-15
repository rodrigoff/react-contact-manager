import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ContactReducer from "./contactReducer";
import ModalReducer from "./modalReducer";

const reducers = {
  contactStore: ContactReducer,
  modalStore: ModalReducer,
  form: formReducer
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
