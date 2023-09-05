import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
    const [count, setCount] = useState(0)
    const [testObjects, setTestObjects] = useState<Array<string>>([])

    const EOL_URL = "https://localhost:7084/ArbinEOL/"
    const TESTOBJ_URL = EOL_URL + "GetTestObjects"

    useEffect(() => {
        axios.get(TESTOBJ_URL).then(res => {
            if(res.status == 200){
                setTestObjects(res.data)
            }
            else{
                console.log("failed with status : ", res.status)
            }
        })
    }, [])

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
