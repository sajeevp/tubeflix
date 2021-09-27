import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Header from './layouts/Header'
import Content from './layouts/Content'
import Footer from './layouts/Footer'

ReactDOM.render(
  <React.StrictMode>
    <div className='bg-black min-h-screen'>
      <Header />
      <Content />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)
