import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Home() {
  const [spots, setSpots] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from('spots')
        .select('*')

      if (!error) setSpots(data || [])
      setLoading(false)
    }
    load()
  }, [])

  return (
    <main style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>Husky Parking Watch</h1>

      {loading && <p>loading…</p>}

      {!loading && spots.length === 0 && <p>no spots yet</p>}

      {!loading && spots.length > 0 && (
        <ul>
          {spots.map(s => (
            <li key={s.id}>{s.name}</li>
          ))}
        </ul>
      )}
    </main>
  )
}
