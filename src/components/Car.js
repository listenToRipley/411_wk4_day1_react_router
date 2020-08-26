import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import { Card, CardContent, Container, Paper, Chip } from '@material-ui/core'
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
    <Card className='car-card' className="text-gray">
        <h1>A specific car</h1>
        <span>{thisCar.Name.toUpperCase()}</span>
        <Container>
            <CardContent>
                 <Chip lable={`M ${thisCar["Miles_per_Gallon"]}`}/>
                 <Chip>Cylinders: {thisCar["Cylinders"]}</Chip>
                 <Chip>Displacement: {thisCar["Displacement"]}</Chip>
                 <Chip>Horsepower: {thisCar["Horsepower"]}</Chip> 
            </CardContent>
        </Container>
    </Card>)
    
}

export default Car