import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";

interface JSONEditorProps {
  jsonSchema: string;
  setJsonSchema: (value: string) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ jsonSchema, setJsonSchema }) => {
  const [error, setError] = useState<string | null>(null);

  const handleEditorChange = (value: string) => {
    try {
      JSON.parse(value);
      setError(null);
    } catch (err) {
      setError("Invalid JSON");
    }
    setJsonSchema(value);
  };

  return (
    <div className="flex flex-col h-full">
      <MonacoEditor
        width="100%"
        height="90%"
        language="json"
        theme="vs-dark"
        value={jsonSchema}
        onChange={handleEditorChange}
      />
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default JSONEditor;
