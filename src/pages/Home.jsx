import React from 'react'
import Main from '../components/Main'
import Categories from '../components/Categories'
import About from '../components/About'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Main />
        <Categories title='Category'/>
        <About />
        <Footer />
    </div>
  )
}

export default Home