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
        <Part>part={part.name} exercises={part.exercises}</Part>
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
      Number of exercises {prop.exercises1 + prop.exercises2 + prop.exercises3}
    </p>
  )
}

const App = () => {
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
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App