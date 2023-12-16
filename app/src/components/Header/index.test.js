// MemoryRouter === BrowserRouter but for testing
import { MemoryRouter } from "react-router-dom";
// a testing version of rendering
import { render } from "@testing-library/react";
// your actual component to render
import { Header } from ".";

describe("Header component", () => {
  it("should render", () => {
    // render the component
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // checking it looks as expected
    expect(container.firstChild).toMatchSnapshot();
  });
});
