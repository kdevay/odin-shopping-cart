import { render } from '@testing-library/react';
import "@testing-library/jest-dom"; // optional 
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import React from "react"; 
import App from "./App.js";



// button:

// Name "-":
// <button
//   class="incButtons"
//   data="0"
//   id="m"
// />

// Name "+":
// <button
//   class="incButtons"
//   data="0"
//   id="p"
// />
img:

describe("Nav 'Shop' link redirects to proper route", () => {
    it("shop contains all fruit", () => {
        const { getByRole } = render(<App />);
        const shop = getByRole("link", { name: 'shop'});
        act(() => {
            userEvent.click(shop);
        });
        const watermelon = getByRole("img", { name: "A whole watermelon speckled with drops of water"});
        const banana = getByRole("img", { name: "A bunch of bananas"});
        const papaya = getByRole("img", { name: "A sliced papaya"});
        const apple = getByRole("img", { name: "An apple"});
        const mango = getByRole("img", { name: "A whole mango"});
        const kiwi = getByRole("img", { name: "A sliced kiwi"});
        expect(watermelon).toBeInTheDocument();
        expect(banana).toBeInTheDocument();
        expect(papaya).toBeInTheDocument();
        expect(apple).toBeInTheDocument();
        expect(mango).toBeInTheDocument();
        expect(kiwi).toBeInTheDocument();
    });
    it("shop contains all + and - buttons", () => {
        const { getByRole, getAllByRole } = render(<App />);
        const shop = getByRole("link", { name: 'shop'});
        act(() => {
            userEvent.click(shop);
        });
        const plus = getAllByRole("button", { name: "+"});
        const minus = getAllByRole("button", { name: "-"});
        for (let i = 0; i < plus.length; i++){
            expect(plus[i]).toBeInTheDocument();
            expect(minus[i]).toBeInTheDocument();
        }
    });
    // it("shop", () => {
    //     const { getByRole, getById } = render(<App />);
    //     const shop = getByRole("link", { name: 'shop'});
    //     act(() => {
    //         userEvent.click(shop);
    //     });
    //     expect(getByRole("heading", { name: 'Beaver stew'})).toBeInTheDocument();
    // });

    // it("home", () => {
    //   const { getByRole } = render(<App />);
    //   const home = getByRole("link", { name: 'home'});
    //   userEvent.click(home);
    //   expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
    // });

    // it("cart", () => {
    //   render(<App />);
    //   const cartIcon = getByRole("link", { name: 'Shopping cart icon'});
    //   userEvent.click(cartIcon);
    //   expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
    // });
});