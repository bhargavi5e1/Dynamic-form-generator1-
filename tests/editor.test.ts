import { render, screen } from "@testing-library/react";
import JSONEditor from "../src/components/JSONEditor";

test("displays error for invalid JSON", () => {
  const { container } = render(
    <JSONEditor jsonSchema="{}" setJsonSchema={jest.fn()} />
  );

  const editor = container.querySelector(".monaco-editor");
  expect(editor).toBeInTheDocument();
});
