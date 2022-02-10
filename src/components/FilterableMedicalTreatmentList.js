import React, {Component} from "react";
import CreateTable from "./CreateTable";
import SearchBar from "./SearchBar"

class FilterableMedicalTreatmentList extends Component {
    //encapsulates the table and provides filtering
    constructor(props) {
        super(props);
        this.state = {
            filterText: '', //set to empty str at first
        };

        this.handleSearchBarTextChange = this.handleSearchBarTextChange.bind(this);
    }

    handleSearchBarTextChange(filterText) {
        this.setState({
            filterText: filterText
        });
    }

    render() {
        const medical_treatment_headers = this.props.medical_treatment_headers
        const medical_treatment_list = this.props.medical_treatment_list
        //this filters the medical treatments based on search bar input. case-insensitive
        const filtered_medical_treatment_list = medical_treatment_list.filter(medical_treatment => medical_treatment.category.toLowerCase().includes(this.state.filterText.toLowerCase()))
        return (<div>
            Category: <SearchBar filterText={this.state.filterText}
                                 onFilterTextChange={this.handleSearchBarTextChange}/>
            <CreateTable headers={medical_treatment_headers}
                         array={filtered_medical_treatment_list}/>
        </div>)
    }
}

export default FilterableMedicalTreatmentList;