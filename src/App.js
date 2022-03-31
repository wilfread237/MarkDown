import React, { Component } from 'react';
import './App.css'
import { sampleText } from './sampletext';
import { marked } from 'marked'


class App extends Component {

  state = {
      text : sampleText
  }

  componentDidMount(){

        const text = localStorage.getItem('ValuesampleText')
            if(text){
                this.setState({ text })
            }
            else{
                this.setState({ text : sampleText })
            }
  }

  componentDidUpdate(){

        const {text} = this.state
        localStorage.setItem('ValuesampleText', text)
        
  }

  handleChange = event => {

      const text = event.target.value
      this.setState({ text })
  }

    renderText = text =>{
        const __html = marked(text, { sanitize : true })
        return { __html }
    
    }




    render() {

        return(
              <div className='container'>
                
                  <div className="row">
                      <div className='col-sm-6'>
                            <textarea className="form-control" value={ this.state.text } rows="20"
                                onChange={this.handleChange}
                            >
                            </textarea>
                      </div>
                      <div className='col-sm-6'>
                             <div className='' dangerouslySetInnerHTML={
                                    this.renderText(this.state.text)
                             }/>
                      </div>                 
                  </div>

              </div>

        )
    }
}



export default App
