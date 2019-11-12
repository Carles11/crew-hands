import React from "react";
import moment from "moment";

const InputDate = props => {
            const showDate = moment(props.date).format("DD-MM-YYYY")

  return (
    <input
      type="date"
        name="date"
        placeholder="DD-MM-YYYY"
        pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
        value={showDate}
        onChange={props.handleInput}
    />
  );
};

export default InputDate;
