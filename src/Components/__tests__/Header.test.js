import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";

test("should contain Home text in the Header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    );

    const statusText = screen.getByText(/Status/);

    expect(statusText).toBeInTheDocument();
});

test("should contain login button in the Header component", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"Login"});

    expect(loginButton).toBeInTheDocument();
});

test("should render Header component with a cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    );

    const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();
});

test("should change to Logout when we click on login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name:"Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name:"Logout"});

    expect(logoutButton).toBeInTheDocument();
});