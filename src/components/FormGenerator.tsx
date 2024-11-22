import React, { useState } from "react";

interface FormGeneratorProps {
  schema: any;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSuccess(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(schema.properties).map((key) => {
        const field = schema.properties[key];
        return (
          <div key={key} className="flex flex-col">
            <label htmlFor={key} className="text-sm font-medium">
              {field.title || key}
            </label>
            <input
              id={key}
              type={field.type || "text"}
              value={formData[key] || ""}
              onChange={(e) => handleChange(key, e.target.value)}
              required={field.required}
              className="border rounded p-2"
            />
          </div>
        );
      })}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
      {success && <div className="text-green-500">Form Submitted!</div>}
    </form>
  );
};

export default FormGenerator;
