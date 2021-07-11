## date-tz

> Get date object for time at a timezone

### Usage

```js
import getDateInTz from "@tridnguyen/date-tz";

getDateInTz("2021-07-01 20:05", "America/Chicago").toISOString(); // 2021-07-02T01:05:00.000Z
getDateInTz(new Date("2021-12-05 20:05"), "America/Chicago").toISOString(); // 2021-12-06T02:05:00.000Z
```
