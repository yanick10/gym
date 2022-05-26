import React from 'react'
import Activite from '../components/layout/activite'
import Defile from '../components/layout/defile'
import Footer from '../components/layout/footer'
import Header from '../components/layout/header'
import Offre from '../components/layout/offre'
import Seance from '../components/layout/seance'

export default function Home() {
  return (
    <>
      <Header />
      <Defile />
      <Activite />
      <Seance />
      <Offre />
      <Footer />
    </>
  )
}


