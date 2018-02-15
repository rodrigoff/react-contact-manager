import axios from "axios";
import {
  FETCH_CONTACTS,
  FETCH_CONTACT,
  NEW_CONTACT,
  SAVE_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT
} from "./actionTypes";

const url = "/contact";
const client = axios.create({
  baseURL: "http://localhost:3030",
  headers: {
    "Content-Type": "application/json"
  }
});

export function fetchContacts() {
  return dispatch => {
    dispatch({
      type: FETCH_CONTACTS,
      payload: client.get(url)
    });
  };
}

export function newContact() {
  return dispatch => {
    dispatch({
      type: NEW_CONTACT
    });
  };
}

export function saveContact(contact) {
  return dispatch => {
    return dispatch({
      type: SAVE_CONTACT,
      payload: client.post(url, contact)
    });
  };
}

export function fetchContact(_id) {
  return dispatch => {
    return dispatch({
      type: FETCH_CONTACT,
      payload: client.get(`${url}/${_id}`)
    });
  };
}

export function updateContact(contact) {
  return dispatch => {
    return dispatch({
      type: UPDATE_CONTACT,
      payload: client.put(`${url}/${contact._id}`, contact)
    });
  };
}

export function deleteContact(_id) {
  return dispatch => {
    return dispatch({
      type: DELETE_CONTACT,
      payload: client.delete(`${url}/${_id}`)
    });
  };
}
