import React from "react";
import { render } from "@testing-library/react";
import { WeatherTracker } from ".";

const props = {
  city: "London",
  country: "England",
  image: "01d",
  imgAlt: "sunny",
  timeStamp: 1598656029,
  weatherDesc: "clear sky",
  weatherTemp: 34,
  weatherTempFeelsLike: 36,
  wind: 1.0,
};

describe("Weather Tracker Component", () => {
  it("should render", () => {
    const { container } = render(<WeatherTracker {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
