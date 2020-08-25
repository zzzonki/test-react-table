import React, {Component} from 'react';


export default class MyTableHeader extends Component{
    state = {
        straightSort: false
    }
    render(){
        const {name, item} = this.props
        const arrow = this.state.straightSort ?
        <i className='faq_arrow__rt fas fa-angle-up'></i> :
        <i className='faq_arrow fas fa-angle-up'></i>
        return(
            <>
            <th onClick={() => this.handleClick(item)}>{name} {arrow}</th>
            </>
        )
    }

    handleClick = i =>{
        this.props.itemLifter(i)
        setTimeout(() => {
            this.state.straightSort ?
        this.props.tableSortBack() :
        this.props.tableSort()
        console.log(i)
        this.setState({
            straightSort: !this.state.straightSort
        })
        }, 1);    
    }
}