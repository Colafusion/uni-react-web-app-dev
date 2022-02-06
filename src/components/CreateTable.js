import React, {Component} from "react";
import SingleRow from "./SingleRow";

class CreateTable extends Component {
    //used for each table
    render() {
        const headers = this.props.headers
        const array = this.props.array
        return (<table>
                <tr>
                    {headers.map(header => <th style={{"text-align": "center"}}>{header}</th>)}
                </tr>
                {array.map(val => <SingleRow row_val={val}/>)}
            </table>

        )
    }
}

export default CreateTable;