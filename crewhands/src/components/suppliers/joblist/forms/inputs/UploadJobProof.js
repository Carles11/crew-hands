import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const Upload = styled.div`
  border: 2px solid lightgrey;
  border-radius: 5px;
  width: 640px;
  height: 200px;
  font-size: 18px;
`;

function UploadJobProof() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <section>
      <label>Upload Bereich</label>
      <Upload {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop it like it´s hot!</p>
        ) : (
          <p>
            Drag 'n' drop oder clicke hier um Dateien hochzuladen.
            <br />
            Hier kannst du eine Leistungsnachweis oder andere für den Job
            wichtigen Dokumente hochladen. <br />
            Alles was du hier hochlädst, wird deine Crew zum herunterladen
            bereitgestellt.
          </p>
        )}
      </Upload>
    </section>
  );
}

export default UploadJobProof;
