import React, {Component} from 'react';
import MyTable from '../MyTable'
import RowInfo from '../RowInfo'
import DataSelector from '../DataSelector'

import 'bootstrap/dist/css/bootstrap.css'




class App extends Component{
  state ={
    dataSelected: false,
    dataAmount: null,
    rowToSee: null
  }
  render(){
    const theApp = 
    (<>
      <div className="container">
        <div className="row">
          <div className="col-9"></div>
          <div className="col-"><button className="btn btn-success">Добавить</button></div>
        </div>
      </div>
      <MyTable rowSelect={this.rowSelect} dataAmount={this.state.dataAmount} />
      <div ref={(el) => {this.messagesEnd = el}}></div>
      <div>{this.state.rowToSee ? <RowInfo rowToSee={this.state.rowToSee} /> : null}</div>
    </>)
    const theMenu = <DataSelector dataLifter={this.dataLifter} />
    return(
      <>
        {this.state.dataSelected ? theApp : theMenu}
      </>
    )
  }

  rowSelect = item => {
    this.setState({rowToSee: item})
    setTimeout(() => {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" })
    }, 100);  
  }

  dataLifter = data => {
      this.setState({
        dataAmount: data,
        dataSelected: true
      })
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
