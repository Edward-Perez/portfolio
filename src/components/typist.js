import React from "react"
import Typewriter from 'typewriter-effect'

const Typist = () => (
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
  />
)

export default Typist 