import { Row, Col, Container } from 'reactstrap'
import Button from '../componentscommon/button'
import Button2 from '../componentscommon/button2'
import Input from '../componentscommon/input'

export default function exGoogle() {

return (
        <Container>
            <Row xs='12'
            className = 'mb-3'>

                <Input /> 
            
            </Row>

            <Row xs='12'>
                <Col xs='6'
                className = 'text-center'>
                    <Button />
                </Col>

                <Col xs='6'
                className = 'text-center'>
                    <Button2  />
                </Col>

            </Row>
        </Container>
    )
}