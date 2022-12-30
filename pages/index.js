import { useState } from 'react'
import { useRouter } from 'next/router'
import { Row, Col, Container, Card, InputGroup, InputGroupText, CardBody, Label, Input } from 'reactstrap'
import Navbar from '../components/common/navbar'
import RelatedArticle from '../components/blog/RelatedArticle'

export default function Home() {
  const router = useRouter()
  const [showInfo, setShowInfo] = useState(false)

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
    {
      id: '1s34',
      image: 'https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp',
      title: 'ciao qui ci sarà un articolo correlato 1'
    },
    {
      id: '1w36',
      image: 'https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp',
      title: 'ciao qui ci sarà un articolo correlato 2'
    },
    {
      id: '1w324',
      image: 'https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp',
      title: 'ciao qui ci sarà un articolo correlato 3'
    },
    {
      id: '1u324',
      image: 'https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp',
      title: 'ciao qui ci sarà un articolo correlato 3'
    },
  ]

  return (

    <Container fluid>
      <Navbar />
      <Row className='text-center'>
        <Col sm="12" className='p-3 text-muted'>
          23/12/2022
        </Col>
      </Row>
      <Row className='text-center'>
        <Col sm="12" className='p-2'>
          <h5>Sto provando a diventare un Dev!</h5>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col sm="12" className='p-3'>
          Sviluppato da: <a href="">Marco Villani</a>
        </Col>
      </Row>
      <Container>
        <Row className='text-center'>
          <img
            alt='image'
            src="https://images.ctfassets.net/hrltx12pl8hq/4ACnMj4WVSOZRZt0jHu9h5/1506f652bcd70f4dc3e88219fefea858/shutterstock_739595833-min.jpg?fit=fill&w=800&h=300"
            style={{
              width: '100%'
            }}
          />
        </Row>
        <Row className='p-3'>
          <Col md="8" sm="12" className='text-center p-4'>
            <h4 className='mb-3'>
              Qui ci andrà l'articolo
            </h4>
            <p className='text-start'>
              Come suggerisce il termine, la “tecnologia” rappresenta la raccolta ideale, o il punto di arrivo attuale, delle nostre conoscenze sulle materie tecniche.
              Quindi riguarda da vicino i processi di trasformazione delle materie prime, l’assemblaggio dei prodotti, la produzione di strumenti elettronici.
              Ogni giorno fai affidamento sulla tecnologia: per informarti, prenotare un biglietto, guardare un programma televisivo, fare un esame medico approfondito, ritirare i soldi al bancomat, scattare una foto e condividerla.
              La tecnologia non fa altro che rendere semplici dei processi che tramite il semplice impiego della manualità e dell’intelletto non sarebbero possibili, o sarebbero troppo costosi.
              La tecnologia facilita la nostra vita, ma pone degli importanti interrogativi, dal momento che può riguardare aspetti sensibili della nostra vita quali la libertà personale, il diritto alla privacy, il senso della morale.
            </p>
            <p className='text-start'>
              L’esempio più macroscopico è quello della tecnologia missilistica.
              Essa è stata inventata per colpire i nemici della Germania, alla fine della Seconda Guerra Mondiale. Ma gli ingegneri che guidavano quel progetto (razzi V1 e V2) poi sono stati fatti prigionieri da USA e URSS. Le loro idee e le loro invenzioni sono state impiegate sia in ambito militare, per costruire i missili da crociera armati con testate nucleari, sia in ambito civile per realizzare dei vettori di lancio per le missioni spaziali.
              La tecnologia usata per colpire Londra, durante la seconda guerra mondiale, è la stessa impiegata per andare sulla Luna.
              Dipende molto dall’uso che se ne fa. È anche molto ambiguo pensare al fatto che la tecnologia tende a fare passe da gigante in occasione delle guerre.
            </p>
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
        <Row className='p-3'>
          <Col md="8" sm="12" className='text-center p-4'>
            <h6 className='mt-4 mb-5'>
              YOU MAY ALSO LIKE
            </h6>
            <div className='d-flex flex-wrap'>
              {articles.map((article) => {
                return (
                  <RelatedArticle
                    key={article.id}
                    article={article}
                    type='column'
                  />
                )
              })}
            </div>
            
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
