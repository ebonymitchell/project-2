import { useState, type FormEvent } from 'react'
import Map from './components/Map'
import type { IpLookupResult } from './types/ipLookup'

function App() {
  // Store the text entered into the search field.
  const [searchValue, setSearchValue] = useState('')

  // Store the data returned by IPify.
  const [result, setResult] = useState<IpLookupResult | null>(null)

  // Track whether a lookup is currently running.
  const [isLoading, setIsLoading] = useState(false)

  // Store messages displayed to the user.
  const [status, setStatus] = useState('')

  // Handle the search form without reloading the page.
  async function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const query = searchValue.trim()

    if (!query) {
      setStatus('Enter an IP address or domain.')
      return
    }

    setIsLoading(true)
    setStatus('Searching...')

    try {
      // Use the existing Netlify serverless function.
      const response = await fetch(
        `/.netlify/functions/ip-lookup?search=${encodeURIComponent(query)}`
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Unable to look up that address.')
      }

      // Updating state tells React to render the new results.
      setResult(data as IpLookupResult)
      setStatus('')
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      // Always re-enable the button, even if the request fails.
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* HEADER AND SEARCH FORM */}

      <header className="header">
        <h1>IP Address Tracker</h1>

        <form id="search-form" onSubmit={handleSearch}>
          <label htmlFor="ip-address">IP address or domain</label>

          <input
            type="text"
            id="ip-address"
            name="ip-address"
            placeholder="Enter IP address or domain"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            required
          />

          <button type="submit" disabled={isLoading}>
            Search
          </button>
        </form>

        <p id="search-status" role="status" aria-live="polite">
          {status}
        </p>
      </header>

      {/* IP ADDRESS RESULTS */}

      <main>
        <section id="results" aria-label="IP address lookup results">
          <div>
            <h2>IP Address</h2>
            <p id="result-ip">{result?.ip ?? '—'}</p>
          </div>

          <div>
            <h2>Location</h2>
            <p id="result-location">
              {result
                ? `${result.location.city}, ${result.location.region}`
                : '—'}
            </p>
          </div>

          <div>
            <h2>Timezone</h2>
            <p id="result-timezone">
              UTC {result?.location.timezone ?? '—'}
            </p>
          </div>

          <div>
            <h2>ISP</h2>
            <p id="result-isp">{result?.isp ?? '—'}</p>
          </div>
        </section>

        {/* INTERACTIVE MAP */}

        <section
          id="map"
          aria-label="Map showing the IP address location"
        >
          <Map
            latitude={result?.location.lat}
            longitude={result?.location.lng}
          />
        </section>
      </main>

      {/* FOOTER */}

      <footer className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://github.com/ebonymitchell/">
          Ebony Mitchell
        </a>
        .
      </footer>
    </>
  )
}

export default App
