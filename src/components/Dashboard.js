import React, { useEffect, useState } from 'react';
import Header from './Header';
import BarChart from './BarChart';
import PieChart from './PieChart';
import CountrySelector from './CountrySelector';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('World');

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.map((country) => country.country));
      });

    fetchData(selectedCountry);
  }, [selectedCountry]);

  const fetchData = (country) => {
    const url = country === 'World' 
      ? 'https://disease.sh/v3/covid-19/all' 
      : `https://disease.sh/v3/covid-19/countries/${country}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData({
          labels: ['Cases', 'Deaths', 'Recovered'],
          cases: [data.cases, data.todayCases],
          deaths: [data.deaths, data.todayDeaths],
          recovered: [data.recovered, data.todayRecovered],
        });
      });
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <CountrySelector 
        countries={['World', ...countries]} 
        selectedCountry={selectedCountry} 
        onChange={handleCountryChange} 
      />
      <BarChart data={data} />
      <PieChart data={data} />
    </div>
  );
};

export default Dashboard;
