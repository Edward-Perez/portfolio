import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import Typewriter from 'typewriter-effect';

const Header = () => (
  <Jumbotron  className='text-center bg-transparent vh-75' fluid>
    <Row className='justify-content-center'>
      <Col sm={12} className='pt-4'>
        {/* <h1 className='py-4'>I'm Edward</h1> */}
        <h3 className='pt-4'>Welcome,</h3>
        <h3 className=''>my name is Edward.</h3>
        <h3 className=''>I have experience with</h3>
      </Col>
      <Col sm={12} md={6}>
        <Container className='pt-4'>
          <Typewriter
            options={{
              strings: [
                'Javascript',
                'REST API',
                'Postman',
                'Express', 
                'GraphQL', 
                'SQL',  
                'Sequelize',
                'Nodejs',  
                'React',
                'Axios',
                'MongoDB',
                'Gatsby',
                'Git',
                'Pug',
                'Bootstrap'
              ],
              cursor: '',
              autoStart: true,
              loop: true,
              wrapperClassName: 'h1 text-primary font-weight-bold'
            }}
            onInit={(typewriter) => {
              typewriter.typeString()
                .pauseFor(300)
                .deleteAll()
                .start();
            }}
          />
        </Container>
      </Col>
    </Row>
  </Jumbotron>
)

export default Header

