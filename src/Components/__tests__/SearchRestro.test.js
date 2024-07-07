import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/RestroListMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

test("Should contain search button once the Body renders", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const searchButton = screen.getByRole("button", { name: "Search" });

    expect(searchButton).toBeInTheDocument();
});


test("Should search Restro List for sweet text input", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );
    const restroCardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(restroCardsBeforeFilter.length).toBe(20);

    const searchButton = screen.getByRole("button", { name: "Search" });

    const inputSearch = screen.getByTestId("searchInput");

    fireEvent.change(inputSearch, { target: { value: "pizza" } });

    fireEvent.click(searchButton);

    const restroCardsAfterFilter = screen.getAllByTestId("resCard");

    expect(restroCardsAfterFilter.length).toBe(2);
})

test("Should search Top Rated Restuarant", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter >
        )
    );

    const restroCardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(restroCardsBeforeFilter.length).toBe(20);

    const topRatedButton = screen.getByRole("button", { name: "Top Rated" });

    fireEvent.click(topRatedButton);

    const restroCardsAfterFilter = screen.getAllByTestId("resCard");

    expect(restroCardsAfterFilter.length).toBe(19);

})