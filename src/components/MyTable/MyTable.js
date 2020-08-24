import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import Loading from '../Loading'

export default class MyTable extends Component{
    state={
        rowsData: [],
        isLoading: false
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
    render(){       
        return(
        <>
            {this.state.isLoading ?
            <Loading />
            : <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>E-mail</th>
                        <th>Phone</th>
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