import React from "react";
import moment from "moment";

const JobTable = props => {
  return (
    <table>
    <thead>
      <tr>
        <th>Kunde</th>
        <th>Job Kategorie</th>
        <th>Job Datum</th>
        <th>Job Uhrzeit</th>

        <th />
      </tr>
    </thead>
    <tbody>
      {props.jobs.length > 0 ? (
        props.jobs.map(job => {  
          const showDate = moment(job.date).format("DD-MM-YYYY")
          const showTime = moment(job.starttime, "HH:mm").format("HH:mm")
          return(
          <tr key={job._id}>
            <td>{job.client}</td>
            <td>{job.category}</td>
            <td>{showDate}</td>
            <td>um {showTime}</td>

            <td>
              <button
                onClick={() => {
                  props.editRow(job._id);
                }}
              >
                Bearbeiten
              </button>
              <button
                onClick={() => props.deleteJob({...job})}
                className="button muted-button"
              >
                Löschen
              </button>
            </td>
          </tr>
        )})
      
      ) : (
          <tr>
            <td colSpan={3}>Jobsliste ist leer!</td>
          </tr>
        )}
    </tbody>
  </table>
);}

export default JobTable;
