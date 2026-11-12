import Country from './Country'

const Results = ({ countries, onShow }) => {
    if (countries.length > 10) {
        return (
            <p>
                Too many matches, specify another filter
            </p>
        )
    }

    if (countries.length > 1) {
        return (
            <ul>
                {countries.map(country => {
                    return (
                    <li key={country.name.common}>
                        {country.name.common}
                        <button onClick={() => onShow(country.name.common)}>
                            show
                        </button>
                    </li> 
                    )
                })}
            </ul>
        )
    }

    if (countries.length === 1) {
        return <Country country={countries[0]} />
    }
    return null
}

export default Results