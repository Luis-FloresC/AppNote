import NotesFormUx from "./NotesFormUx";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../Notas/NotasActions";
import { getNotesDocuments, getNote, updateNote, clearNotesError,deleteNote } from "../Notas/NotasActions";
import { useEffect } from 'react';

const NotasForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {  action,id } = useParams();
  const { documents: { page, pageLimit }, documentError, Notes, } = useSelector(state => state.notes);
  const [Titulo, setTitulo] = useState("Nueva Nota");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    keyword: "",
  });

  useEffect(() => {
    clearNotesError(dispatch);
    if (action === "UPD") {
      if (Notes.title !== formData.title) {
        setFormData({ ...Notes });
        setTitulo("Editar Nota");
        getNote(dispatch, { idNota: id });
      }
    }
    else if (action === "DEL") {
      if (Notes.title !== formData.title) {
        setFormData({ ...Notes });
        setTitulo("Eliminar Nota");
        getNote(dispatch, { idNota: id });
      }
    }
    else{
      const Datos = {
        title: "",
        description: "",
        keyword: "",
      }
      setTitulo("Nueva Nota");
      setFormData(Datos);
    }



  },
    [dispatch, Notes, id,action,formData.title]);


  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "description":
        setFormData({ ...formData, description: value });
        break;
      case "title":
        setFormData({ ...formData, title: value });
        break;
      case "keyword":
        setFormData({ ...formData, keyword: value });
        break;
      default:
        break;
    }
  }

  const onSubmitClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let ok = false;
    if (action === "UPD") {
      ok = await updateNote(dispatch, { ...formData, id });
      alert("Nota Actualizada con éxito")
    }else if(action === "DEL") {
      ok = await deleteNote(dispatch, { id:id });
      alert("Nota Eliminada con éxito");
    }
    else {
      ok = await addNote(dispatch, { ...formData });
      alert("Nota Guardada con éxito");
    }

    // const ok = false;
    if (ok) {
      getNotesDocuments(dispatch, page, pageLimit);
      navigate("/home");
    }
    else {
      alert({ documentError });
    }
  }

  const onCancelClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate("/home");
  }

  return (
    <NotesFormUx
      titulo={Titulo}
      titleValue={formData.title}
      descriptionValue={formData.description}
      keywordValue={formData.keyword}
      error={documentError}
      onChangeHandler={onChangeHandler}
      onSubmitClick={onSubmitClick}
      onCancelClick={onCancelClick}
    />
  );
};
export default NotasForm;