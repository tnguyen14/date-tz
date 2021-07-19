import getDateInTz from "./index.js";
import { endOfMonth } from "date-fns";
import { expect } from "chai";

const CHICAGO = "America/Chicago";
const NEWYORK = "America/New_York";
const summerNight = "2021-07-01 20:05";
const winterNight = "2021-12-05 20:05";
const summerNightChicago = "2021-07-02T01:05:00.000Z";
const winterNightChicago = "2021-12-06T02:05:00.000Z";

describe("tz", () => {
  it("get date in tz", () => {
    expect(getDateInTz(summerNight, CHICAGO).toISOString()).to.equal(
      summerNightChicago
    );
    expect(getDateInTz(winterNight, CHICAGO).toISOString()).to.equal(
      winterNightChicago
    );
    expect(getDateInTz(new Date(winterNight), CHICAGO).toISOString()).to.equal(
      winterNightChicago
    );
  });
  it("date-fns methods", () => {
    expect(
      getDateInTz(endOfMonth(new Date(summerNight)), CHICAGO).toISOString()
    ).to.equal("2021-08-01T04:59:59.999Z");
  });
});
