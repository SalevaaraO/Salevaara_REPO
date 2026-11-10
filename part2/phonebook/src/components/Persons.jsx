import Person from "./Person"

const Persons =  ({ persons, handleDelete }) => {
    return (
        <ul>
            {persons.map(person => {
                return <Person key={person.name} person={person} handleDelete={() => handleDelete(person.id)}/>
            })}
        </ul>
    )
}

export default Persons