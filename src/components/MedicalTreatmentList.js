import React, {Component} from "react";
import MedicalTreatment from "./MedicalTreatment";

class MedicalTreatmentList extends Component {
    //used for each table
    render() {
        const headers = this.props.headers
        const array = this.props.array
        return (
            <table>
                <tr>
                    {headers.map(header => <th style={{"text-align": "center"}}>{header}</th>)}
                </tr>
                {array.map(val => <MedicalTreatment medical_treatment={val}/>)}
            </table>

        )
    }
}

export default MedicalTreatmentList;