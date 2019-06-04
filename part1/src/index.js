import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header'
// import Content from './components/Content'
// import Total from './components/Total'



const App = () => {



  return(
    <div>
      <Header />
    {/* <Content />
         <Total exercises={part1 + part2 + part3} /> */}

    </div>
  )
}



ReactDOM.render(<App />, document.getElementById('root'))
