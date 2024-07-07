import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestroCard, { EnhancedRestroCard } from "../RestroCard";
import RestuarantInfo from '../Mocks/RestroMock.json';

test("should have restuarant name in the Restro Card component", () => {
    render(<RestroCard response={RestuarantInfo} />);

    const restroName = screen.getByText('UBQ by Barbeque Nation');

    expect(restroName).toBeInTheDocument();
});

test("should have Promoted label in the Enhanced Restro Card component", () => {

    const RestroCardPromoted = EnhancedRestroCard(RestroCard);

    render(<RestroCardPromoted response={RestuarantInfo} />);

    const promotedLabel = screen.getByText('Promoted');

    expect(promotedLabel).toBeInTheDocument();
});