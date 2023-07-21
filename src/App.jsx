import React, { Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import Intro from './components/pages/Intro'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </Fragment>
  )
}

export default App