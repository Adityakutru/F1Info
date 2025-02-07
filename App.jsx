import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Bgimage from './components/bgimage/bgimage'
import Drivers from './components/drivers/Drivers'
import Title from './components/title/Title'
import Teams from './components/teams/Teams'
import Championship from './components/championship/Championship'
import History from './components/History/History'
import Footer from './components/footer/Footer'
 
const App = () => {
  return (
    <div>
      <Navbar/>
      <Bgimage/>
      <div className="container">
        <Title/>
        <Drivers/>
        <Teams/>
        </div>
        <Championship/>
        <History/>
        <Footer/>
          </div>

  )
}

export default App
