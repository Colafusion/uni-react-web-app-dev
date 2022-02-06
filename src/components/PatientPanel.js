import axios from "axios";
import React, {Component} from 'react';
import CreateTable from "./CreateTable";

class PatientPanel extends Component {
    //encapsulates the filterable table and provides the ability to add additional records
    constructor(props) {
        super(props);
        this.state = { //copy over the medical treatment props into state and set everything else to empty strings
            treatId: "",
            treatCourseId: "",
            type: "",
            category: "",
            name: "",
            startDate: "",
            patient_headers: "",
            patient_data: "",
            external_data: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fetchRecords = this.fetchRecords.bind(this);
        this.fetchPatientRecords = this.fetchPatientRecords.bind(this)
    }

    componentDidMount() {
        this.fetchRecords('patients/')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.fetchRecords('patients/')
    }

    async fetchRecords(args) {
        const response = await axios.get('http://localhost:8080/' + args)
        if (response.status === 200) {
            this.setState({
                patient_headers: JSON.stringify(response.data.data[0].keys),
                patient_data: JSON.stringify(response.data.data)
            })
            alert(JSON.stringify(response.data.data))
        }
    }


    fetchPatientRecords() {
        this.fetchRecords('patients/')


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
            patient_list: [...this.state.patient_list, newTreatment], //merge the new treatment with the others
            treatId: "", treatCourseId: "", type: "", category: "", name: "", startDate: "", //set the other bits back to empty strings
        })
        e.preventDefault() // prevent a refresh
    }

    render() {
        this.fetchRecords('patients/')
        return (
            <div>
                {this.state.patient_headers}
                {this.state.patient_data}
                {this.state.external_data}
                <CreateTable headers={this.state.patient_headers}
                             array={this.state.patient_data}/>
                {/*<form onSubmit={this.handleSubmit}>*/}
                {/*    <div>*/}
                {/*        {this.state.patient_headers.map(header => <input name={header} type="text"*/}
                {/*                                                         placeholder={header}*/}
                {/*                                                         value={this.state[{header}]}*/}
                {/*                                                         onChange={this.handleChange}/>)}*/}
                {/*        <button>Add new medical treatment</button>*/}
                {/*    </div>*/}
                {/*</form>*/}
                {/*<br/>*/}

                {/*<FilterableMedicalTreatmentList patient_headers={this.state.patient_headers}*/}
                {/*                                patient_list={this.state.patient_list}/>*/}

            </div>);
    }
}

export default PatientPanel;