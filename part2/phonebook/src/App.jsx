import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Notification from './components/Notification'
import Error from './components/Error'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [notifMessage, setNotifMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
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

    const existing = persons.find(p => p.name === newName)

    if (existing) {
      if (window.confirm(`${existing.name} is already added to phonebook, replace the old number with a new one?`)) {
        const changedNumber = {...existing, number: newNumber}
        personService
        .update(existing.id, changedNumber)
        .then(returnedPerson => {
          setPersons(persons.map(i => i.id !== existing.id ? i : returnedPerson))
          setNewName('')
          setNewNumber('')
          setNotifMessage(`New number for ${existing.name}`)
          setTimeout(() => {
            setNotifMessage(null)
          }, 5000)
        }).catch(error => {
          setErrorMessage(`Information of ${existing.name} has already been removed from server`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setPersons(persons.filter(p => p.id !== existing.id))
        })
      }
      return
    }

    personService
    .create(nameObject)
    .then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName('')
      setNewNumber('')
      setNotifMessage(`Added ${newName}`)
      setTimeout(() => {
        setNotifMessage(null)
      }, 5000)
    })
  }

  const handleDelete = id => {
    const person = persons.find(n => n.id === id)
    
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
      .onDelete(id)
      .then(() => {
        setPersons(persons.filter(i => i.id !== id))
        setNotifMessage(`${person.name} has been succesfully deleted`)
        setTimeout(() => {
          setNotifMessage(null)
        }, 5000)
      }).catch(error => {
        setErrorMessage(
          `Information of ${person.name} has already been removed from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setPersons(persons.filter(p => p.id !== id))
      })

    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notifMessage}/>
      <Error message = {errorMessage} />
      <Filter filter={filter} onChange={(event) => setFilter(event.target.value)} />
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} onNameChange={(event) => setNewName(event.target.value)} onNumberChange={(event) => setNewNumber(event.target.value)} onSubmit={addName}/>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App