import { Row, Col, Container, Card, InputGroup, InputGroupText, CardBody, Label, Input } from 'reactstrap'
import Button from '../components/common/button'
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router'; // per il redirect delle routes


export default function signUpage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const signUp = async () => {
        const url = 'https://staging-cart-api.shampora.com/api/clients/create'

        //costrutto per gestire gli errori
        try {
             //axios.post = request in method post 
            //@param url = urlApi della richiesta + altri parametri che sono accettati 
            const response = await axios.post(url, { saloonId: 1, promotion: false, client: { email: email, password: password, name: name } })
            console.log(response.data)

            if(response.data) {
                router.push('/login')
            }
        } catch (error) {
            console.log("error", error)
            // show alert to user
        }
        
    }

return (
    <Container className='my-5'>
        <Row>
            <Col className='mx-auto mx-auto col-md-6 col-12'>
                <Card className='mb-3'>
                    <span className='text-muted text-center mt-2 mb-2'><small>Sign in With</small></span>
                    <Row className='mb-3 p-3'>
                        <Col className='text-end'>
                            <Button 
                                title="Github"
                                color='#fefefe'
                                icon={() => <FaGithub />}
                            />
                        </Col>
                        <Col className='text-start'
                        >
                            <Button 
                                color='#fefefe'
                                title="Google"
                                icon={() => <FcGoogle />}
                            />
                        </Col>
                    </Row>  
                    <CardBody className='text-center bg-light'>
                        <p className='mt-3'>
                            <span className='text-muted text-center'>
                               <small> Or Sign in with credentials </small>
                            </span>
                        </p>

                        <Row className='p-3'>
                            <InputGroup className='mb-3'>
                                <InputGroupText>
                                    <FaUser />
                                </InputGroupText> 
                                <Input 
                                    placeholder='Username' 
                                    value={name}
                                    onChange={(event) => {setName(event.target.value)}} //salva i digit nella variabile name
                                /> 
                            </InputGroup>
                            <InputGroup className='mb-3'>
                                <InputGroupText>
                                    <FaEnvelope />
                                </InputGroupText> 
                                <Input 
                                    placeholder='Email' 
                                    value={email}
                                    onChange={(event) => {setEmail(event.target.value)}}
                                /> 
                            </InputGroup>
                            <InputGroup className='mb-5'>
                                <InputGroupText>
                                    < FaLock />
                                </InputGroupText> 
                                <Input 
                                    placeholder='Password' 
                                    value={password}
                                    onChange={(event) => {setPassword(event.target.value)}}
                                /> 
                            </InputGroup>
                            <Col className='text-start text-muted form-group p-4' >
                                <Input type='checkbox' />
                                    <Label check>
                                        &nbsp; I agree with the Privacy Policy
                                    </Label>
                            </Col>
                        </Row>
                        <Button 
                            title="Create Account "
                            color='primary'
                            onClick= {signUp}
                        />
                    </CardBody>
                </Card>     
            </Col>
        </Row>
            
    </Container>
    )
}