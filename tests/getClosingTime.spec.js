import { describe, it } from "node:test";
import * as assert from "node:assert/strict";
import { getClosingTime } from "../utils/getClosingTime.js";

const uds = "sb";
const hfm = "musiksb";
const htw = "htwcas";

describe("The canteen of the Saarland University", () => {
  it("closes at 14:15 on Fridays", () => {
    assert.deepStrictEqual(
      getClosingTime(uds, "Freitag, 6. Juni 2025"),
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
      assert.deepStrictEqual(getClosingTime(uds, dateString), expected);
    });
  });
});

describe("The canteen of the HfM", () => {
  [
    ["Montag, 6. Januar 2025", "Mondays", new Date(2025, 0, 6, 14, 0)],
    ["Dienstag, 15. April 2025", "Tuesdays", new Date(2025, 3, 15, 14, 0)],
    ["Mittwoch, 23. Juli 2025", "Wednesdays", new Date(2025, 6, 23, 14, 0)],
    ["Donnerstag, 7. August 2025", "Thursdays", new Date(2025, 7, 7, 14, 0)],
    ["Freitag, 28. November 2025", "Fridays", new Date(2025, 10, 28, 14, 0)],
  ].forEach(([dateString, weekday, expected]) => {
    it(`closes at 14:00 on ${weekday}`, () => {
      assert.deepStrictEqual(getClosingTime(hfm, dateString), expected);
    });
  });
});

describe("The canteen of the HTW", () => {
  [
    ["Montag, 24. Februar 2025", "Mondays", new Date(2025, 1, 24, 14, 15)],
    ["Dienstag, 2. Dezember 2025", "Tuesdays", new Date(2025, 11, 2, 14, 15)],
    ["Mittwoch, 9. Juli 2025", "Wednesdays", new Date(2025, 6, 9, 14, 15)],
    ["Donnerstag, 13. März 2025", "Thursdays", new Date(2025, 2, 13, 14, 15)],
    ["Freitag, 19. September 2025", "Fridays", new Date(2025, 8, 19, 14, 15)],
  ].forEach(([dateString, weekday, expected]) => {
    it(`closes at 14:15 on ${weekday}`, () => {
      assert.deepStrictEqual(getClosingTime(htw, dateString), expected);
    });
  });
});
