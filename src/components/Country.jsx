import React from 'react';
import worldmap from '../assests/worldmap.jpeg'
import axios from 'axios'

const imgStyle = {
    height:'60px',
    width: '90px'
}

const countryStyle = {
    border:'2px solid black',
    margin:'20px',
    
}

class Country extends React.Component {
    constructor() {
        super()
        this.state = {
            countries: []
        }
    }
    componentDidMount() {

        this.getCountries()
    }
    getCountries = async () => {
        try {
        const countries = await axios('https://5dd2c3316625890014a6e05e.mockapi.io/Flags')
        // console.log(countries.data)
        this.setState({ countries: countries.data })
        } catch(error) {
            console.error(error)
        }
    }

    render() {
        // console.log('this is my render',this.state.countries)



        return (
            <div className='Country'>

                <div className="WorldMap">
                    <img src={worldmap} alt="counteyr" />
                </div>
                {
                    this.state.countries.map(country => (

                        <div style={countryStyle} key={country.id}>
                            {/* {this.state.countries.country_Flag.map(country=>} */}
                            <img style={imgStyle} src={country.country_Flag} alt={`Flag of ${country.name_Of_Country}`}/>
                             <p>{country.name_Of_Country}</p> 
                             <p>{country.main_Language}</p>
                             <p>{country.fun_Fact}</p>
                          
                        </div>

                    ))}
                {/* <div>
                    <div><img src="worldmap.jpeg" alt='country' />

                    </div>

                    <div><h1>Fun Facts:</h1></div>

                </div>
                <span>  </span> */}

            </div>
        )
    }
}

export default Country