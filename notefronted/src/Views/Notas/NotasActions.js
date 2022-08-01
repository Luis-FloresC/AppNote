import { axiosPrivate } from "../../Services/api/axios";
import { postNew, putNote }  from "../../Services/api/notesApi";


export const NOTES_LOAD = "NOTES_LOAD";
export const NOTES_SUCCESS = "NOTES_SUCCESS";
export const NOTES_FAILED = "NOTES_FAILED";
export const NOTES_CLEAR_ERROR = "NOTES_CLEAR_ERROR";
export const NOTES_PAGE_CHANGE = "NOTES_PAGE_CHANGE";
export const NOTES_LIMIT_CHANGE = "NOTES_LIMIT_CHANGE";
export const NOTE_ADD_SUCCESS = "NOTE_ADD_SUCCESS";
export const NOTE_ADD_FAILED = "NOTE_ADD_FAILED";
export const NOTE_POR_ID_SUCCESS = "NOTE_POR_ID_SUCCESS";
export const NOTE_UPDATE_SUCCESS = "NOTE_UPDATE_SUCCESS";
export const NOTE_UPDATE_FAILED = "NOTE_UPDATE_FAILED";

export const getNotesDocuments = async (dispatch, page, limit) => {
  try {
    dispatch({ type: NOTES_LOAD, payload: null });
    const { data } = await axiosPrivate.get(`/notes/page/${page}/${limit}`);
    dispatch({ type: NOTES_SUCCESS, payload: data });
  } catch (ex) {
    console.log("notesActions", ex);
    dispatch({ type: NOTES_FAILED, payload: "Error al Cargar Documentos" });
  }
}

export const addNote = async (dispatch,{description,title,keyword} ) => {
  try {
    dispatch({ type: NOTES_LOAD, payload: null });
    const {data} = await postNew(title,description,keyword);
    dispatch({ type: NOTE_ADD_SUCCESS, payload: data });
    return true;
  } catch (ex) {
    console.log("notesActions", ex);
    dispatch({ type: NOTE_ADD_FAILED, payload: "Error al guardar la nota" });
    return false;
  }
}

export const updateNote = async (dispatch,{description,title,keyword,id} ) => {
  try {
    dispatch({ type: NOTES_LOAD, payload: null });
    const {data} = await putNote(title,description,keyword,id);
    dispatch({ type: NOTE_ADD_SUCCESS, payload: data });
    return true;
  } catch (ex) {
    console.log("notesActions", ex);
    dispatch({ type: NOTE_UPDATE_FAILED, payload: "Error al Editar la nota" });
    return false;
  }
}

export const getNote = async (dispatch,{idNota})=>{
  try {
    
    dispatch({ type: NOTES_LOAD, payload: null });
    const { data } = await axiosPrivate.get(`/notes/porId/${idNota}`);
    console.log("Hola",data);
    dispatch({ type: NOTE_POR_ID_SUCCESS, payload: data });
  } catch (ex) {
    console.log("notesActions", ex);
    dispatch({ type: NOTES_FAILED, payload: "Error al buscar nota" });
  }
}

export const setNotesPage = (dispatch, page) => {
  dispatch({ type: NOTES_PAGE_CHANGE, payload: page });
}

export const setNotesLimit = (dispatch, limit) => {
  dispatch({ type: NOTES_LIMIT_CHANGE, payload: limit });
}

export const clearNotesError = (dispatch) => {
    dispatch({ type: NOTES_CLEAR_ERROR, payload: null });
  }
  