import getDateInTz from "./index.js";
import { endOfMonth } from "date-fns";
import { expect } from "chai";

const TIMEZONE = "America/Chicago";
const summerNight = "2021-07-01 20:05";
const winterNight = "2021-12-05 20:05";

describe("tz", () => {
  it("get date in tz", () => {
    expect(getDateInTz(summerNight, TIMEZONE).toISOString()).to.equal(
      "2021-07-02T01:05:00.000Z"
    );
    expect(getDateInTz(new Date(summerNight), TIMEZONE).toISOString()).to.equal(
      "2021-07-02T01:05:00.000Z"
    );
    expect(getDateInTz(winterNight, TIMEZONE).toISOString()).to.equal(
      "2021-12-06T02:05:00.000Z"
    );
    expect(getDateInTz(new Date(winterNight), TIMEZONE).toISOString()).to.equal(
      "2021-12-06T02:05:00.000Z"
    );
  });
  it("lower time fidelity", () => {
    expect(
      getDateInTz(endOfMonth(new Date(summerNight)), TIMEZONE).toISOString()
    ).to.equal("2021-08-01T04:59:59.999Z");
  });
});
