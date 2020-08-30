import React, {Component} from 'react';
import MyTable from '../MyTable'
import RowInfo from '../RowInfo'



class App extends Component{
  state ={
    rowToSee: null
  }
  render(){
    return(
      <>
        <MyTable rowSelect={this.rowSelect} />
        <div ref={(el) => { this.messagesEnd = el; }}></div>
        <div>{this.state.rowToSee ? <RowInfo rowToSee={this.state.rowToSee} /> : null}</div>
      </>
    )
  }

  rowSelect = rowToSee => {
    this.setState({rowToSee})
    setTimeout(() => {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" })
    }, 100);  
  }
}

export default App;
