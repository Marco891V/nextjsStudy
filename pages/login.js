import { Row, Col, Container, Card, InputGroup, InputGroupText, CardBody, Label, Input } from 'reactstrap'
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
//import Button from '../componentscommon/buttonGithub'
//import Button2 from '../componentscommon/buttonGoogle'
//import Button3 from '../componentscommon/bottonSignIn'
import Button from '../components/common/button'
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';


export default function login() {
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const router = useRouter()
    
    const logIn = async () => {
        const url = 'https://staging-cart-api.shampora.com/api/v2/login/clients'

        if(email === ''){
            return alert('EMPTY EMAIL')
        }

        if(password === ''){
            return alert('EMPTY PASSWORD')
        }

        try{
            //axios.post = request in method post 
            //@param url = urlApi della richiesta + altri parametri che sono accettati 
            const response = await axios.post(url, { email: email, password: password })
            
            console.log(response.data)
            if(response.data) {
                if(response.data.success === false){
                    alert('ERROR')
                } else {
                    router.push('/')
                }
            }
        } catch (error){
            console.log("error", error)
            // show alert to user
        }

    } 

return (
    <Container
        className='my-5'
    >
        <Row>
            <Col md='6'
                className='mx-auto mx-auto col-md-6 col-lg-4 col-12'
            >
                <Card
                    className='mb-3'
                >
                    <h7 className='text-muted text-center mt-2 mb-2'>Sign in With</h7>
                    <Row className='mb-3 p-3'
                    >
                        <Col
                            className='text-end'
                        >
                            <Button 
                                title="Github"
                                color=''
                                icon={() => <FaGithub />}
                            />
                        </Col>
                        <Col className='text-start'
                        >
                            <Button 
                                color=''
                                title="Google"
                                icon={() => <FcGoogle />}
                            />
                        </Col>
                    </Row>  
                    <CardBody
                        className='text-center bg-light'
                    >
                        <p 
                            className='mt-5'
                        >
                            <h7 
                                className='text-muted text-center'
                            >
                                Or Sign in with credentials
                            </h7>
                        </p>

                        <Row
                            className='p-5'
                        >
                            <InputGroup className='mb-2'>
                                <InputGroupText>
                                    <FaEnvelope />
                                </InputGroupText> 
                                <Input 
                                    placeholder='Username' 
                                    value= {email}
                                    onChange={(event) => {setEmail(event.target.value)}}
                                /> 
                            </InputGroup>
                            <InputGroup className='mb-2'>
                                <InputGroupText>
                                    < FaLock />
                                </InputGroupText> 
                                <Input 
                                    placeholder='Password' 
                                    value= {password}
                                    onChange={(event) => {setPassword(event.target.value)}}
                                /> 
                            </InputGroup>
                            <Col
                                className='text-start text-muted form-group'
                            >
                                <Input type='checkbox' />
                                    <Label check>
                                        &nbsp; Remember Me
                                    </Label>
                            </Col>
                        </Row>
                        <Button 
                            title="Sign In"
                            color='primary'
                            onClick= {logIn}
                        />
                    </CardBody>
                </Card>     
                <Row xs={2}>
                    <Col className='text-muted'>
                        <p><small>Forgot password?</small></p>
                    </Col>
                    <Col className='text-muted text-end'>
                        <p><small>Create new account</small></p>
                    </Col>
                </Row>
            </Col>
        </Row>
            
    </Container>
    )
}