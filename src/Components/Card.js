import React from 'react'

const Card = (props)  => {
    const data = props.data
    console.log(data)
    return(
    <div className="Card">
        <h2>{data.title}</h2>
        <p>{data.date}</p>
        <img src={data.url} alt="Image of the day"/>
        <p>{data.explanation}</p>
    </div>
    )
}

export default Card