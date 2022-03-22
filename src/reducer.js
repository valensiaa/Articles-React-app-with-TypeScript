export const initialState = {
  isLoading: true,
  data: [],
  search: "",
  searchData: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { 
         ...state,
         data: action.payload, 
         isLoading: false 
      };
    case "SEARCH_INPUT":
      return { 
         ...state,
         search: action.payload 
      };
    case "SEARCH_DATA":
      return {
        ...state,
        searchData: action.payload,
      };
      default:
         throw new Error()
  }
};
