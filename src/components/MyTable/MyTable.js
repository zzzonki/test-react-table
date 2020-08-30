import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Loading from '../Loading'
import MyTableHeader from '../MyTableHeader'
import './style.css'

export default class MyTable extends Component{
    state={
        rowsData: [],
        isLoading: false,
        sortField: null
    }
    async componentDidMount(){
        const {dataAmount} = this.props  
        await this.setState({isLoading: true})
        await fetch(dataAmount)
        .then(response => response.json())
        .then(result => 
            this.setState({rowsData: result, isLoading: false})
        )
        .catch(e => console.log(e))
        console.log(this.state.rowsData)
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
    render(){    
        const {rowSelect} = this.props
        return(
        <>
            {this.state.isLoading ?
            <Loading />
            : <table className="table">
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
                    {this.state.rowsData.map(item =>(
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
            }
        </>
        )
    }
}