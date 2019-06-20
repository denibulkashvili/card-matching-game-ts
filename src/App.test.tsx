import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

import { StoreProvider } from "./Store";

it("matches snapshot", () => {
  const component = renderer.create(
    <StoreProvider>
      <App />
    </StoreProvider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

