import * as React from "react"
import ComNavbar from '../components/comNavbar';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss'
import bannerimg from '../images/Home.png'



const IndexPage = () => {
  return (
    <body>

      {/* Navbar */}
      <ComNavbar/>

      {/* Banner */}<br/>
      <div className='banner'>
        <Container>
          <h2>
          Nos dedicamos a ofrecer una atención integral y especializada en <b>psicología clínica y peritaje forense</b>, así como servicios legales relacionados
            <br/><br/><Button variant="info" size='lg'>  Conócenos  </Button>{' '}
          </h2>
          <img src={bannerimg} alt="Home Banner"/>
        </Container>
      </div>

      {/* Beneficios */}
      <div className='beneficios'>
        <br/>
        <Container><br/>
          <h3>Nuestros beneficios</h3>
          <p>Podemos Ayudarte en la búsqueda del bienestar y una mejor salud mental a través de</p>
          <Row>
            <Col xs={6} lg={3}>
            <Card style={{ width: '240px' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="info">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col xs={6} lg={3}>
            <Card style={{ width: '240px' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="info">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col xs={6} lg={3}>
            <Card style={{ width: '240px' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="info">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col xs={6} lg={3}>
            <Card style={{ width: '240px' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="info">Go somewhere</Button>
              </Card.Body>
            </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Ofrecemos */}

      {/* Tipos de terapia */}

      {/* Profesionales */}

      {/* Formulario */}

      {/* Footer */}

    </body>
  )
}

export default IndexPage

export const Head = () => <title>Bienvenido a Centro Themis</title>
