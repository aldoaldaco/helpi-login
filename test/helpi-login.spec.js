/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../helpi-login.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<helpi-login></helpi-login>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
