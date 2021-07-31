import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  onChangeCapital = event => {
    this.setState({countryId: event.target.value})
  }

  render() {
    const {countryId} = this.state
    const filteredCountry = countryAndCapitalsList.find(
      each => each.id === countryId,
    )

    return (
      <div className="app-container">
        <div className="capitals-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="select-container">
            <select
              id="countryList"
              className="select-list"
              onChange={this.onChangeCapital}
              value={countryId}
            >
              {countryAndCapitalsList.map(each => (
                <option value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="description">is capital of which country?</p>
          </div>
          <h1 className="capital">{filteredCountry.country}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
