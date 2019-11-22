import React from 'react'
import Axios from 'axios'

class Currency extends React.Component {
    constructor() {
        super()
        this.state = {
            allMoney: [],
            moneyData: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        this.fetchCurrency()
    }

    fetchCurrency = async () => {
        try {
            const url = 'http://data.fixer.io/api/latest?access_key=4630b2df33921b6cf823af51d61cc23f'
            const allMoney = await Axios.get(url)
            console.log(allMoney.data.rates)
            this.setState(state => ({
                moneyData: [...state.allMoney, allMoney.data.rates]
            }))
            this.setState({ isLoaded: true })
        } catch (error) {
            console.error('Error: ', error)
        }
    }

    render() {

        return (
            this.state.isLoaded === true ?
            <div>
                <h2>This is the currency exchange rate for the European Euro!</h2>
                <div>{`United States Dollar Exchange Rate: ${this.state.moneyData[0]['USD']}`}</div>
                 <div>{ ` South Korean won ${this.state.moneyData[0]['KRW']}`}</div>
                 <div>{`Australian Dollar ${this.state.moneyData[0]['AUD']}`}</div>
                 <div>{ `Japanese Yen Exchange Rate: ${this.state.moneyData[0]['JPY']}`}</div>
                 <div>{ `Chinese Yuan: ${this.state.moneyData[0]['CNY']}`}</div>
            </div>
                :
                <h1>Just A Moment...</h1>
        )
    }
}



export default Currency
