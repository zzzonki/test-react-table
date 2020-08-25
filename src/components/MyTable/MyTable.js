import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Loading from '../Loading'
import MyTableHeader from '../MyTableHeader'

export default class MyTable extends Component{
    state={
        rowsData: [],
        isLoading: false,
        sortItem: ""
    }
    async componentDidMount(){
        await this.setState({isLoading: true})
        await fetch(`http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`)
        .then(response => response.json())
        .then(result => 
            this.setState({rowsData: result, isLoading: false})
        )
        .catch(e => console.log(e))
        console.log(this.state.rowsData)
    }
    tableSort = () => {
        if(this.state.sortItem === "id"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.id > b.id ? 1 : -1)
            this.setState({
                rowsData: sortedData
            })
            console.log("f0")
        } else if(this.state.sortItem === "firstName"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.firstName > b.firstName ? 1 : -1)
            this.setState({
                rowsData: sortedData
            })
            console.log("f1")
        } else if(this.state.sortItem === "lastName"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.lastName > b.lastName ? 1 : -1)
            this.setState({
                rowsData: sortedData
            })
            console.log("f2")
        } else if(this.state.sortItem === "email"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.email > b.email ? 1 : -1)
            this.setState({
                rowsData: sortedData
            })
            console.log("f3")
        } else if(this.state.sortItem === "phone"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.phone > b.phone ? 1 : -1)
            this.setState({
                rowsData: sortedData
            })
            console.log("f4")
        } 
    }
    tableSortBack = () => { 
        if(this.state.sortItem === "id"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.id > b.id ? -1 : 1)
            this.setState({
                rowsData: sortedData
            })
            console.log("b0")
        } else if(this.state.sortItem === "firstName"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.firstName > b.firstName ? -1 : 1)
            this.setState({
                rowsData: sortedData
            })
            console.log("b1")
        } else if(this.state.sortItem === "lastName"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.lastName > b.lastName ? -1 : 1)
            this.setState({
                rowsData: sortedData
            })
            console.log("b2")
        } else if(this.state.sortItem === "email"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.email > b.email ? -1 : 1)
            this.setState({
                rowsData: sortedData
            })
            console.log("b3")
        } else if(this.state.sortItem === "phone"){
            const sortedData = this.state.rowsData.sort((a,b) =>
            a.phone > b.phone ? -1 : 1)
            this.setState({
                rowsData: sortedData
            })
            console.log("b4")
        } 
    }
    itemLifter = (i) =>{
        this.setState({
            sortItem: i
        })
    }
    render(){       
        return(
        <>
            {this.state.isLoading ?
            <Loading />
            : <table className="table">
                <thead>
                    <tr>
                        <MyTableHeader itemLifter={this.itemLifter} item='id' name='ID' tableSort={this.tableSort} tableSortBack={this.tableSortBack} />
                        <MyTableHeader itemLifter={this.itemLifter} item='firstName' name='First name' tableSort={this.tableSort} tableSortBack={this.tableSortBack} />
                        <MyTableHeader itemLifter={this.itemLifter} item='lastName' name='Last name' tableSort={this.tableSort} tableSortBack={this.tableSortBack} />
                        <MyTableHeader itemLifter={this.itemLifter} item='email' name='E-mail' tableSort={this.tableSort} tableSortBack={this.tableSortBack} />
                        <MyTableHeader itemLifter={this.itemLifter} item='phone' name='Phone' tableSort={this.tableSort} tableSortBack={this.tableSortBack} />
                    </tr>
                </thead>
                <tbody>
                    {this.state.rowsData.map(item =>(
                        <tr key={item.id + item.lastName}>
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