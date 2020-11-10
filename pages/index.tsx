import { ConnectedProps, connect } from 'react-redux'

import Head from 'next/head'
import { FixedSizeList as List } from 'react-window'
import Person from '../models/Person'
import PersonInfo from '../components/PersonInfo/PersonInfo'
import Search from '../components/Search/Search'
import fs from 'fs'
import { loadPersons } from '../store/persons/actions'
import path from 'path'
import styles from '../styles/Home.module.scss'
import { useEffect } from 'react'

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'mocks/persons.json')
  const persons = await fs.readFileSync(filePath, 'utf8')

  return { 
    props: { persons },
    revalidate: 1
  }
}

const ListRenderer = ({index, isScrolling, style, data}) => (
  isScrolling ?
  <div className="col-12 d-flex" key={index} style={style}>
    <div className={styles.skeleton}></div>
    <div className={`d-flex align-items-center justify-content-center ${styles.spinner}`}>
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div> :
  <div className="col-12" key={index} style={style}>
    <PersonInfo person={data[index]} />
  </div>
)

const Home: React.FC<PropsFromRedux> = ({persons, loadPersons}) => {
  useEffect(() => {
    loadPersons();
  }, [loadPersons]);

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
        <List
          itemData={persons}
          itemCount={persons.length}
          height={450}
          width={576}
          itemSize={140}
          useIsScrolling>
          {ListRenderer}
        </List>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  persons: state.persons.persons
});

const mapDispatchToProps = {
  loadPersons
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Home);

