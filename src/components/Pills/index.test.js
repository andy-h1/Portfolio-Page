import React from "react";
import { render } from "@testing-library/react";
import { Pills } from ".";

const props = {
  items: ["react", "styled-components", "jest", "react-testing-library"],
};

describe("Pills Component", () => {
  it("should render", () => {
    const { container } = render(<Pills {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
