import { axiosPrivate } from './axios';
const postNew = (title,description,keyword) => {
  return axiosPrivate.post(
    '/notes/agregarNota',
    {
        title,description,keyword
    }
  )
};

export  {
    postNew
};