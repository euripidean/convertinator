const { Convert } = require("../dist/index");

describe("Check constructor", () => {
  test("Check constructor", () => {
    const convert = new Convert(1, "CF");
    expect(convert.getValue()).toBe(1);
    expect(convert.getConversionType()).toBe("CF");
  });

  test("Check constructor with invalid conversion type - should throw an error", () => {
    expect(() => new Convert(1, "invalid")).toThrow(
      "Invalid conversion type: invalid"
    );
  });

  test("Check constructor with a NaN value - should throw an error", () => {
    expect(() => new Convert("invalid", "CF")).toThrow(
      "Invalid value. Enter a number."
    );
  });
});

describe("Check temperature conversions", () => {
  test("Check conversion from Celsius to Fahrenheit", () => {
    const convert = new Convert(1, "CF");
    expect(convert.perform()).toBe(33.8);
  });

  test("Check conversion from Fahrenheit to Celsius", () => {
    const convert = new Convert(1, "FC");
    expect(convert.perform()).toBe(-17.22222222222222);
  });
});

describe("Check distance conversions", () => {
  test("Check conversion from Kilometers to Miles", () => {
    const convert = new Convert(1, "KM");
    expect(convert.perform()).toBe(0.621371);
  });

  test("Check conversion from Miles to Kilometers", () => {
    const convert = new Convert(1, "MK");
    expect(convert.perform()).toBe(1.60934);
  });
});

describe("Check weight conversions", () => {
  test("Check conversion from Kilograms to Pounds", () => {
    const convert = new Convert(1, "KLB");
    expect(convert.perform()).toBe(2.20462);
  });

  test("Check conversion from Pounds to Kilograms", () => {
    const convert = new Convert(1, "LBK");
    expect(convert.perform()).toBe(0.453592);
  });
});

describe("Check volume conversions", () => {
  test("Check conversion from Liters to Gallons", () => {
    const convert = new Convert(1, "LG");
    expect(convert.perform()).toBe(0.264172);
  });

  test("Check conversion from Gallons to Liters", () => {
    const convert = new Convert(1, "GL");
    expect(convert.perform()).toBe(3.78541);
  });
});
