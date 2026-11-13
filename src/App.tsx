import Map from './components/Map'

function App() {
  return (
    <>
      {/* HEADER AND SEARCH FORM */}

      <header className="header">
        <h1>IP Address Tracker</h1>

        <form id="search-form">
          <label htmlFor="ip-address">
            IP address or domain
          </label>

          <input
            type="text"
            id="ip-address"
            name="ip-address"
            placeholder="Enter IP address or domain"
            required
          />

          <button type="submit">Search</button>
        </form>

        <p
          id="search-status"
          role="status"
          aria-live="polite"
        ></p>
      </header>

      {/* IP ADDRESS RESULTS */}

      <main>
        <section
          id="results"
          aria-label="IP address lookup results"
        >
          <div>
            <h2>IP Address</h2>
            <p id="result-ip">—</p>
          </div>

          <div>
            <h2>Location</h2>
            <p id="result-location">—</p>
          </div>

          <div>
            <h2>Timezone</h2>
            <p id="result-timezone">UTC —</p>
          </div>

          <div>
            <h2>ISP</h2>
            <p id="result-isp">—</p>
          </div>
        </section>

        {/* INTERACTIVE MAP */}

        <section
          id="map"
          aria-label="Map showing the IP address location">
          <Map />
        </section>
      </main>

      {/* FOOTER */}

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/ebonymitchell/">
          Ebony Mitchell
        </a>
        .
      </footer>
    </>
  )
}

export default App
