import { Row, Col, Container, Card, InputGroup, InputGroupText, CardBody, Label, Input, Navbar } from 'reactstrap'
import NavbarBrand from '../components/common/navbar'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import react from 'react'
import { useState } from 'react'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  
  const [showInfo, setShowInfo] = useState (false)

  return (
    
  <Container fluid>
      <Navbar color='light'>
        <NavbarBrand />
      </Navbar>
    
      <Row className='text-center'>
        <Col className='col-12 p-3 text-muted'>
          23/12/2022
        </Col>
      </Row>
      <Row className='text-center'>
        <Col className='col-12 p-2'>
          <h5>Sto provando a diventare un Dev!</h5>
        </Col>
      </Row>
      <Row className='text-center'>
        <Col className='col-12 p-3'>
          Sviluppato da: <a href="">Marco Villani</a> 
        </Col>
      </Row>

      <Container>
        <Row className='text-center'>
        <img 
          alt='image' 
          src="https://images.ctfassets.net/hrltx12pl8hq/4ACnMj4WVSOZRZt0jHu9h5/1506f652bcd70f4dc3e88219fefea858/shutterstock_739595833-min.jpg?fit=fill&w=800&h=300"
          style={{
            maxheight: 100,
            maxwidth: 100}}
        />
        </Row>
        <Row className='p-3'>
          <Col className='col-md-8 col-sm-12 text-center p-4'>
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

            <h6 className='mt-4 mb-5'>
              YOU MAY ALSO LIKE
            </h6>
            <ul>
              <li 
                className='col-4 p-4' 
                style={{display:'inline'}}
              >
                <a 
                  href='' 
                  className='text-decoration-none'
                >
                  <img 
                    src="https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp" 
                    style={{
                    height: 60,
                    width: 60}}
                  /> 
                  <span>ciao qui ci sarà un articolo correlato</span>
                </a>
              </li>
              <li 
                className='col-4 p-4' 
                style={{display:'inline'}}
              >
                <a 
                  href='' 
                  className='text-decoration-none'
                >
                  <img 
                    src="https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp" 
                    style={{
                    height: 100,
                    width: 100}}
                  /> 
                  <span>ciao qui ci sarà un articolo correlato</span>
                </a>
              </li>
              <li 
                className='col-4 p-4' 
                style={{display:'inline'}}
              >
                <a 
                  href='' 
                  className='text-decoration-none'
                >
                  <img 
                    src="https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp" 
                    style={{
                    height: 60,
                    width: 60}}
                  /> 
                  <span>ciao qui ci sarà un articolo correlato</span>
                </a>
              </li>
            </ul>
          </Col>
          <Col className='col-md-4 col-sm-12 text-center p-4'>
            <h6>Qui la lista</h6>
            <div className='mb-3 text-start'>
              <a 
                href='' 
                className='text-decoration-none'
              >
                <img 
                  className='rounded-3'
                  src="https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp" 
                  style={{
                  height: 60,
                  width: 60}}
                /> 
                &nbsp; ciao qui ci sarà un articolo correlato
              </a>
            </div>
            <hr />
            <div className='mb-3 text-start'>
              <a 
                href='' 
                className='text-decoration-none'
              >
                <img 
                  className='rounded-3'
                  src="https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp" 
                  style={{
                  height: 60,
                  width: 60}}
                /> 
                &nbsp; ciao qui ci sarà un articolo correlato
              </a>
            </div>
            <hr />
            <div className='mb-3 text-start'>
              <a 
                href='' 
                className='text-decoration-none'
              >
                <img 
                  className='rounded-3'
                  src="https://www.flowe.com/wp-content/uploads/2021/11/blockchain-rett.webp" 
                  style={{
                  height: 60,
                  width: 60}}
                /> 
                &nbsp; ciao qui ci sarà un articolo correlato
              </a>
            </div>
          </Col>
        </Row>
      </Container>
  </Container>
    )
}
