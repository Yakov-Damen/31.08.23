import React from 'react'
export default function Select({setColor}: {setColor: React.Dispatch<React.SetStateAction<string>>}) {
    const color = (event: React.ChangeEvent<HTMLSelectElement>) => setColor(event.target.value)
    return (
        <>
            <select onChange={color}>
                <option value={'none'}>Pick a background color</option>
                <option>red</option>
                <option>gold</option>
                <option>blue</option>
                </select>
        </>
    )
}
