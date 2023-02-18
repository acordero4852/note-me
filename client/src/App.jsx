import { Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Heading>Hello World</Heading>} />
      </Routes>
    </>
  )
}

export default App
