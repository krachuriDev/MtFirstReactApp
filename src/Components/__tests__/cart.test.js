import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import MOCK_DATA from "../mocks/RestroDetailMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestuarantDetail from "../RestauarantDetail";
import { Provider } from "react-redux";
import appStore from "../../Utils/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    });
})

describe("Cart Integration test cases", () => {


    beforeEach(async () => {

        await act(async () =>
            render(
                <BrowserRouter>
                    <Provider store={appStore}>
                        <Header />
                        <Cart />
                        <RestuarantDetail />
                    </Provider>
                </BrowserRouter>
            )
        );

        const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });

        fireEvent.click(clearCartButton);
    })

    test("Should have the Special Gift Hampers text once restuarant items is rendered", () => {

        const itemText = screen.getByText("Harley's Special Gift Hampers (4)");

        expect(itemText).toBeInTheDocument();
    })

    test("Should update the Cart Item once the user click on the Add button in Items Menu", () => {

        const accordionHeader = screen.getByText("Harley's Special Gift Hampers (4)");

        fireEvent.click(accordionHeader);

        const foodItems = screen.getAllByTestId("foodItem");

        expect(foodItems.length).toBe(4);

        const addButtons = screen.getAllByRole("button", { name: "Add+" });

        fireEvent.click(addButtons[0]);

        const cartItemText = screen.getByText("Cart:- (1 Items)");

        expect(cartItemText).toBeInTheDocument();

    })

    test("Should update the Cart Items and Cart screen once the user click on the Item Button", () => {

        const accordionHeader = screen.getByText("Harley's Special Gift Hampers (4)");

        expect(accordionHeader).toBeInTheDocument();

        fireEvent.click(accordionHeader);

        const addButtons = screen.getAllByRole("button", { name: "Add+" });

        fireEvent.click(addButtons[0]);

        const totalFoodItems = screen.getAllByTestId("foodItem");

        expect(totalFoodItems.length).toBe(5);

        const cartItemText = screen.getByText("Cart:- (1 Items)");

        expect(cartItemText).toBeInTheDocument();

        const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });

        fireEvent.click(clearCartButton);

        const totalFoodItemsAfterClearingCart = screen.getAllByTestId("foodItem");

        expect(totalFoodItemsAfterClearingCart.length).toBe(4);

        expect(screen.getByText("Cart is empty. Please go ahead and add items to the cart"));

    })

});