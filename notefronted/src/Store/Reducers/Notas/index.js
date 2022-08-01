import {
  NOTES_LOAD,
  NOTES_SUCCESS,
  NOTES_FAILED,
  NOTES_CLEAR_ERROR,
  NOTES_PAGE_CHANGE,
  NOTES_LIMIT_CHANGE,
  NOTE_ADD_SUCCESS,
  NOTE_ADD_FAILED,
  NOTE_POR_ID_SUCCESS,
  NOTE_UPDATE_SUCCESS,
  NOTE_UPDATE_FAILED,
  NOTE_DELETE_SUCCESS,
  NOTE_DELETE_FAILED
} from "../../../Views/Notas/NotasActions";

const defaultValue = {
  documents: {
    total: 0,
    page: 1,
    pageLimit: 5,
    totalPages: 0,
    notes: []
  },
  documentsIsLoading: false,
  documentError: null,
  filterOptions: {
    startDate: new Date() - 10,
    endDate: new Date()
  },
  isLoading: false,
  Notes: []
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
    case NOTE_UPDATE_SUCCESS:
      return {
        ...state,
        documentsIsLoading: false,
        documents: {
          ...payload,
          page: 1,
          pageLimit: 5,
        }
      }

    case NOTE_POR_ID_SUCCESS:
      return {
        ...state,
        documentsIsLoading: false,
        isLoading: true,
        Notes: {
          ...payload,
          page: 1,
          pageLimit: 5,
        }
      }
    case NOTE_DELETE_SUCCESS:
      return {
        ...state,
        documentsIsLoading: false,
        documents: {
          ...payload,
          page: 1,
          pageLimit: 5,
        }
      }

    case NOTES_FAILED:
      return {
        ...state,
        documentsIsLoading: false,
        documentError: payload,
      }
    case NOTE_UPDATE_FAILED:
      return {
        ...state,
        documentsIsLoading: false,
        documentError: payload,

      }
      case NOTE_DELETE_FAILED:
        return {
          ...state,
          documentsIsLoading: false,
          documentError: payload,
  
        }
    case NOTE_ADD_FAILED:
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
    case NOTE_ADD_SUCCESS:
      return {
        ...state,
        documentsIsLoading: false,
        documents: {
          ...payload,
          page: 1,
          pageLimit: 5,
        }
      }
    default:
      return state;
  }
}

export default reducer;
