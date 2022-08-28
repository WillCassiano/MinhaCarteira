import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { ContainerPadrao } from './styles.js'
import Header from '../../components/Header';

const conta = () => {
    return (
        <>
            <Header />
            <ContainerPadrao>
                <Form style={{ textAlign: 'center'}}>
                <Form.Label style={{ color: '#fafafa', fontSize: 25}}>Cadastro de contas</Form.Label>
                    <Row>
                        <Col>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <Button style={{marginTop: 35}} variant="primary" size="lg" >Salvar</Button>{' '}
                </Form>
            </ContainerPadrao>
        </>
    );
}
export default conta;