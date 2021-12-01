import React, {Component} from 'react';
import FilterableMedicalTreatmentList from "./FilterableMedicalTreatmentList";

class MedicalTreatmentPanel extends Component {
    //encapsulates the filterable table and provides the ability to add additional records
    constructor(props) {
        super(props);
        this.state = {
            medical_treatment_headers: props.medical_treatment_headers,
            medical_treatment_list: props.medical_treatment_list,
            treatId: "",
            treatCourseId: "",
            type: "",
            category: "",
            name: "",
            startDate: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value}) //[] allow us to set the state name dynamically based on the input "name" field

    }

    handleSubmit(e) {
        //new treatment variables combined into one json obj
        let newTreatment = {
            treatId: this.state.treatId,
            treatCourseId: this.state.treatCourseId,
            type: this.state.type,
            category: this.state.category,
            name: this.state.name,
            startDate: this.state.startDate,
        }
        this.setState({
            medical_treatment_list: [...this.state.medical_treatment_list, newTreatment], //merge the new treatment with the others
            treatId: "", treatCourseId: "", type: "", category: "", name: "", startDate: "", //set the other bits back to empty strings
        })
        e.preventDefault() // prevent a refresh
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                {/*
                dynamically render the input boxes, one for each header (as it should be)
                The value is updated via the handleChange event handler
                */}
                <div>
                    {this.state.medical_treatment_headers.map(header => <input name={header} type="text"
                                                                               placeholder={header}
                                                                               value={this.state[{header}]}
                                                                               onChange={this.handleChange}/>)}
                    <button>Add new medical treatment</button>
                </div>
            </form>
            <br/>
            {/*
            pass the updated treatment list, it'll automatically rerender
            */}
            <FilterableMedicalTreatmentList medical_treatment_headers={this.state.medical_treatment_headers}
                                            medical_treatment_list={this.state.medical_treatment_list}/>
        </div>);
    }
}

export default MedicalTreatmentPanel;