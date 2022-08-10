﻿export enum PropertiesModalMode {
  New,
  Edit
}

export const validText = (text: string): boolean => {
  return text && text.length > 0;
};

export const validTimeZone = (timeZone: string): boolean => {
  const timeZoneValidator = new RegExp("(\\+(0\\d|1[0-4])|-(0\\d|1[0-2])):(00|30|45)");
  return timeZoneValidator.test(timeZone);
};

export const validPhoneNumber = (telnum: string): boolean => {
  let result = true;
  if (telnum) {
    const arr: Array<string> = telnum.split("");
    arr.forEach((e) => {
      if (isNaN(parseInt(e)) && e != " " && e != "-" && e != "+") {
        result = false;
      }
    });
  }
  return result;
};
