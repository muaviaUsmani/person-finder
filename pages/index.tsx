import Head from 'next/head';
import Person from '../models/Person';
import PersonInfo from '../components/PersonInfo/PersonInfo'
import Search from '../components/Search/Search'
import persons from '../mocks/persons.json';
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Person Finder | Air</title>
      </Head>
      <div className="row">
        <div className="col-12">
          <h1 className={`display-4 ${styles.pageTitle}`}>The Person Finder</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="mb-0">
            If you just can't find someone and need to know what they look like, you've come to the right place! Just type the name of the person you're looking for into the search box!
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <Search />
        </div>
      </div>

      <div className="row">
        {
          persons.map((person: Person) => (
            <div className="col-12 mb-4" key={person.id}>
              <PersonInfo person={person} />
            </div>
          ))
        }
        <div className="col-12">
          
        </div>
      </div>
    </div>
  )
}
