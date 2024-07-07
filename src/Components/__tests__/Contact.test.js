import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("ContactUs Page Test cases",() => {

    beforeEach(()=>{
        console.info("Before Each");
    })

    beforeAll(()=>{
        console.info("Before All");
    })

    afterEach(()=>{
        console.info("AfterEach");
    })

    afterAll(()=>{
        console.info("After All");
    })

    test("should load header inside Contact component", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");

        //Assertion
        expect(heading).toBeInTheDocument();
    });

    test("should load button inside Contact component", () => {
        render(<Contact />);
        const button = screen.getByRole("button");

        //Assertion
        expect(button).toBeInTheDocument();
    });

    test("should load input textbox inside Contact component", () => {
        render(<Contact />);
        const name = screen.getByPlaceholderText("Enter your name");

        //Assertion
        expect(name).toBeInTheDocument();
    });

    test("should load all input textboxes inside Contact component", () => {
        render(<Contact />);

        //Querying
        const textBoxes = screen.getAllByRole("textbox");

        //Assertion
        expect(textBoxes.length).toBe(3);
    });

});