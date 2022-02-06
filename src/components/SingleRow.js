import React, {Component} from "react";

class SingleRow extends Component {
    //used for each row
    render() {

        //tr == table row
        //pull an array of the keys out and then iterate through, forming a table row with each key value as a cell
        return (<tr style={{"text-align": "center"}}>
            {Object.keys(this.props.row_val).map(key => <td>{this.props.row_val[key]}</td>)}
        </tr>)
    }
}

export default SingleRow;
