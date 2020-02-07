import React from 'react'
import styled from 'styled-components'

const MyCardContainer = styled.div`
    width: 1000px;
    margin: 0 auto;
    padding-top: 160px;
`
const MyCard = styled.div`
    width: 90%;
    margin: 0 auto ;
    background: #353640;  
    box-shadow: 2px 2px 5px #232229;
    border-radius: 20px;
    padding: 50px;
    margin: 100px auto;
`
const TextContainer = styled.div`
    margin: 20px auto 0;
    width: 80%;
`

const Explanation =  styled.h3`
    text-align: left;
`

const CardText = styled.p`
    margin-top: 20px;
    text-align: justify;
`

const Img = styled.img`
    width: 80%;
    margin: 40px 0;
`


const Card = (props)  => {
    const data = props.data
    console.log(data)
    return(
        <MyCardContainer>
            <MyCard>
                <h2>{data.title}</h2>
                <p>{data.date}</p>
                <Img src={data.hdurl} alt="Image of the day"/>
                <TextContainer>
                    <Explanation>Explanation:</Explanation>
                    <CardText>{data.explanation}</CardText>
                </TextContainer>
            
            </MyCard>
        </MyCardContainer>
    )
}

export default Card