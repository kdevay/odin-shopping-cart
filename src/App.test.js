import { render } from '@testing-library/react';
import "@testing-library/jest-dom"; // optional 
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import React from "react"; 
import App from "./App.js";
import Footer from "./components/Footer.js";
import Cart from "./components/Cart.js";
// import Shop from "./components/Shop.js";
// import Page from "./components/Page.js";
// import { RouterProvider, createMemoryRouter } from "react-router-dom";
// import routesConfig from '../routes';
// import { waitFor } from "@testing-library/react";
// import TestComponent from "path-to-test-component";

// app/ (aka home)
test('renders navbar logo', () => {
  const { getByRole, getAllByRole } = render(<App />);
  const f = getByRole("heading", { name: 'f'});
  const r = getByRole("heading", { name: 'r'});
  const t = getByRole("heading", { name: 't'});
  const o = getAllByRole("heading", { name: 'o'});
  expect(f).toBeInTheDocument();
  expect(r).toBeInTheDocument();
  expect(t).toBeInTheDocument();
  expect(o[0]).toBeInTheDocument();
  expect(o[1]).toBeInTheDocument();
});

test('renders navbar links', () => {
  const { getByRole } = render(<App />);
  const shop = getByRole("link", { name: 'shop'});
  const home = getByRole("link", { name: 'home'});
  const cartIcon = getByRole("link", { name: 'Shopping cart icon'});
  expect(shop).toBeInTheDocument();
  expect(home).toBeInTheDocument();
  expect(cartIcon).toBeInTheDocument();
});

test('renders page images', () => {
  const { getByRole } = render(<App />);
  const background = getByRole("img", { name: 'colorful squiggly lines'});
  const cartIcon = getByRole("img", { name: 'Shopping cart icon'});
  expect(background).toBeInTheDocument();
  expect(cartIcon).toBeInTheDocument();
});

test('renders home headings', () => {
  const { getByRole } = render(<App />);
  const head = getByRole("heading", { name: 'Welcome.'});
  const subHead = getByRole("heading", { name: 'buy the fruit, eat the fruit, poop the fruit'});
  expect(head).toBeInTheDocument();
  expect(subHead).toBeInTheDocument();
});

test('renders footer links', () => {
  const { getByRole } = render(<Footer />);
  const contact = getByRole("link", { name: 'Contact' });
  const terms = getByRole("link", { name: 'Terms of Use' });
  const privacy = getByRole("link", { name: 'Privacy Policy' });
  expect(contact).toBeInTheDocument();
  expect(terms).toBeInTheDocument();
  expect(privacy).toBeInTheDocument();
});

// test('renders cart', () => {
//   const { getByRole } = render(<cart />);
//   const privacy = getByRole("link", { name: 'Privacy Policy' });
//   expect(privacy).toBeInTheDocument();
// });

// test("click home goes to /home", async () => {
//   const router = createMemoryRouter(routesConfig, {
//     initialEntries: ["/posts"],
//   });

//   render(<RouterProvider router={router} />);

//   // make assertions, await changes, etc...
// });
