import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
const { Form } = require("./components/Form");

describe("Client Test", () => {
  test("이름을 입력하는 input 요소가 존재해야 합니다", () => {
    const { container } = render(<Form />);
    const input = container.querySelector("input");

    expect(input).toBeInTheDocument();
    expect(input).toBeInstanceOf(HTMLElement);
    expect(input.tagName).toBe("INPUT");
  });
});