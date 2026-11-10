import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
    .then(response => {
      console.log('response fulfilled')
      setPersons(response.data)
    })
  }, [])
  
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
    axios.post('http://localhost:3001/persons', nameObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={(event) => setFilter(event.target.value)} />
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} onNameChange={(event) => setNewName(event.target.value)} onNumberChange={(event) => setNewNumber(event.target.value)} onSubmit={addName}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App