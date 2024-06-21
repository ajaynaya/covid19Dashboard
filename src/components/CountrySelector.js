

const CountrySelector = ({ countries, selectedCountry, onChange }) => {
  return (
    <select value={selectedCountry} onChange={onChange}>
      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountrySelector;
