import React, { createContext, useState } from 'react'
import run from '../gemini'
export const dataContext = createContext()

function UserContext({ children }) {
    const [input, setInput] = useState("")
    async function sent(prompt) {
        await run(prompt)
    }
    const data = {
        input,
        setInput,
        sent
    }
    return (
        <>
            <dataContext.Provider value={data}>
                {children}
            </dataContext.Provider>

        </>
    )
}

export default UserContext
