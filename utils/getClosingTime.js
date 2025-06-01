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
 * Depending on the weekday, the canteen close at different
 * times. For the closing times see also the
 * {@link https://www.stw-saarland.de/gastro/mensa-saarbruecken/ page of the Studentenwerk}.
 *
 * The closing time of the canteen is the closing time of
 * the latest counter. For the canteen at the Saarland
 * University, this means that it is the closing time of the
 * counter for Menü 1 and Menü 2.
 *
 * `dateString` is expected to be a string in the format
 * "Weekday, Day. Month Year" in German.
 *
 * @param {string} dateString The date string of the day for
 * which to compute the closing time
 * @returns {Date | undefined} The closing time of the
 * canteen for the day or undefined if the date string was
 * not in the expected format
 */
export function getClosingTime(dateString) {
  const convertedDateString = convertDate(dateString);

  if (convertedDateString === undefined) {
    return;
  }

  const convertedDate = new Date(convertedDateString);

  // mensa closes 15 minutes earlier on Fridays
  let closingMinutes = convertedDate.getDay() == 5 ? 15 : 30;
  return new Date(
    convertedDate.getFullYear(),
    convertedDate.getMonth(),
    convertedDate.getDate(),
    14,
    closingMinutes,
  );
}
