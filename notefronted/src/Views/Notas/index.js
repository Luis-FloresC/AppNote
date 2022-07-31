import NotasUx from './NotasUx';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
import { getNotesDocuments } from './NotasActions';
import ListNotes from '../../Components/ListNotes';
import Paging from '../../Components/Paging';

const Notes = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const { documents } = useSelector(state => state.notes);
  useEffect(() => {
    getNotesDocuments(dispatch, documents.page, documents.pageLimit);
  },
    []);

  const Pager = () => {
    console.log(documents.totalPages);
    if (documents.totalPages >= 1) {
      return (<Paging currentPage={documents.page}
        totalPages={documents.totalPages}
        pageLimit={documents.pageLimit}
        onPageChange={(page) => getNotesDocuments(dispatch, page, documents.pageLimit)}
        onLimitChange={(e) => getNotesDocuments(dispatch, documents.page, e.target.value)}>
      </Paging>
      )
    }
    return null;
  }


  return (
    <NotasUx  >
      <Pager />
      <ListNotes  documents={documents.notes}></ListNotes>
      <Pager />
    </NotasUx>
  )
}

export default Notes;
