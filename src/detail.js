import React from 'react'

export default function detail({detail}) {
    console.log(detail)
    return (
        <div>
            <p>{detail.definition}</p>
        </div>
    )
}
