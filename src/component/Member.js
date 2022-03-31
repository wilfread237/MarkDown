import React, { Component, Fragment } from "react"

class Member extends Component {
    render(){
        const name = "essomba"
        const surname = "wilfread"
        
        return (
            <Fragment>
                    <h1>Hello my surname is : {surname.toLocaleUpperCase()}</h1>
                    <p>I'm a young web developper, my name is : {name.toLocaleUpperCase()}</p>
                    <h6>I need to become really competent.</h6>
            </Fragment>

           
         )
    }
    
}

export default Member