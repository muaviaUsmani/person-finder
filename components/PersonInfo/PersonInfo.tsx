import Person from "../../models/Person"
import styles from "./PersonInfo.module.scss"

type PersonInfoProps = {
  person: Person
}

export default function PersonInfo({ person }: PersonInfoProps) {
  return (
    <div className={`d-flex ${styles.person}`}>
      <img src={person.avatar} className="image-thumbnail" width="125" />
      <div className={`ml-2 pt-1 d-flex flex-column`}>
        <h2 className="mb-3">{person.name}</h2>
        <p>{person.description}</p>
      </div>
    </div>
  )
}