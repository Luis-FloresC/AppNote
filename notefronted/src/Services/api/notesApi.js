import { axiosPrivate } from './axios';
const postNew = (title,description,keyword) => {
  return axiosPrivate.post(
    '/notes/agregarNota',
    {
        title,description,keyword
    }
  )
};

const putNote = (title,description,keyword,id) => {
  return axiosPrivate.put(
    `notes/modificarNota/${id}`,
    {
        title,description,keyword
    }
  )
};

export  {
    postNew,putNote
};