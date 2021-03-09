import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Loading from '../Loading'
import MyTableHeader from '../MyTableHeader'
import Pages from '../Pages'
import Search from '../Search'
import RowAdd from '../RowAdd'
import './style.css'

export default class MyTable extends Component{
    state={
        allRowsData: [],
        rowsData: [],
        isLoading: false,
        sortField: null,
        currentPage: 1,
        rowsPerPage: 50,
        searchWord: ''
    }

    async componentDidMount(){
        const {dataAmount} = this.props  
        await this.setState({isLoading: true})
        await fetch(dataAmount)
        .then(response => response.json())
        .then(result => 
            this.setState({allRowsData: result, isLoading: false, rowsData: result})
        )
        .catch(e => console.log(e))
        console.log(this.state.allRowsData)
    }

    tableSort = () => {
        if(this.state.sortField === "id"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.id > b.id ? 1 : -1)
            this.setState({
                rowsData: sortedData
            })
            console.log("f0")
        } else if(this.state.sortField === "firstName"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.firstName > b.firstName ? 1 : -1)
            this.setState({
                rowsData: sortedData
            })
            console.log("f1")
        } else if(this.state.sortField === "lastName"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.lastName > b.lastName ? 1 : -1)
            this.setState({
                rowsData: sortedData
            })
            console.log("f2")
        } else if(this.state.sortField === "email"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.email > b.email ? 1 : -1)
            this.setState({
                rowsData: sortedData
            })
            console.log("f3")
        } else if(this.state.sortField === "phone"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.phone > b.phone ? 1 : -1)
            this.setState({
                rowsData: sortedData
            })
            console.log("f4")
        } 
    }

    tableSortBack = () => { 
        if(this.state.sortField === "id"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.id > b.id ? -1 : 1)
            this.setState({
                rowsData: sortedData
            })
            console.log("b0")
        } else if(this.state.sortField === "firstName"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.firstName > b.firstName ? -1 : 1)
            this.setState({
                rowsData: sortedData
            })
            console.log("b1")
        } else if(this.state.sortField === "lastName"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.lastName > b.lastName ? -1 : 1)
            this.setState({
                rowsData: sortedData
            })
            console.log("b2")
        } else if(this.state.sortField === "email"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.email > b.email ? -1 : 1)
            this.setState({
                rowsData: sortedData
            })
            console.log("b3")
        } else if(this.state.sortField === "phone"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.phone > b.phone ? -1 : 1)
            this.setState({
                rowsData: sortedData
            })
            console.log("b4")
        } 
    }

    itemLifter = i =>{
        this.setState({
            sortField: i
        })
    }

    paginate = pageNumber =>{
        this.setState({
            currentPage: pageNumber
        })
    }

    getSearch = i =>{
        this.setState({
            searchWord: i
        })
    }

    findRows = (word) => {
        const newData = this.state.allRowsData.filter(item => {
          const regex = new RegExp(word, 'gi')
          return item.id.toString().match(regex) || item.firstName.match(regex) || item.lastName.match(regex) || item.email.match(regex) || item.phone.match(regex)
        })
        this.setState({
            rowsData: newData,
            sortField: null
        })
      }

      getRow = (firstName, lastName, email, phone, streetAddress, city, state, zip, description) =>{
          const data = this.state.allRowsData
          const addData = {}
          addData.address = {}
          addData.id = data.length + 2
          addData.firstName = firstName
          addData.lastName = lastName
          addData.email = email
          addData.phone = phone
          addData.address.streetAddress = streetAddress
          addData.address.city = city
          addData.address.state = state
          addData.address.zip = zip
          addData.description = description
          data.push(addData)
          this.setState({
              allRowsData: data
          })
          setTimeout(() => {
              console.log(addData)
          }, 1);
      }

    render(){    
        const {rowSelect} = this.props

        const lastRowIndex = this.state.currentPage * this.state.rowsPerPage
        const firstRowIndex = lastRowIndex - this.state.rowsPerPage
        const currentRows = this.state.rowsData.slice(firstRowIndex, lastRowIndex)

        return(
        <>
            {this.state.isLoading ?
            <Loading />
            : <div>
                <RowAdd getRow={this.getRow} />
                <Search getSearch={this.getSearch} findRows={this.findRows} searchWord={this.state.searchWord} />
                <table className="table">
                <thead>
                    <tr>
                        <MyTableHeader itemLifter={this.itemLifter} field='id' name='ID' tableSort={this.tableSort} tableSortBack={this.tableSortBack} sortField={this.state.sortField} />
                        <MyTableHeader itemLifter={this.itemLifter} field='firstName' name='First name' tableSort={this.tableSort} tableSortBack={this.tableSortBack} sortField={this.state.sortField} />
                        <MyTableHeader itemLifter={this.itemLifter} field='lastName' name='Last name' tableSort={this.tableSort} tableSortBack={this.tableSortBack} sortField={this.state.sortField} />
                        <MyTableHeader itemLifter={this.itemLifter} field='email' name='E-mail' tableSort={this.tableSort} tableSortBack={this.tableSortBack} sortField={this.state.sortField} />
                        <MyTableHeader itemLifter={this.itemLifter} field='phone' name='Phone' tableSort={this.tableSort} tableSortBack={this.tableSortBack} sortField={this.state.sortField} />
                    </tr>
                </thead>
                <tbody>
                    {currentRows.map(item =>(
                        <tr key={item.id + item.lastName} onClick={rowSelect.bind(null, item)} className="pointer">
                            <td>{item.id}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                <Pages paginate={this.paginate} rowsPerPage={this.state.rowsPerPage} totalRows={this.state.rowsData.length} currentPage={this.state.currentPage} /> </div>
            }
        </>
        )
    }
}