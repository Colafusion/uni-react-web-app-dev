import MedicalTreatment from './components/MedicalTreatment';
import React, {Component} from 'react';
import MedicalTreatmentList from "./components/MedicalTreatmentList";
import FilterableMedicalTreatmentList from "./components/FilterableMedicalTreatmentList";
import MedicalTreatmentPanel from "./components/MedicalTreatmentPanel";

class App extends Component {
    render() {
        const headers = ["treatId", "treatCourseId", "type", "category", "name", "startDate"]
        const data = [
            {
                treatId: "1",
                treatCourseId: "2",
                type: "cosmetic",
                category: "face",
                name: "face lift",
                startDate: "10/10/2021"
            },
            {
                treatId: "2",
                treatCourseId: "3",
                type: "life saving",
                category: "body",
                name: "face lift",
                startDate: "11/10/2021"
            },
            {
                treatId: "3",
                treatCourseId: "4",
                type: "preventative",
                category: "leg",
                name: "face lift",
                startDate: "12/10/2021"
            },
            {
                treatId: "4",
                treatCourseId: "5",
                type: "cosmetic",
                category: "arm",
                name: "face lift",
                startDate: "13/10/2021"
            },
            {
                treatId: "5",
                treatCourseId: "6",
                type: "cosmetic",
                category: "body",
                name: "face lift",
                startDate: "14/10/2021"
            }
        ]
        return (
            <div>
                <h3>task 1.2</h3>
                <table>
                    <MedicalTreatment medical_treatment={data[0]}/>
                </table>
                <h3>task 2.2</h3>
                <MedicalTreatmentList headers={headers} array={data}/>

                <h3>task 2.3</h3>
                <FilterableMedicalTreatmentList medical_treatment_headers={headers} medical_treatment_list={data}/>
                <h3>task 3.1</h3>
                <MedicalTreatmentPanel medical_treatment_headers={headers} medical_treatment_list={data}/>
            </div>

        );
    }
}

export default App;
