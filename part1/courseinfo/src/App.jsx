import { useState } from "react"

const Header = (prop) => {
  console.log(prop)
  return (
    <h1>
      {prop.course.name}
    </h1>
  )
}

const Content = (prop) => {
  return (
    <div>
      {prop.parts.map(part => (
        <Part key={part.name} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Part = (prop) => {
  return (
    <p>
      {prop.part}: {prop.exercises}
    </p>
  )
}

const Total = (prop) => {
  console.log(prop)
  return (
    <p>
      Number of exercises {prop.parts.reduce((sum, part) => sum + part.exercises, 0)}
    </p>
  )
}

const Display = ({ counter }) => {
  return (
    <div>
      {counter}
    </div>
  )
}

/*const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}*/

const History = (props) => {
  if (props.allClicks.length == 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick ={onClick}>{text}</button>

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left'/>
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App

/*const App = () => {
  const [ counter, setCounter ] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('zeroing, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter = {counter}/>
      <Button onClick={increaseByOne} text = 'Plus' />
      <Button onClick={decreaseByOne} text = 'Minus' />
      <Button onClick={setToZero} text = 'zero' />
    </div>
  )
}

export default App


/* <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      
const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      },
    ]
  }

      */