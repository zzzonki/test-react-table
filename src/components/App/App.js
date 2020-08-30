import React, {Component} from 'react';
import MyTable from '../MyTable'
import RowInfo from '../RowInfo'
import DataSelector from '../DataSelector'



class App extends Component{
  state ={
    dataSelected: false,
    dataAmount: null,
    rowToSee: null
  }
  render(){
    const theApp = 
    (<><MyTable rowSelect={this.rowSelect} dataAmount={this.state.dataAmount} />
        <div ref={(el) => {this.messagesEnd = el}}></div>
        <div>{this.state.rowToSee ? <RowInfo rowToSee={this.state.rowToSee} /> : null}</div></>)
    const theMenu = <DataSelector dataLifter={this.dataLifter} />
    return(
      <>
        {this.state.dataSelected ? theApp : theMenu}
      </>
    )
  }

  rowSelect = rowToSee => {
    this.setState({rowToSee})
    setTimeout(() => {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" })
    }, 100);  
  }

  dataLifter = data => {
      this.setState({
        dataAmount: data,
        dataSelected: true
      })
      console.log()
  }

  // dataSelectHandler = url => {
  //   // console.log(url)
  //   this.setState({
  //     dataSelected: true,
  //     isLoading: true,
  //   })
  //   this.fetchData(url)
  // }
}

export default App;
