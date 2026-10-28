import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567', id: 1 },
    { name: 'Janja Garnbret', number: '12301230123', id: 2},
    { name: 'Mejdi Schalk', number: '32103210321', id: 3},
    { name: 'Magnus Midtboe', number: '23102310231', id: 4},

  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personsToShow = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        return alert(`${newName} is already added to phonebook`)
      }

    }
    
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={(event) => setFilter(event.target.value)} />
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} onNameChange={(event) => setNewName(event.target.value)} onNumberChange={(event) => setNewNumber(event.target.value)} onSubmit={addName}/>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map(person =>
          <Person key={person.name} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App