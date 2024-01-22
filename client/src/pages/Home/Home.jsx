import React from 'react'
import Header from '../../components/Header/Header'
import Pro from '../../components/Products/Pro'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <Header></Header>
    <Pro></Pro>
    </>
  )
}

export default Home
