import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button className='border-black border-2 p-1 rounded-lg' onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
            <p className='text-3xl underline bg-violet-300'>
                Tailwind works
            </p>
        </>
    )
}

export default App
