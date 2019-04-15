import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 50px;
  padding-left: 20px;
  margin-bottom: 60px;
`;
const Upload = styled.div`
  border: 2px solid lightgrey;
  border-radius: 5px;
  width: 640px;
  height: 200px;
  font-size: 18px;
`;

function UploadFiles() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Section>
      <h2>Upload Bereich</h2>
      <Upload {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop it like it´s hot!</p>
        ) : (
          <p>
            Drag 'n' drop oder clicke hier um Dateien hochzuladen.
            <br />
            Hier kannst du Krankenversicherungsscheine, deine Ausbildungs
            Unterlagen oder eine Kopie deine Führerscheine hochladen.
          </p>
        )}
      </Upload>
    </Section>
  );
}

export default UploadFiles;
