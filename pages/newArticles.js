import { Form, FormGroup, Label, Input, Button, Container, Row, Col } from "reactstrap"
import GfgDatePicker from '../components/common/datePicker'
import { FileUploader } from 'react-drag-drop-files'
import { useState } from 'react'
import { useRouter } from "next/router"
import axios from 'axios';
import dynamic from "next/dynamic"

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})



export default function newArticle() {
    const router = useRouter()
    const [titolo, setTitolo] = useState('')
    const [contentArticle, setContentArticle] = useState('')
    const [descrizione, setDescrizione] = useState('')
    const [startDate, setStartDate] = useState(new Date());
    const [autore, setAutore] = useState('')
    const [image, setImage] = useState('')
    const handleChange = file => {
        setImage(file);
      };

    const addNewArticle = async (action) => {
        let url = "https:\\urldidoveinviarelapost"

        if(action === 'DRAFT') {
            url = 'nuova url per draft'
        }

        try {
            //axios.post = request in method post 
            //@param url = urlApi della richiesta + altri parametri che sono accettati 

            const body = { aticle: { titolo: titolo, contentArticle: contentArticle, descrizione: descrizione, autore: autore, startDate: startDate, image: image, draft: action === 'DRAFT' } }

            return console.log('body', body)

            const response = await axios.post(url, body)
            console.log(response.data)

            if (response.data) {
                router.push('/index')
            }
        } catch (error) {
            console.log("error", error)
            // show alert to user
        }
    }

    return (
        <Container>
            <Row className='m-3'>
                <Col sm="12" className='text-center text-bg-dark'>
                    NUOVO ARTICOLO
                </Col>
            </Row>
            <Row className="m-5">
                <Form>
                    <FormGroup>
                        <Label for="titolo">
                            TITOLO
                        </Label>
                        <Input
                            id="titolo"
                            name="titolo"
                            placeholder="titolo articolo"
                            type="text"
                            value={titolo}
                            onChange={(event) => { setTitolo(event.target.value) }} //salva il testo nella variabile {}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="articolo">
                            Inserisci il tuo articolo
                        </Label>
                        <QuillNoSSRWrapper 
                            theme="snow"
                            onChange={setContentArticle}
                        />
                    </FormGroup>
                    <hr />
                    <FormGroup>
                        <Label for="autore">
                            AUTORE
                        </Label>
                        <Input
                            id="autore"
                            name="autore"
                            placeholder="autore articolo"
                            type="text"
                            value={autore}
                            onChange={(event) => { setAutore(event.target.value) }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="descrizione">
                            Descrizione
                        </Label>
                        <Input
                            id="descrizione"
                            name="descrizione"
                            type="textarea"
                            value={descrizione}
                            onChange={(event) => { setDescrizione(event.target.value) }}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dataArticolo">
                            Data Articolo
                        </Label>
                        <GfgDatePicker 
                            selected= {startDate} 
                            onChange= {(date) => setStartDate(date)}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="caricaFile">
                            Carica la tua immagine
                        </Label>
                        <FileUploader 
                            handleChange= {handleChange} 
                            value={image} 
                        />
                    </FormGroup>
                    <hr />
                    <Row>
                        <Col md='6' sm='12'>
                            <Button
                                className="btn-success"
                                onClick={() => addNewArticle('ADD')}
                                value="0"
                            >
                                Aggiungi il nuovo articolo
                            </Button>
                        </Col>
                        <Col md='6' sm='12' className="text-end">
                            <Button
                                onClick={() => addNewArticle('DRAFT')}
                                value="1"
                            >
                                Salva bozza
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Container>
    )


}