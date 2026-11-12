import { useState, useEffect } from "react"
import Filter from './components/Filter'
import getAll from './services/countries'
import Results from "./components/Results"

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getAll().then(initialCountries => {
      setCountries(initialCountries)
    })
  }, [])
  console.log(countries.length)

  const countriesToShow = countries.filter(country => 
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <Filter filter={filter} onChange={(event) => setFilter(event.target.value)} />
        <Results countries = {countriesToShow} />
    </div>
  )
}


export default App