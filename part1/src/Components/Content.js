import React from 'react';
import ReactDOM from 'react-dom';



const Content = (props) => {
  return (
    <div>
      <Part {props.part1} {props.exercises1} />
      <Part {props.part2} {props.exercises2} />
      <Part {props.part3} {props.exercises3} />
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
