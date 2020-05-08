import React from "react";

const JobTable = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Kunde</td>
          <td>Kategorie</td>
          <td>
            <button>Bestätigen</button>
            <button className="button muted-button">Ablehnen</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default JobTable;
