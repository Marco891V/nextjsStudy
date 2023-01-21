import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import { Row, Col, Container, Nav, Navbar } from 'reactstrap'
import Link from "next/link"
import RelatedArticle from '../components/blog/RelatedArticle'
import ReadArticle from '../components/blog/PrincipalArticle'
import SectionNav from '../components/blog/NavSection'
import Sliders from '../components/blog/Caroseul'

export default function Home() {
  const router = useRouter()
  const categorySlug = router.query?.slug

  const articles = [
    {
      id: '134',
      image: 'https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp',
      title: 'ciao qui ci sarà un articolo correlato 1'
    },
    {
      id: '136',
      image: 'https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp',
      title: 'ciao qui ci sarà un articolo correlato 2'
    },
    {
      id: '1324',
      image: 'https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp',
      title: 'ciao qui ci sarà un articolo correlato 3'
    },
    {
      id: '13f24',
      image: 'https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp',
      title: 'ciao qui ci sarà un articolo correlato 3'
    },
  ]

  const readings = [
    {
      id: '1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQyV8aphm8r7ZW9tOWS8YZzMt-YSuUYUjnw&usqp=CAU',
      title: 'ciao qui ci sarà un articolo 1',
      date: '15/01/2023',
      article: 'ciao sta cosa degli array e map non la sto capendo proprio benissimo'
    },
    {
      id: '2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQyV8aphm8r7ZW9tOWS8YZzMt-YSuUYUjnw&usqp=CAU',
      title: 'ciao qui ci sarà un articolo 2',
      date: '15/10/2023',
      article: 'ciao sta cosa degli array e map non la sto capendo proprio benissimo'
    },
    {
      id: '3',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQyV8aphm8r7ZW9tOWS8YZzMt-YSuUYUjnw&usqp=CAU',
      title: 'ciao qui ci sarà un articolo 3',
      date: '15/02/2023',
      article: 'ciao sta cosa degli array e map non la sto capendo proprio benissimo'
    },
    {
      id: '4',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQyV8aphm8r7ZW9tOWS8YZzMt-YSuUYUjnw&usqp=CAU',
      title: 'ciao qui ci sarà un articolo 4',
      date: '15/11/2023',
      article: 'ciao sta cosa degli array e map non la sto capendo proprio benissimo'
    },
  ]

  const sections = [
    {
      id: '1',
      title: 'Sezione 1',
      slug: 'pippo',
      articles: [
        {
          id: '1',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQyV8aphm8r7ZW9tOWS8YZzMt-YSuUYUjnw&usqp=CAU',
          title: 'ciao qui ci sarà un articolo 21',
          date: '15/01/2023',
          article: 'ciao sta cosa degli array e map non la sto capendo proprio benissimo'
        },
      ]
    },
    {
      id: '2',
      title: 'Sezione 2',
      slug: 'pluto',
      articles: [
        {
          id: '1',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQyV8aphm8r7ZW9tOWS8YZzMt-YSuUYUjnw&usqp=CAU',
          title: 'ciao qui ci sarà un articolo 14',
          date: '15/01/2023',
          article: 'ciao sta cosa degli array e map non la sto capendo proprio benissimo'
        },
      ]
    },
    {
      id: '3',
      title: 'Sezione 3',
      slug: 'hello',
      articles: [
        {
          id: '1',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQyV8aphm8r7ZW9tOWS8YZzMt-YSuUYUjnw&usqp=CAU',
          title: 'ciao qui ci sarà un articolo 1',
          date: '15/01/2023',
          article: 'ciao sta cosa degli array e map non la sto capendo proprio benissimo'
        },
      ]
    },
    {
      id: '4',
      title: 'Sezione 4',
      slug: 'ciao',
      articles: [
        {
          id: '1',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQyV8aphm8r7ZW9tOWS8YZzMt-YSuUYUjnw&usqp=CAU',
          title: 'ciao qui ci sarà un articolo 2',
          date: '15/01/2023',
          article: 'ciao sta cosa degli array e map non la sto capendo proprio benissimo'
        },
      ]
    },
  ]

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
            <Link href={'newArticles'}>
              Aggiungi Articolo
            </Link>
          </Nav>
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

