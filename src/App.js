
import React from "react"


class  App extends React.Component{

 constructor()
 {
   super()
   this.state = {
     unreadmsg :[ 
       "abhay girl",
        "vivi "
      ]
   }
 }
 render()
 {
  return (
    <div>
<h2>you have {this.state.unreadmsg.length} unread msgs</h2>
      </div>
  )
 }

}




export default App