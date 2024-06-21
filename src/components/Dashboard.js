import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import BarChart from './BarChart';
import PieChart from './PieChart';
import CountrySelector from './CountrySelector';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      countries: [],
      selectedCountry: 'World'
    };
    this.handleCountryChange = this.handleCountryChange.bind(this);
  }

  componentDidMount() {
    this.fetchCountries();
    this.fetchData(this.state.selectedCountry);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedCountry !== this.state.selectedCountry) {
      this.fetchData(this.state.selectedCountry);
    }
  }

  fetchCountries() {
    axios.get('https://disease.sh/v3/covid-19/countries')
      .then(response => {
        const countries = response.data.map(country => country.country);
        this.setState({ countries });
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }

  fetchData(country) {
    const url = country === 'World'
      ? 'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${country}`;

    axios.get(url)
      .then(response => {
        const data = response.data;
        console.log('Fetched data:', data); // Debug log
        this.setState({
          data: {
            labels: ['Cases', 'Deaths', 'Recovered'],
            cases: [data.cases, data.todayCases],
            deaths: [data.deaths, data.todayDeaths],
            recovered: [data.recovered, data.todayRecovered],
          }
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  handleCountryChange(e) {
    this.setState({ selectedCountry: e.target.value });
  }

  render() {
    const { data, countries, selectedCountry } = this.state;

    if (!data) return <div>Loading...</div>;

    return (
      <div>
        <Header />
        <CountrySelector 
          countries={['World', ...countries]} 
          selectedCountry={selectedCountry} 
          onChange={this.handleCountryChange} 
        />
        <BarChart data={data} />
        <PieChart data={data} />
      </div>
    );
  }
}

export default Dashboard;
