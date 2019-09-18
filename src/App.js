

import React from 'react';
class App extends React.Component{
    constructor()
    {
        super()
        this.state = {
          answer : "yes"
    }
  }
  
    render()
    {
      return(
        <div>
            <h1>state is {this.state.answer}</h1>
            </div>
      )

    }
  }
  export default App