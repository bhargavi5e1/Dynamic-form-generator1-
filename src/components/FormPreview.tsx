import React, { useState } from "react";
import Ajv from "ajv";
import FormGenerator from "./FormGenerator";

interface FormPreviewProps {
  jsonSchema: string;
}

const FormPreview: React.FC<FormPreviewProps> = ({ jsonSchema }) => {
  const [isValid, setIsValid] = useState(true);
  const ajv = new Ajv();

  let schema: any;
  try {
    schema = JSON.parse(jsonSchema);
    ajv.compile(schema);
    setIsValid(true);
  } catch {
    setIsValid(false);
  }

  return (
    <div className="h-full">
      {!isValid ? (
        <div className="text-red-500">Invalid Schema</div>
      ) : (
        <FormGenerator schema={schema} />
      )}
    </div>
  );
};

export default FormPreview;
