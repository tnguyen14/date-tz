## date-tz

> Get date object for time at a timezone

### Usage

```js
import getDateInTz from "@tridnguyen/date-tz";

getDateInTz("2021-07-01 20:05", "America/Chicago").toISOString(); // 2021-07-02T01:05:00.000Z
getDateInTz(new Date("2021-12-05 20:05"), "America/Chicago").toISOString(); // 2021-12-06T02:05:00.000Z

// new Date() will convert to local time
getDateInTz(
  new Date("2021-12-06T02:05:00.000Z"),
  "America/New_York"
).toISOString(); // 2021-12-06T02:05:00.000Z if local time is NY
getDateInTz(
  new Date("2021-12-06T02:05:00.000Z"),
  "America/New_York"
).toISOString(); // 2021-12-06T07:05:00.000Z if local time is UTC
```
