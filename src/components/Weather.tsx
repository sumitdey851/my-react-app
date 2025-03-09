interface IWeatherProps {
  temperature: number;
}
const getTemperatureMessage = (temperature: number) => {
  if (!temperature) {
    return <span>No Temperature</span>;
  } else if (temperature < 15) {
    return <span style={{ color: 'blue' }}>Cold</span>;
  } else if (temperature >= 15 && temperature <= 25) {
    return <span style={{ color: 'green' }}>Moderate</span>;
  } else {
    return <span style={{ color: 'red' }}>Hot</span>;
  }
};

const Weather: React.FC<IWeatherProps> = ({ temperature }) => {
  return (
    <div>
      <h3>Weather</h3>
      <p>
        Temperature: {temperature}°C, {getTemperatureMessage(temperature)}
      </p>
    </div>
  );
};

export default Weather;
