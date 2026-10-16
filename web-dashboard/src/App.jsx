
import { useState } from "react";
import "./App.css";

function App() {
  const [moisture, setMoisture] = useState(35);
  const [temperature, setTemperature] = useState(29);
  const [humidity, setHumidity] = useState(62);

  const irrigationNeeded = moisture < 40;

  return (
    <main className="dashboard">
      <header>
        <h1>🌱 JalRakshak AI</h1>
        <p>Smart Irrigation Monitoring System</p>
        <span className="status">● Demo Mode — Hardware Not Connected</span>
      </header>

      <section className="cards">
        <article className="card">
          <h3>Soil Moisture</h3>
          <strong>{moisture}%</strong>
          <input
            aria-label="Demo soil moisture"
            type="range"
            min="0"
            max="100"
            value={moisture}
            onChange={(e) => setMoisture(Number(e.target.value))}
          />
        </article>

        <article className="card">
          <h3>Temperature</h3>
          <strong>{temperature} °C</strong>
          <input
            aria-label="Demo temperature"
            type="range"
            min="0"
            max="50"
            value={temperature}
            onChange={(e) => setTemperature(Number(e.target.value))}
          />
        </article>

        <article className="card">
          <h3>Humidity</h3>
          <strong>{humidity}%</strong>
          <input
            aria-label="Demo humidity"
            type="range"
            min="0"
            max="100"
            value={humidity}
            onChange={(e) => setHumidity(Number(e.target.value))}
          />
        </article>
      </section>

      <section className="recommendation">
        <h2>Irrigation Recommendation</h2>
        <h3>{irrigationNeeded
          ? "💧 Irrigation Recommended"
          : "✅ Irrigation Not Currently Required"}</h3>
        <p>
          This is a demonstration rule, not a trained AI prediction.
          Actual recommendations will be connected to your model.
        </p>
      </section>

      <footer>
        ESP32 integration will be added after the dashboard is ready.
      </footer>
    </main>
  );
}

export default App;
