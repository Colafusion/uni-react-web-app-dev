import ky from "ky";
import React, {useEffect, useState} from 'react';
import CreateTable from "./CreateTable";
import FilterableMedicalTreatmentList from "./FilterableMedicalTreatmentList";

function PatientPanel() {
    const [patient_headers, set_patient_headers] = useState(null);
    const [patient_data, set_patient_data] = useState(null);
    const [treatment_headers, set_treatment_headers] = useState(null);
    const [treatment_data, set_treatment_data] = useState(null);
    const [filtered_treatment_headers, filtered_set_treatment_headers] = useState(null);
    const [filtered_treatment_data, filtered_set_treatment_data] = useState(null);
    const [new_patient_data, add_new_patient] = useState({});
    const [patient_filter_data, set_patient_filter_data] = useState({});
    useEffect(() => {
        //fetch the initial data, [] means it only triggers once - not on each rerender
        fetchData('patients/', set_patient_headers, set_patient_data)
        fetchData('medical_treatments/', set_treatment_headers, set_treatment_data)

    }, [])

    function handleNewPatientChange(e) {
        new_patient_data[e.target.name] = e.target.value //[] allow us to set the state name dynamically based on the input "name" field

    }

    function handleTreatmentFilterChange(e) {
        patient_filter_data[e.target.name] = e.target.value //[] allow us to set the state name dynamically based on the input "name" field

    }

    const fetchData = async (args, set_value_1, set_value_2) => {
        //fetch the data with retry options
        const json = await ky.get('http://localhost:8080/' + args, {
            retry: {
                limit: 10,
                methods: ['get'],
                statusCodes: [413]
            }
        }).json();
        //we expect server data to be in a list of dictionary format, hence this.
        //for the first set value (headers) we grab the keys of the first object in the list
        set_value_1(Object.keys(json.data[0]));
        //then set the list itself as value 2 (data)
        set_value_2(json.data);


    }
    const pushPatientData = async (args) => {
        //pushes patient data to remote, .json() returning any response as a json obj, automatically completing the .then() cycle internally
        const json = await ky.post('http://localhost:8080/patients', {json: args}).json();
        console.log(JSON.stringify(json))
        alert(JSON.stringify(json))

    }

    function handleNewPatientSubmit() {
        //pushes patient data to server before setting new_patient_data to an empty dictionary
        pushPatientData(new_patient_data)
        add_new_patient({})

    }

    function handleFilterPatientSubmit(e) {
        //form query - e.g. http://localhost:8080/patients/search?patient_id=1&first_name=Howard
        //maps the filter option dictionary and turns each one into key=value, before joining them with &.
        const form_url = "/medical_treatments/search?" + Object.keys(patient_filter_data).map(key => `${key}=${patient_filter_data[key]}`).join('&')
        fetchData(form_url, filtered_set_treatment_headers, filtered_set_treatment_data) //fetch the data
        e.preventDefault(); //stop a fresh
        set_patient_filter_data(null) //return our filter query to null

    }


    //series of if false checks (as the default state is null) - used to force return of fetched data
    if (!patient_headers) {
        return null
    }
    if (!patient_data) {
        return null;
    }

    if (!treatment_headers) {
        return null;
    }
    if (!treatment_data) {
        return null;
    }


    return (< div>
        <h1>Add patient</h1>
        <form onSubmit={handleNewPatientSubmit}>

            <div>

                {patient_headers.map(header => <input name={header} type="text"

                                                      placeholder={header}

                                                      value={new_patient_data[header]}

                                                      onChange={handleNewPatientChange}/>)}

                <button>Add new patient</button>
            </div>
        </form>
        <h2>List patient data</h2>
        <CreateTable headers={patient_headers}
                     array={patient_data}/>

        <h1>Filter patient treatments</h1>
        <form onSubmit={handleFilterPatientSubmit}>

            <div>

                {patient_headers.map(header => <input name={header} type="text"

                                                      placeholder={header}

                                                      value={patient_filter_data[header]}

                                                      onChange={handleTreatmentFilterChange}/>)}

                <button>Filter patients</button>

            </div>

        </form>
        <h2>Filtered treatment list</h2>
        {filtered_treatment_headers &&
            <FilterableMedicalTreatmentList
                medical_treatment_headers={filtered_treatment_headers}
                medical_treatment_list={filtered_treatment_data}/>

        }
        <h1>Treatment list</h1>

        <FilterableMedicalTreatmentList
            medical_treatment_headers={treatment_headers}
            medical_treatment_list={treatment_data}/>


    </div>);

}


export default PatientPanel;