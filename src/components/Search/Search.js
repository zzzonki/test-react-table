import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

export default class Search extends Component{
    state = {
        inputValue: ''
    }

    getInput = (event) => {
        this.setState({
            inputValue: event.target.value
        })
        setTimeout(() => {
            console.log(this.state.inputValue)
        }, 1);
    }

    handleClick = i => {
        this.props.getSearch(i)
        this.props.findRows(i)
        setTimeout(() => {
            
            console.log('got', this.props.searchWord)
        }, 1);
    }

    render(){
        return (
            <div className="input-group mb-3">
                <input onChange={this.getInput} type="text" className="form-control" placeholder="Найти" aria-describedby="button-addon2" />
                <button onClick={() => this.handleClick(this.state.inputValue)} className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
            </div>
        )
    }
}
