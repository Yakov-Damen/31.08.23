import { useState } from 'react'
import './App.css'
import Text from './Text'
import Card from './Card'
import Select from './Select'

function App(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const [color, setColor] = useState('green')

  const toggleHandler = (): void => {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <Card color={color}/>
      <Select setColor = {setColor} />
      {isVisible?<Text/>:null}
        <button onClick={toggleHandler}>
          Toggle Text
        </button>
      
    </>
  )
}

export default App
