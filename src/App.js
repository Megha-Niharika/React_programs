

import React from 'react';
class App extends React.Component{
    constructor()
    {
        super()
        this.state = {
          inloggedin : false
        }

  }
  
    render()
    {
      let wordDisplay 
      if(this.state.inloggedin === true){
        wordDisplay = "in"
      }
        else{
          wordDisplay= "out"
        }
      
      return(

        <div>
            <h1>{wordDisplay}</h1>
           
            </div>
      )

    }
  }
  export default App