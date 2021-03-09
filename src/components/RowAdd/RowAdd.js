import React, {Component} from 'react';

export default class RowAdd extends Component{
    state={
        active: false,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        description: '',
        streetAddress: '',
        city: '',
        state: '',
        zip: ''
    }

    showForm(){
        this.setState({
            active: !this.state.active
        })
    }

    getFirst = (event) => {
        this.setState({
            firstName: event.target.value
        })
        setTimeout(() => {
            console.log(this.state.firstName)
        }, 1);
    }
    getLast = (event) => {
        this.setState({
            lastName: event.target.value
        })
        setTimeout(() => {
            console.log(this.state.lastName)
        }, 1);
    }
    getEmail = (event) => {
        this.setState({
            email: event.target.value
        })
        setTimeout(() => {
            console.log(this.state.email)
        }, 1);
    }
    getPhone = (event) => {
        this.setState({
            phone: event.target.value
        })
        setTimeout(() => {
            console.log(this.state.phone)
        }, 1);
    }
    getStreet = (event) => {
        this.setState({
            streetAddress: event.target.value
        })
        setTimeout(() => {
            console.log(this.state.streetAddress)
        }, 1);
    }
    getCity = (event) => {
        this.setState({
            city: event.target.value
        })
        setTimeout(() => {
            console.log(this.state.city)
        }, 1);
    }
    getState = (event) => {
        this.setState({
            state: event.target.value
        })
        setTimeout(() => {
            console.log(this.state.state)
        }, 1);
    }
    getZip = (event) => {
        this.setState({
            zip: event.target.value
        })
        setTimeout(() => {
            console.log(this.state.zip)
        }, 1);
    }
    getDesc = (event) => {
        this.setState({
            description: event.target.value
        })
        setTimeout(() => {
            console.log(this.state.description)
        }, 1);
    }

    handleClick = (firstName, lastName, email, phone, streetAddress, city, state, zip, description) => {
        this.props.getRow(firstName, lastName, email, phone, streetAddress, city, state, zip, description)
        setTimeout(() => {
            this.setState({
                active: false,
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                description: '',
                streetAddress: '',
                city: '',
                state: '',
                zip: ''
            })
            console.log('got row')
        }, 1);
    }

    render(){

        const body = this.state.active ?
                <div className='container w-75'>
                    <form>
                        <div className="container">
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>First name</label>
                                        <input type="text" className="form-control" id="firstName" onChange={this.getFirst} value={this.state.firstName} placeholder="First name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Last name</label>
                                        <input type="text" className="form-control" id="lastName" onChange={this.getLast} value={this.state.lastName} placeholder="Last name" />
                                    </div>
                                    <div className="form-group">
                                        <label>E-mail</label>
                                        <input type="email" className="form-control" id="email" onChange={this.getEmail} value={this.state.email} placeholder="e-mail" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input type="phone" className="form-control" id="phone" onChange={this.getPhone} value={this.state.phone} placeholder="phone number" />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" className="form-control" id="streetAddress" onChange={this.getStreet} value={this.state.streetAddress} placeholder="Street, house, office" />
                                    </div>
                                    <div className="form-group">
                                        <label>City</label>
                                        <input type="text" className="form-control" id="city" onChange={this.getCity} value={this.state.city} placeholder="City" />
                                    </div>
                                    <div className="form-group">
                                        <label>State</label>
                                        <input type="text" className="form-control" id="state" onChange={this.getState} value={this.state.state} placeholder="State" />
                                    </div>
                                    <div className="form-group">
                                        <label>ZIP-code</label>
                                        <input type="text" className="form-control" id="zip" onChange={this.getZip} value={this.state.zip} placeholder="111111" />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input type="text" className="form-control" id="description" onChange={this.getDesc} value={this.state.description} placeholder="Once upon a time..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                        <button onClick={() => this.handleClick(this.state.firstName, this.state.lastName, this.state.email, this.state.phone, this.state.streetAddress, this.state.city, this.state.state, this.state.zip, this.state.description)} className="btn btn-primary">Submit</button>
                </div>
                : <></>

        return(
            <div className="container">
                <div className="row">
                <div className="col-9"></div>
                <div className="col-1"><button onClick={() => this.showForm()} className="btn btn-success">Добавить</button></div>
                </div>
                <div className="row">
                    {body}
                </div>
            </div>
        )
    }
}