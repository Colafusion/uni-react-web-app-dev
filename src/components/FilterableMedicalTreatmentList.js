import React, {Component} from "react";
import MedicalTreatmentList from "./MedicalTreatmentList";
import SearchBar from "./SearchBar"

class FilterableMedicalTreatmentList extends Component {
    //encapsulates the table and provides filtering
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
        };

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        const medical_treatment_headers = this.props.medical_treatment_headers
        const medical_treatment_list = this.props.medical_treatment_list
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    onFilterTextChange={this.handleFilterTextChange}
                />
                <MedicalTreatmentList headers={medical_treatment_headers}
                                      array={medical_treatment_list.filter(medical_treatment => medical_treatment.category.toLowerCase().includes(this.state.filterText.toLowerCase()))}/>
            </div>
        )
    }
}

export default FilterableMedicalTreatmentList;