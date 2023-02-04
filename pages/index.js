import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import styles from '../styles/Home.module.css'
import { Row, Col, Container, Nav, Navbar } from 'reactstrap'
import Link from "next/link"
import RelatedArticle from '../components/blog/RelatedArticle'
import ReadArticle from '../components/blog/ReadArticle'
import SectionNav from '../components/blog/NavSection'
import Sliders from '../components/blog/Caroseul'

export default function Home() {
  const router = useRouter()
  const categorySlug = router.query?.slug

  const [articles, setArticles] = useState([])
  const [readings, setReadings] = useState([])

  const getArticles = async(categories, type) => {
    const url = `http://api.mediastack.com/v1/news?access_key=fa24fa32b64681604098ddd2cc93455f&categories=${categories}&countries=it&limit=4`
    const res = await axios.get(url)

    const jsonRes = res.data
    console.log("res", res)

    if(type === 'articles') {
      setArticles(jsonRes.data)
    } else {
      setReadings(jsonRes.data)
    }
  }

  const sections = [
    {
      id: '1',
      title: 'General',
      slug: 'general',
    },
    {
      id: '2',
      title: 'Business',
      slug: 'business',
    },
    {
      id: '3',
      title: 'Entertainment',
      slug: 'entertainment',
    },
    {
      id: '4',
      title: 'Health',
      slug: 'health',
    },
    {
      id: '5',
      title: 'Science',
      slug: 'science',
    },
    {
      id: '6',
      title: 'Sports',
      slug: 'sports',
    },
    {
      id: '7',
      title: 'Technology',
      slug: 'technology',
    },
  ]

  //HOOK DI REACT
  // L'hook viene chiamato ogni volta che le "dipendenze" cambiano
  useEffect(() => {
    getArticles('general', 'articles')
    getArticles('sports', 'readings')
  }, []) // <= Array di dipendenze, se vuoto questo hook viene chiamato solo la prima volta al render della pagina

  return (

    <Container fluid>
      <Row>
        <Col sm='12' className='text-center my-5'>
          <h4>{categorySlug}</h4>
        </Col>
      </Row>
      <Row>
        <Navbar color='light' className='border' >
          <Nav>
            {sections.map((section) => {
              return (
                <SectionNav
                  key={section.id}
                  section={section}
                  activeElement={categorySlug}
                />
              )
            })}
            
          </Nav>
          <div className='ms-auto'>
              <Link href={'newArticles'}>
                Aggiungi Articolo
              </Link>
            </div>
        </Navbar>
      </Row>
      <Container>
        <Row className='my-3 text-center'>
            <Sliders />
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className='p-3'>
          <Col md="8" sm="12" className='text-center p-4'>
            {readings.map((reading) => {
              return (
                <ReadArticle
                  key={reading.id}
                  reading={reading}
                  type='row'
                />
                )
              })
            }
          </Col>
          <Col md="4" sm="12" className='p-4'>
            <h6>Qui la lista</h6>
            {articles.map((article) => {
              return (
                <RelatedArticle
                  key={article.id}
                  article={article}
                  type='row'
                />
              )
            })}
          </Col>
        </Row>
      </Container>
      <Row className='p-3'>
        <h6 className='text-center mt-2'>
          LA PARTE INSTAGRAM
        </h6>
        <Col md="6" sm="12" className='text-star p-4 g-2'>
          <img className={styles.center} 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQyV8aphm8r7ZW9tOWS8YZzMt-YSuUYUjnw&usqp=CAU">
          </img>
          <p className='mt-3'>Ciao a tutti da pluto!</p>
        </Col>
        <Col md="6" sm="12" className='p-4'>
          {articles.map((article) => {
            return (
              <RelatedArticle
                key={article.id}
                article={article}
                type='row'
              />
            )
          })}
        </Col>
      </Row>
      <hr />
      <Row className='p-3'>
        <Col sm="12" className='text-center p-4 text-muted'>
          <span>© 2023 MV Sho | P.Iva 123456789 | Via CiProvo 17, Pomezia 00071 (RM)</span>
        </Col>
      </Row>
    </Container>
  )
}

