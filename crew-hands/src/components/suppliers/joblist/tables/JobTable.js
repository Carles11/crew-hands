import React from "react";

const JobTable = props => (
  <table>
    <thead>
      <tr>
        <th>Kunde</th>
        <th>Job Kategorie</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {props.jobs.length > 0 ? (
        props.jobs.map(job => (
          <tr key={job.id}>
            <td>{job.client}</td>
            <td>{job.category}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(job);
                }}
              >
                Bearbeiten
              </button>
              <button
                onClick={() => props.deleteJob(job.id)}
                className="button muted-button"
              >
                Löschen
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Jobsliste ist leer!</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default JobTable;