import React, {PureComponent} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import './style.css'


export default class MyTableHeader extends PureComponent{
    state = {
        straightSort: false
    }
    render(){
        const {name, field, sortField} = this.props
        const arrow = (field === sortField) ?
        (this.state.straightSort ?
        <FontAwesomeIcon icon={faCaretDown} /> :
        <FontAwesomeIcon icon={faCaretUp} />) :
        ""
        return(
            <>
            <th className="pointer" onClick={() => this.handleClick(field, sortField)}>{name} {arrow}</th>
            </>
        )
    }

    handleClick = (i, si) =>{
        this.props.itemLifter(i)
        setTimeout(() => {
            this.state.straightSort ?
            this.props.tableSortBack() :
            this.props.tableSort()
            console.log(i)
            setTimeout(() => {
                // i == si ?
            this.setState({
                straightSort: !this.state.straightSort
            }) 
            // this.setState({
            //     straightSort: this.state.straightSort
            // })
            }, 1);
            
        }, 1);    
    }
    componentDidUpdate(){
        if (this.props.sortField !== this.props.field){
            this.setState({
                straightSort: false
        })
    }
    }
}