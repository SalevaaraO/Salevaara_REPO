import Person from "./Person"

const Persons =  ({ persons }) => {
    return (
        <ul>
            {persons.map(person => {
                return <Person key={person.name} person={person}/>
            })}
        </ul>
    )
}

export default Persons