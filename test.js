import getDateInTz from "./index.js";

import { expect } from "chai";

const TIMEZONE = "America/Chicago";

describe("tz", () => {
  it("get date in tz", () => {
    const summerNight = "2021-07-01 20:05";
    expect(getDateInTz(summerNight, TIMEZONE).toISOString()).to.equal(
      "2021-07-02T01:05:00.000Z"
    );
    const winterNight = "2021-12-05 20:05";
    expect(getDateInTz(winterNight, TIMEZONE).toISOString()).to.equal(
      "2021-12-06T02:05:00.000Z"
    );
  });
});
