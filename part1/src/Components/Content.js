import React from 'react';
import ReactDOM from 'react-dom';
import Part from './part';



const Content = (props) => {
  return (
    <div>
      <Part part1={props.part1} />
      <Part part2={props.part2} />
      <Part part3={props.part3} />
    </div>
  )
}

{/* const Content = (props) => {



  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>

    </div>
  )
} */}

export default Content;
