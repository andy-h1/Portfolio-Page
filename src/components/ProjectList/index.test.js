import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { ProjectList } from ".";

describe("Project List Component", () => {
  it("should render", () => {
    const { container } = render(
      <MemoryRouter>
        <ProjectList />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
