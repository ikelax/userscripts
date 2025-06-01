/**
 * Converts a German date in the format "Weekday, Day. Month
 * Year" to "Day. Month Year", translating the month into
 * English.
 *
 * @param {string} date The date string to convert
 * @returns {string | undefined} The converted date string or undefined if the
 * date string was not in the expected format
 */
function convertDate(date) {
  const germanDate = date.split(", ")[1];

  return germanDate
    ?.replace("Januar", "January")
    ?.replace("Februar", "February")
    ?.replace("März", "March")
    ?.replace("Mai", "May")
    ?.replace("Juni", "June")
    ?.replace("Juli", "July")
    ?.replace("Oktober", "October")
    ?.replace("Dezember", "December");
}

/**
 * Depending on the weekday, the canteens close at different
 * times. For the closing times see also the
 * {@link https://www.stw-saarland.de/gastro/ page of the Studentenwerk}.
 *
 * The closing time of the canteen is the closing time of
 * the latest counter. For example, for the canteen at the
 * Saarland University, this means that it is the closing
 * time of the counter for Menü 1 and Menü 2.
 *
 * `dateString` is expected to be a string in the format
 * "Weekday, Day. Month Year" in German.
 *
 * @param {"sb" | "htwcas" | "musiksb"} canteen The canteen
 * @param {string} dateString The date string of the day in
 * the specified format
 * @returns {Date | undefined} The closing time for the
 * `canteen` and the day or undefined if the `dateString`
 * was not in the expected format
 */
export function getClosingTime(canteen, dateString) {
  const convertedDateString = convertDate(dateString);

  if (convertedDateString === undefined) {
    return;
  }

  const convertedDate = new Date(convertedDateString);

  let closingMinutes = getClosingMinutes(canteen, convertedDate.getDay());
  return new Date(
    convertedDate.getFullYear(),
    convertedDate.getMonth(),
    convertedDate.getDate(),
    14,
    closingMinutes,
  );
}

/**
 * The function does not check whether `canteen` is one of
 * the specified strings.
 *
 * @param {"sb" | "htwcas" | "musiksb"} canteen The canteen
 * @param {number} day The day of the week in the same
 * enumeration as the `getDay` property of `Date`
 * @returns {0 | 15 | 30} The minutes of the closing time
 * for the `canteen` and the day
 */
function getClosingMinutes(canteen, day) {
  switch (canteen) {
    case "musiksb":
      return 0;
    case "htwcas":
      return 15;
    case "sb":
      // The canteen closes 15 minutes earlier on Fridays.
      return day === 5 ? 15 : 30;
  }
}
