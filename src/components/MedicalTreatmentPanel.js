import React, {Component} from 'react';
import FilterableMedicalTreatmentList from "./FilterableMedicalTreatmentList";

class MedicalTreatmentPanel extends Component {
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
        this.setState({[e.target.name]: e.target.value})

    }

    handleSubmit(e) {
        let newTreatment = {
            treatId: this.state.treatId,
            treatCourseId: this.state.treatCourseId,
            type: this.state.type,
            category: this.state.category,
            name: this.state.name,
            startDate: this.state.startDate,
        }
        this.setState({
            medical_treatment_list: [...this.state.medical_treatment_list, newTreatment],
            //now reset the other bits back to nulls
            treatId: "",
            treatCourseId: "",
            type: "",
            category: "",
            name: "",
            startDate: "",
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                            name="treatId"
                            type="text"
                            placeholder="1"
                            value={this.state.treatId}
                            onChange={this.handleChange}
                        />
                        <input
                            name="treatCourseId"
                            type="text"
                            placeholder="2"
                            value={this.state.treatCourseId}
                            onChange={this.handleChange}
                        />
                        <input
                            name="type"
                            type="text"
                            placeholder="cosmetic"
                            value={this.state.type}
                            onChange={this.handleChange}
                        />
                        <input
                            name="category"
                            type="text"
                            placeholder="face"
                            value={this.state.category}
                            onChange={this.handleChange}
                        />
                        <input
                            name="name"
                            type="text"
                            placeholder="face lift"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <input
                            name="startDate"
                            type="text"
                            placeholder="01/01/1970"
                            value={this.state.startDate}
                            onChange={this.handleChange}
                        />
                        <button>Add new medical treatment</button>
                    </div>
                </form>

                <FilterableMedicalTreatmentList medical_treatment_headers={this.state.medical_treatment_headers}
                                                medical_treatment_list={this.state.medical_treatment_list}/>
            </div>
        );
    }
}

export default MedicalTreatmentPanel;