import React, {Component} from "react";

class SingleRow extends Component {
    //used for each row
    render() {

        //tr == table row
        //pull an array of the keys out and then iterate through, forming a table row with each key value as a cell
        return (<tr>
            {Object.keys(this.props.row_val).map(key => {
                //as within a map {} we need to do a return, hence the val=null
                let val = null
                if (key === 'prescription_id' & (this.props.row_val[key] === 1)) { //we use 1 to signify none or n/a
                    //set colour to greenyellow (neon green) using react inline css
                    val = <p style={{color: "greenyellow"}}>
                        <td>{this.props.row_val[key]}</td>
                    </p>
                } else if (key === 'allergy_id' & (this.props.row_val[key] === 1)) {
                    //set colour to red and bold it
                    val = <p style={{color: "red"}}><b>
                        <td>{this.props.row_val[key]}</td>
                    </b></p>
                } else {
                    val = <td>{this.props.row_val[key]}</td>

                }
                return val
            })}
        </tr>)
    }
}

export default SingleRow;
