import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

describe("Portfolio Page Component", () => {
  test("displays a top-level heading with the text `Hi, I'm _______`", () => {
    // Arrange
    render(<App />);
    
    // Act
    const topLevelHeading = screen.getByRole("heading", {
      name: /hi, i'm/i,
      exact: false,
      level: 1,
    });

    // Assert
    expect(topLevelHeading).toBeInTheDocument();
  });

  test("displays an image of yourself with alt text", () => {
    // Arrange
    render(<App />);

    // Act
    const image = screen.getByAltText(/your alt text/i);

    // Assert
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "path/to/your/image.jpg");
  });

  test("displays a second-level heading with the text 'About Me'", () => {
    // Arrange
    render(<App />);

    // Act
    const aboutHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });

    // Assert
    expect(aboutHeading).toBeInTheDocument();
  });

  test("displays a paragraph with your biography", () => {
    // Arrange
    render(<App />);

    // Act
    const biographyParagraph = screen.getByText(/your biography text/i);

    // Assert
    expect(biographyParagraph).toBeInTheDocument();
  });

  test("displays links to your GitHub page and LinkedIn page", () => {
    // Arrange
    render(<App />);

    // Act
    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

    // Assert
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/yourusername");
  });
});
