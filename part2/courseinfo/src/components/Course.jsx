const Course = ({ course }) => {
  return (
  <div>
    <h1>{course.name}</h1>
    <li>{course.parts}</li>
  </div>
)}

export default Course