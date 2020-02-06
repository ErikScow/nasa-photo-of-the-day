import React from 'react'

const Card = (props)  => {
    const data = props.data
    console.log(data)
    return(
        <div className="card-container">
        <div className="Card">
            <h2 className="card-title">{data.title}</h2>
            <p className="card-date">{data.date}</p>
            <img className="card-image" src={data.url} alt="Image of the day"/>
            <div className="text-container">
                <h3>Explanation:</h3>
                <p className="card-text">{data.explanation}</p>
            </div>
            
        </div>
    </div>
    )
}

export default Card