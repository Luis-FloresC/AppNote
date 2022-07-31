//import './List.css';
import { axiosPrivate } from "../../Services/api/axios";

import { useSelector, useDispatch } from 'react-redux';

const ListNotes = ({ documents = [] }) => {

  const listItems = documents.map((o) => {
    return <ListItem key={o._id} {...o} />
  })
  return (
    <>
      <div className="grid h-full card bg-base-300 rounded-box place-items-center">
        {listItems}
      </div>

    </>

  );
}
const ListItem = ({ title, description, keyword, created,_id }) => {

  const keywords = keyword.map(
    (o) => {
      return (
        <span key={o} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{o}</span>
      )
    }
  );

  const Buscar = async(id) =>{
    try{
      alert("Hola");
      const { data } = await axiosPrivate.get(`/notes/porId/${id}`);
      alert(data.title);
      //dispatch({ type: "NOTE_POR_ID_SUCCESS", payload: data });
       
    }catch(ex){
      console.log("Error");
    }
 
  }
  const onEditarClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
   Buscar(e.target.value);
  }

  return (
    <>
      <div className="rounded overflow-hidden shadow-lg bg-primary-focus w-full">

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="text-sm text-left">{new Date(created).toLocaleDateString()}</div>
          <p className="text-white text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {keywords}
        </div>
        <div className="btn-group justify-end">
          <button className="btn btn-info" onClick={onEditarClick} value={_id}>Editar Nota</button>
          <div class="divider divider-horizontal"></div>
          <button className="btn btn-danger">Eliminar</button>
        </div>
      </div>
      <div className="divider text-white"></div>
    </>
  )
}
export default ListNotes;