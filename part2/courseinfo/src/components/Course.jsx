const Header = ({ name }) => {
  console.log(name)
  return (
    <h1>{name}</h1>
  )
}

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
)}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => {
    console.log(sum, part)
    return sum + part.exercises}, 0)
  return (
    <p><strong>total of {total} exercises</strong></p>
)}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      {course.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
      <Total parts = {course.parts} />
    </div>
  )
}

export default Course