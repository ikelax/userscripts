import { describe, it } from "node:test";
import * as assert from "node:assert/strict";
import { getClosingTime } from "../utils/getClosingTime.js";

describe("The canteen of the Saarland University", () => {
  it("closes at 14:15 on Fridays", () => {
    assert.deepStrictEqual(
      getClosingTime("Freitag, 6. Juni 2025"),
      new Date(2025, 5, 6, 14, 15),
    );
  });

  [
    ["Montag, 23. September 2024", "Mondays", new Date(2024, 8, 23, 14, 30)],
    ["Dienstag, 29. Februar 2000", "Tuesdays", new Date(2000, 1, 29, 14, 30)],
    ["Mittwoch, 15. Oktober 2025", "Wednesdays", new Date(2025, 9, 15, 14, 30)],
    ["Donnerstag, 7. März 1991", "Thursdays", new Date(1991, 2, 7, 14, 30)],
  ].forEach(([dateString, weekday, expected]) => {
    it(`closes at 14:30 on ${weekday}`, () => {
      assert.deepStrictEqual(getClosingTime(dateString), expected);
    });
  });
});
