import styles from "./Header.module.scss"

export default function Header() {
  return (
    <header className={`container-fluid border-bottom ${styles.header}`}>
      <h1 className="m-0">Air</h1>
    </header>
  )
}