import { useEffect, useState } from "react"

import { searchPersons } from "../../store/persons/actions"
import styles from "./Search.module.scss"
import { useDispatch } from "react-redux";

export default function Search() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchPersons(search));
  }, [search]);

  return (
    <div className={`my-5 ${styles.search}`}>
      <input type="text" name="search" placeholder="Type a name..." autoComplete="off" onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}