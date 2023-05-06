import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Output({output}){
    return (
        <>
            <Container fluid>
                <Row>
                    <Col xs sm={8}>
                        Console
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="2">
                        Console
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Col xs sm={8}>
                        Console
                    </Col>
                </Row>
                <Row>
                    <Col xs lg="2">
                        {output}
                    </Col>
                </Row>
            </Container>
        </>
    );
}