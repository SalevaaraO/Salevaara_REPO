const Header = ({ name }) => <h1>{name}</h1>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

/* const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p><strong>total of {total} exercises</strong></p>
} */

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      {course.parts.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </div>
  )
}

export default Course