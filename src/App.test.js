import { render, screen, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "./App";

afterEach(() => {
    cleanup();
})

test('should render app component', () => {
    render(<App />);
    const appElement = screen.getByTestId('app-1');
    expect(appElement).toBeInTheDocument;
});

test("should be able to search and display ip address", async () => {
    render(<App />);
   //Simulate initiating the search request
    const searchBtn = screen.getByRole("button", { name: "search" });
    expect(searchBtn).not.toBeDisabled;
    userEvent.click(searchBtn);
    expect(await screen.findByText('Latitude').toBeInTheDocument && await screen.findByText('Longitude').toBeInTheDocument);
})
