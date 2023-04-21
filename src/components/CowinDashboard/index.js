import {Component} from 'react'

import BounceLoader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'

import Vaccinationbygender from '../VaccinationByGender'

import Vaccinationbyage from '../VaccinationByAge'

import './index.css'

class CowinDashboard extends Component {
  state = {isloading: true, data: '', error: false}

  async componentDidMount() {
    try {
      const vaccinationDataApiUrl = await fetch(
        'https://apis.ccbp.in/covid-vaccination-data',
      )
      const data = await vaccinationDataApiUrl.json()
      this.setState({data, isloading: false})
      console.log(data)
    } catch (error) {
      this.setState({error, isloading: false})
      console.log(error)
    }
  }

  Loading = () => (
    <div data-testid="loader" className="loading">
      <BounceLoader color="#000" />
      <p>Loading...</p>
    </div>
  )

  Vaccinationcoverage = () => {
    const {data, error} = this.state
    console.log(error)

    return (
      <div className="charts">
        <div className="VaccinationCoverage">
          <VaccinationCoverage data={data.last_7_days_vaccination} />
        </div>

        <div className="Vaccinationbygender">
          <h1>Vaccination by gender</h1>
          <Vaccinationbygender data={data.vaccination_by_gender} />
        </div>

        <div className="Vaccinationbyage">
          <h1>Vaccination by Age</h1>
          <Vaccinationbyage data={data.vaccination_by_age} />
        </div>
      </div>
    )
  }

  render() {
    const {isloading} = this.state

    return isloading ? this.Loading() : this.Vaccinationcoverage()
  }
}

export default CowinDashboard
