import React from 'react'
import { api } from '../services/ApiConfig'
// import SuggestionPic from '../assests/SuggestionsPic.jpg'

// export default function Suggestions() {
//     return (
//         <div>
//              <img src= {SuggestionPic }alt="suggestions"/>
//         </div>
//     )
// }


class Suggestions extends React.Component {
    constructor() {
        super()
        this.state = {
            country_Flag: '',
            name_Of_Country: '',
            fun_Fact: '',
            main_Language: '',
            errorMsg: '',
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { country_Flag, name_Of_Country, fun_Fact, main_Language } = this.state
        const data = {
            country_Flag,
            name_Of_Country,
            fun_Fact,
            main_Language
        }
        api.post('/Flags', data)
            .then((res) => res.status === 201 ? this.props.history.push('/') : null)
            .catch(() => this.setState({ errorMsg: "there was an error in posting" }))
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { country_Flag, name_Of_Country, fun_Fact, main_Language } = this.state
        return (
            <form className="SubmitForm" onSubmit={this.handleSubmit}>
                <input name='country_Flag' value={country_Flag} onChange={this.handleChange} placeholder='Country Flag URL'/>
                <input name='name_Of_Country' value={name_Of_Country} onChange={this.handleChange} placeholder='Country Name'/>
                <input name='fun_Fact' value={fun_Fact} onChange={this.handleChange} placeholder='Fun Fact'/>
                <input name='main_Language' value={main_Language} onChange={this.handleChange} placeholder='Language'/>
                <button/>

            </form>

        )
    }
}

export default Suggestions