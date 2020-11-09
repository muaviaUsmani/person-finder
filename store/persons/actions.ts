import Person from "../../models/Person";
import { actionTypes } from "./reducers";
import persons from "../../mocks/persons.json";

export const setLoading = (loading: boolean) => (dispatch: Function) => {
  dispatch({ type: actionTypes.SET_LOADING, payload: loading });
}

export const setPersons = (persons: Person[]) => (dispatch: Function) => {
  dispatch({ type: actionTypes.SET_PERSONS, payload: persons });
}

export const loadPersons = () => (dispatch: Function) => {
  dispatch(setPersons(persons));
}

export const searchPersons = (search: string) => (dispatch: Function) => {
  if (search.length) {
    let searchResults = persons.filter((person: Person) => person.name.includes(search));
    dispatch(setPersons(searchResults));
  } else {
    dispatch(loadPersons());
  }
}