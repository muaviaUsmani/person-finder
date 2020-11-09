import Person from "../../models/Person";

export enum actionTypes {
  SET_LOADING = 'SET_LOADING',
  SET_PERSONS = 'SET_PERSONS',
  SET_SEARCH = 'SET_SEARCH'
};

export type ProductState = {
  loading: boolean,
  persons: Person[],
};

const initialState: ProductState = {
  loading: false,
  persons: []
};

const persons = (state=initialState, action: any) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case actionTypes.SET_PERSONS:
      return { ...state, persons: action.payload };
    default: 
      return { ...state };
  }
}

export default persons;