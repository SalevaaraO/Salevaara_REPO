import { useState } from 'react'

const Header = (prop) => {
  return (
    <h1>
      {prop.text}
    </h1>
  )
}

const Button = (props) => {
  console.log(props)
  const { onClick, text } = props
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const total = good + neutral + bad

  
  return (
    <div>
      <Header text='give feedback'/>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header text='statistics' />
      <p>
        good {good} <br />
        neutral {neutral} <br />
        bad {bad} <br />
        all {total} <br />
        average {(good - bad) / total} <br />
        positive {(good / total) * 100}%
      </p>
    </div>
  )
}

export default App