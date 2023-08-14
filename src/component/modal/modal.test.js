import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import Modal from "."

describe("Modal component", () => {
  const sampleData = {
    title: "Sample modal Title",
    description: "This is a sample description for the modal component.",
  };

  test("renders the modal component with given title and description", () => {
    render(
      <Modal title={sampleData.title} visible={true} description={sampleData.description} />
    );

    // Check if the title is rendered
    const titleElement = screen.getByText(sampleData.title);
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered
    const descriptionElement = screen.getByText(sampleData.description);
    expect(descriptionElement).toBeInTheDocument();

    // Check if the Close button is rendered
    const buttonElement = screen.getByText("Close");
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClose handler when clicking outside the modal", () => {
    const onCloseMock = jest.fn();
    render(
      <Modal
        visible={true}
        onClose={onCloseMock}
        title={sampleData.title}
        description={sampleData.description}
      />
    );

    const backgroundElement = screen.getByTestId("modal-background");
    fireEvent.click(backgroundElement);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("calls onClose handler when the Close button is clicked", () =>
  {
    const onCloseMock = jest.fn()
    render(
      <Modal
        visible={true}
        onClose={onCloseMock}
        title={sampleData.title}
        description={sampleData.description}
      />
    )

    const buttonElement = screen.getByText("Close")
    fireEvent.click(buttonElement)

    expect(onCloseMock).toHaveBeenCalledTimes(1)
  })
})
