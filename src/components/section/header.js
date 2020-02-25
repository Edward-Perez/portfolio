import React, { useState, useLayoutEffect } from 'react'
import Typist from '../typist'

const Header = () => {
  const [child, setChild ] = useState(null);

  useLayoutEffect(() => {
    setChild(<Typist />);
  },[]);

  return (
    <div className='jumbotron jumbotron-fluid text-center bg-transparent vh-75'>
      <div className='row py-4 mt-n4 justify-content-center'>
        <div className='col-sm-12 pt-4'>
          <h3 className='pt-4'>Welcome,</h3>
          <h3>my name is Edward.</h3>
          <h3>I have experience with</h3>
        </div>
        <div className='col-sm-12 pb-4'>
          <div className='container pt-3'>
            { child }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header