import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from '@material-ui/core'
import '../App.css'


const Car = (props) => {
    //console.log('why are my cars not showing up?',cars)
    let id = parseInt(props.match.params.id)
    let thisCar = cars.find(car => {
        //console.log('inside your car finder :',car)
        return car.id === id
    })
    //console.log('here is your id :', id)
    //console.log('your car is :',thisCar)
    const handleClick = () => {
        console.log('You click a Chip')
    }

    return (    
    <div>
        <h1>A specific car</h1>
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{thisCar.Name.toUpperCase()}</h2>
                {Object.keys(thisCar).map((key, index) => {
                    console.log(thisCar[key])
                    return <Chip className='chip-details' label={`${key}: ${thisCar[key]}`}/>
                })}
            </Paper>
        </Container>
    </div>)
    
}

export default Car