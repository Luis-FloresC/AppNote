import {
    NOTES_LOAD,
    NOTES_SUCCESS,
    NOTES_FAILED,
    NOTES_CLEAR_ERROR,
    NOTES_PAGE_CHANGE,
    NOTES_LIMIT_CHANGE
  } from "../../../Views/Notas/NotasActions";
  
  const defaultValue = {
    documents: {
      total: 0,
      page: 1,
      pageLimit: 50,
      totalPages: 0,
      notes: []
    },
    documentsIsLoading: false,
    documentError: null,
    filterOptions: {
      startDate: new Date() - 10,
      endDate: new Date()
    },
  }
  
  const reducer = (state = defaultValue, action = { type: 'NONE', payload: null }) => {
    const { type, payload } = action;
    switch (type) {
      case NOTES_LOAD:
        return {
          ...state,
          documentsIsLoading: true
        }
      case NOTES_SUCCESS:
        return {
          ...state,
          documentsIsLoading: false,
          documents: {
            ...payload,
          }
        }
      case NOTES_FAILED:
        return {
          ...state,
          documentsIsLoading: false,
          documentError: payload,
        }
      case NOTES_CLEAR_ERROR:
        return {
          ...state,
          documentError: null,
        }
      case NOTES_PAGE_CHANGE:
        return {
          ...state,
          documents: {
            ...state.documents,
            page: payload,
          }
        }
      case NOTES_LIMIT_CHANGE:
        return {
          ...state,
          documents: {
            ...state.documents,
            pageLimit: payload,
          }
        }
      default:
        return state;
    }
  }
  
  export default reducer;
  