/* eslint-disable max-len */

import { render } from "@testing-library/react";
import deliveroo from "../../tokens/CompanyLogos/deliveroo.png";
import { CVExperience } from ".";

const props = {
  dates: "Nov 2018 - Present",
  description: [
    "I joined the Deliveroo recruitment team focused on hiring Product Managers, Product Marketing Managers and Software Engineers. When I joined we were around 20+ in the team and now have grown to over 60+ internationally",
    "I have been involved in hiring across different levels of seniority but mostly focused on Senior/L6+.",
    "Aside from recruiting for the Engineering team at Deliveroo, I have been heavily involved in onboarding, training and building out our recruitment team.",
  ],
  image: deliveroo,
  imageAlt: "deliveroo",
  imageHeight: "auto",
  imageWidth: "60px",
  jobTitle: "Tech Recruiter",
  website: "https://deliveroo.co.uk/",
};

describe("CV Experience component", () => {
  it("should render", () => {
    const { container } = render(<CVExperience {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
