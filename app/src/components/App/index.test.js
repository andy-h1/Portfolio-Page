import { render } from "@testing-library/react";
import App from ".";

describe("App component", () => {
  it("should render", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
