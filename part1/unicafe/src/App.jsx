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

const StatisticLine = (props) => {
  console.log(props)
  const { text, value } = props
  return(
    <div>
      <p> {text}: {value} </p>
    </div>
  )
}

const Statistics = (props) => {
  console.log(props)
  if (props.total == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={props.total} />
      <StatisticLine text='average' value={(props.good - props.bad) / props.total} />
      <StatisticLine text='positive' value={(props.good / props.total) * 100 + ' %'} />
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  )
}

export default App