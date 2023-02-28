import { render } from '@testing-library/react';
import "@testing-library/jest-dom"; // optional 
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import React from "react"; 
import App from "./App.js";

// const watermelon = getByRole("img", { Name "A whole watermelon speckled with drops of water"});
// const banana = getByRole("img", { Name "A bunch of bananas"});
// const papaya = getByRole("img", { Name "A sliced papaya"});
// const apple = getByRole("img", { Name "An apple"});
// const mango = getByRole("img", { Name "A whole mango"});
// const kiwi = getByRole("img", { Name "A sliced kiwi"});
// --------------------------------------------------
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

// Name "-":
// <button
//   class="incButtons"
//   data="1"
//   id="m"
// />

// Name "+":
// <button
//   class="incButtons"
//   data="1"
//   id="p"
// />

// Name "-":
// <button
//   class="incButtons"
//   data="2"
//   id="m"
// />

// Name "+":
// <button
//   class="incButtons"
//   data="2"
//   id="p"
// />

// Name "-":
// <button
//   class="incButtons"
//   data="3"
//   id="m"
// />

// Name "+":
// <button
//   class="incButtons"
//   data="3"
//   id="p"
// />

// Name "-":
// <button
//   class="incButtons"
//   data="4"
//   id="m"
// />

// Name "+":
// <button
//   class="incButtons"
//   data="4"
//   id="p"
// />

// Name "-":
// <button
//   class="incButtons"
//   data="5"
//   id="m"
// />

// Name "+":
// <button
//   class="incButtons"
//   data="5"
//   id="p"
// />

describe("Navbar links redirect to proper routes", () => {
    it("shop", () => {
        const { getByRole, getById } = render(<App />);
        const shop = getByRole("link", { name: 'shop'});
        act(() => {
            userEvent.click(shop);
        });
        expect(getByRole("heading", { name: 'Beaver stew'})).toBeInTheDocument();
    });

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