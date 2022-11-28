import React from 'react'

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="container">
        <a href="https://facebook.com" className='facebook' target='_blank' title='https://facebook.com'><i className="fa fa-facebook"></i></a>
        <a href="https://facebook.com" className='twitter' target='_blank' title='https://facebook.com'><i className="fa fa-twitter"></i></a>
        <a href="https://facebook.com" className='instagram' target='_blank' title='https://facebook.com'><i className="fa fa-instagram"></i></a>
        <a href="https://facebook.com" className='youtube' target='_blank' title='https://facebook.com'><i className="fa fa-youtube"></i></a>
        <a href="https://facebook.com" className='linkedin' target='_blank' title='https://facebook.com'><i className="fa fa-linkedin"></i></a>
      </div>
      <button className='button-primary'>subscribe</button>
    </div>
  )
}
