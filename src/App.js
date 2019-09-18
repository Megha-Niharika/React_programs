
import React from "react"

class App extends React.Component{

  constructor()
  {
    super()
this.state =
{
  isLoggedIn :false
}
this.handclick = this.handclick.bind(this)
  }

  handclick()
  {
    console.log("clicking")
  }
  render()
  {
    return(
      <div>
<button onClick ={this.handclick}>Log in</button>


        </div>
    )
  }
}


export default App