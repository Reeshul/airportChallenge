"use strict";

describe("Plane", function () {
  let plane;
  beforeEach(function () {
    plane = new plane();
  });
  it("can land at an airport", function () {
    expect(plane.land).not.toBeUndefined();
  });
});
