import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singers'
function App() {

const Actors =['shakib', 'shoriful Raj', 'jashim', 'Rubel', 'salman shah'];

const Singers = [
  {id:1, name:'Dr Mahfujur Rahman', age: 68},
  {id:2, name:'Eva Rahman', age: 38},
  {id:3, name:'Shuvro Dev', age: 58},
  {id:3, name:'Pritom', age: 28},

]

  return (
    <>
     
      <h1>Vite + React</h1>

      {
        Singers.map(singer => <Singer singerr={singer}></Singer>)

      }


      <Actor name="Bappa Raz"></Actor>
      {
        Actors.map(actor => <Actor name={actor}></Actor>)
      }

      {/* <Todo task="Learn React" 
      isDone ={true}></Todo>
      <Todo task="core concepts"
      isDone={false}></Todo>
      <Todo task="Try JSX"
      isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="50"></Device>
      <Device name="mobile" price='17'></Device>
      <Device name="Watch" price='3'></Device>
      <Device></Device>
     <Person></Person>
     <Student grade="7" score="99"></Student>
     <Student grade='9' score="80"></Student>
     <Student></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
  // console.log(props)
  return <h2>This device:{props.name} price: {props.price}</h2>
}

const {grade, score} = {grade: '7', score: '99'};
function Student (grade, score){
  console.log(grade=1, score=0)
  return(
<div className='student'>
<h3>THis is a student</h3>
<p>Class: {grade}</p>
<p>Score: {score}</p>

  </div>
  )
}
const age = 25;
const money = 20;
const person ={name:'sakib', age: 12}

function Person(){
  return <h3>I am a {person.name} with age:{age + money}</h3>
}


function Developer(){
  const developerStyle={
    margin:'20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius:'20px'
  }

  return(
    <div style={developerStyle}>
      <h4>Devo Devo</h4>
      <p>Coading</p>
    </div>
  )

}


export default App