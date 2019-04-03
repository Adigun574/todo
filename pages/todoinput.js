import React, { Component} from "react"

class TodoInput extends Component{
  render(){
    const {item, handleChange, handleSubmit} = this.props
    const inputStyle={
      backgroundColor:"gree",
      textAlign:"center",
      width:"60%",
      border:"2px solid steelblue"
    }
    return(
      <div className="card card-body mt-2 mb-5">

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            
            <input
            value={item}
            onChange={handleChange}
            placeholder="Add An Item"
            style={inputStyle}
            ></input>
            <div className="input-group-append">
            <button type="submit" className="btn btn-primary">Add item</button>
            </div>
            
          </div>
        </form>
      </div>
    )
  }
}

export default TodoInput