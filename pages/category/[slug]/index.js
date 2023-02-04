import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Row, Col, Container, Nav, Navbar } from 'reactstrap'
import Link from "next/link"
import RelatedArticle from '../../../components/blog/RelatedArticle'
import ReadArticle from '../../../components/blog/ReadArticle'
import SectionNav from '../../../components/blog/NavSection'

export default function Home() {
  const router = useRouter()
  const categorySlug = router.query?.slug

  const [articles, setArticles] = useState([])
  const [relatedArticles, setRelatedArticles] = useState([])

  const getArticles = async(categories, type) => {
    const url = `http://api.mediastack.com/v1/news?access_key=fa24fa32b64681604098ddd2cc93455f&categories=${categories}&countries=it&limit=4`
    const res = await axios.get(url)

    const jsonRes = res.data
    if(type == 'categoryArticles') {
      setArticles(jsonRes.data)
    } else {
      setRelatedArticles(jsonRes.data)
    }
    
  }

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

  const currentSection = sections.find((s) => s.slug === categorySlug)

  useEffect(() => {
    if(categorySlug) {
      getArticles(categorySlug, 'categoryArticles')
    }
    
  }, [categorySlug])

  useEffect(() => {
    getArticles('sports', 'relatedArticles')
  }, [])

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
                  key= {section.id}
                  section= {section}
                  activeElement= {categorySlug}
                />
              )
            })}
            <Link href={'../pages/newArticles'}>
              Aggiungi Articolo
            </Link>
          </Nav>
        </Navbar>
      </Row>
      <Container>
        <Row className='text-center'>
          <Col sm="12" className='p-3 my-4'>
            <h4 className='mb-3'>
              Qui ci andrà introduzione
            </h4>
            <p className='text-start'>
              Come suggerisce il termine, la “tecnologia” rappresenta la raccolta ideale, o il punto di arrivo attuale, delle nostre conoscenze sulle materie tecniche.
              Quindi riguarda da vicino i processi di trasformazione delle materie prime, l’assemblaggio dei prodotti, la produzione di strumenti elettronici.
              Ogni giorno fai affidamento sulla tecnologia: per informarti, prenotare un biglietto, guardare un programma televisivo, fare un esame medico approfondito, ritirare i soldi al bancomat, scattare una foto e condividerla.
            </p>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row className='p-3'>
          <Col md="8" sm="12" className='text-center p-4'>
            {articles.map((article) => {
              return (
                <ReadArticle
                  key={article.id}
                  reading={article}
                  type='row'
                />
              )
            })
            }
          </Col>
          <Col md="4" sm="12" className='p-4'>
            <h6>Qui la lista</h6>
            {relatedArticles.map((article) => {
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
        <Col sm="12" className='text-center p-4'>
          <h6 className='mt-4 mb-5'>
            LA PARTE INSTAGRAM
          </h6>
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
