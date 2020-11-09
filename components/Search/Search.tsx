import styles from "./Search.module.scss"

export default function Search() {
  return (
    <div className={`my-5 ${styles.search}`}>
      <input type="text" name="search" placeholder="Type a name..." autoComplete="off" />
    </div>
  )
}