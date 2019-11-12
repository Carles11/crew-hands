/* eslint-disable no-lone-blocks */
import React from "react";

import { categoryOpts } from './options/DropdownOptions';

// import '../../../../../css/dropdown.css';
import Select from "react-select";
// import Multiselect from 'multiselect-dropdown-react';


const InputCategory = props => {

  // const  handleChange = e => {
  //   var options = categoryOpts;
  //   var categoriesSelection = [];
  //   for (var i = 0, l = options.length; i < l; i++) {
  //     if (options[i].selected) {
  //       categoriesSelection.push(options[i].value);
  //       return categoriesSelection.value;
  //     }
  //   }
  //   console.log(categoriesSelection);
  // }
  return(
      <Select
      closeMenuOnSelect={false}
      isMulti
      name={categoryOpts.name}
      options={categoryOpts}
      value={categoryOpts.value}
      className="basic-multi-select"
      classNamePrefix="select"
       />
  )
  
  // return (
  //   <select multiple>
  //     <option  value={props.ton}>Tontechnik</option>
  //     <option value={props.licht}>Lichttechnik</option>
  //     <option value={props.rigging}>Rigging</option>
  //     <option value={props.stagehand}>Stagehand</option>
  //     <option value={props.video}>Videotechnik</option>
  //     <option value={props.messebau}>Messebau</option>
  //     </select>

  // );
};

export default InputCategory;


