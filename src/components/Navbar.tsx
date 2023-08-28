import React from 'react'

function Navbar() {
  return (
    <header className="flex flex-row w-full bg-zinc-700">
      <h1>{import.meta.env.VITE_NAME}</h1>
    </header>
  )
}

export default Navbar