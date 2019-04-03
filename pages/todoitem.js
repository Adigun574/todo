import React, { Component} from "react"


class TodoItem extends Component{
  render(){
    const { title, handleDelete } = this.props
    const listStyle = {
      listStyleType:"none",
      color:"steelblue",
      backgroundColor:"#eee",
      borderBottom:"2px steelblue solid",
      marginTop:"5px",
      marginLeft:"0",
      overflow:"auto"
      
    }
    const d = new Date()
    const month = d.getMonth() + 1 
    const day = d.getDay()
    const year = d.getFullYear() - 2000
    const date="21/01/19"
    return(
      
      <li style={listStyle} className="list-group-item d-flex justify-content-between">
        <span><h6>{title}</h6><h6 style={{fontSize:"12px", color:"black"}}>{day}/{month}/{year}</h6></span>
        <div>
        <span><button onClick={handleDelete} className="btn btn-danger">x</button></span>
        </div>
      </li>
      
    )
  }
}

export default TodoItem