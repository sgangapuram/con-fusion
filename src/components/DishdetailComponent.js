import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function getParsedDate(strDate){
    let strDateFormatted ='';
    let strSplitDate = String(strDate).split('T');
    let date = new Date(strSplitDate[0]);
    
    let dd = date.getDate();
    let mm = date.getMonth(); //January is 0!

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    let yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    
    strDateFormatted =  monthNames[mm] + " " + dd + ", " + yyyy;
    return strDateFormatted;
}

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else return <div></div>;
    }

    renderComments(comments) {
        if (comments != null) {
            const comment = comments.map((comment) => {
                return (
                    <ul class="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>-- {comment.author}, {getParsedDate(comment.date)}</li>
                    </ul>
                );
            });
            return (
                <Card>
                    <CardBody>
                        <CardTitle>
                            <h4>Comments</h4>
                        </CardTitle>
                        <CardText>{comment}</CardText>
                    </CardBody>
                </Card>
            );
        } else return <div></div>;
    }

    render() {
        if (this.props.selectedDish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.selectedDish)}</div>
                    <div className="col-12 col-md-5 m-1">{this.renderComments(this.props.selectedDish.comments)}</div>
                </div>
            );
        } else return <div></div>;
    }
}

export default DishDetail;