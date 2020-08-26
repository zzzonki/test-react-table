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
        const {name, item, sortItem} = this.props
        const arrow = (item == sortItem) ?
        (this.state.straightSort ?
        <FontAwesomeIcon icon={faCaretDown} /> :
        <FontAwesomeIcon icon={faCaretUp} />) :
        ""
        return(
            <>
            <th className="pointer" onClick={() => this.handleClick(item, sortItem)}>{name} {arrow}</th>
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
    componentShouldUpdate(){
        if (this.props.sortItem == this.props.item){
            this.setState({
                straightSort: false
        })
    }
    }
}