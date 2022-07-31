import NotesFormUx from "./NotesFormUx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../Notas/NotasActions";
import { getNotesDocuments } from "../Notas/NotasActions";

const NotasForm =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { documents: { page, pageLimit },documentError } = useSelector(state => state.notes);

    const [formData, setFormData] = useState({
        title:"",
        description: "",
        keyword: "",
      });
  
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
        const ok = await addNote(dispatch, { ...formData });
       // const ok = false;
        if (ok) {
          getNotesDocuments(dispatch, page, pageLimit);
          navigate("/home");
        }
        else{
            alert("Hola");
        }
      }

      const onCancelClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate("/home");
      }

      return(
        <NotesFormUx
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