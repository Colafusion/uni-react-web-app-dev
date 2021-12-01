import React, {Component} from "react";

class MedicalTreatment extends Component {
    //used for each row
    render() {
        const medical_treatment = this.props.medical_treatment // pull it out of props for readability
        //tr == table row
        return (<tr style={{"text-align": "center"}}>

            <td>{medical_treatment.treatId}</td>
            <td>{medical_treatment.treatCourseId}</td>
            <td>{medical_treatment.type}</td>
            <td>{medical_treatment.category}</td>
            <td>{medical_treatment.name}</td>
            <td>{medical_treatment.startDate}</td>

        </tr>)
    }
}

export default MedicalTreatment;