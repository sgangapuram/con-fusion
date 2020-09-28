import React,  { Component } from "react";
import CardComponent from "./CardComponent";

class DishdetailComponent extends Component{
  constructor(props){
    super(props)
  }

  renderComments(comments){
    if(comments.length>0){
    return  (
      <ul className="list-group">
        <h4>Comments</h4>
        {
        comments.map((item)=> {
          return(
            <li key={item.id} className="list-group-item">
              <div>{item.comment}</div>
              <div>--{item.author}, {item.date}</div>
            </li>
          );
        })
        }
      </ul>
    );
    } else {
      return <div></div>
    }
  }
render(){
  return(<div className="row">
          <div  className="col-6 col-md-5 m-1">
              <CardComponent selectedDish ={this.props.selectedDish} />
          </div>
          <div  className="col-6 col-md-5 m-1">
              {this.renderComments(this.props.selectedDish.comments)}
          </div>
          </div>
        )
  }
}

export default DishdetailComponent;