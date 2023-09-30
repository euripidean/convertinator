type ConversionFunction = (value: number) => number;

enum ConversionType {
  "Celsius to Fahrenheit" = "CF",
  "Fahrenheit to Celsius" = "FC",
  "Kilometers to Miles" = "KM",
  "Miles to Kilometers" = "MK",
  "Kilograms to Pounds" = "KLB",
  "Pounds to Kilograms" = "LBK",
  "Liters to Gallons" = "LG",
  "Gallons to Liters" = "GL",
}

class Convert {
  value: number;
  conversionType: ConversionType;
  convertedValue: number;

  constructor(value: number, conversionType: ConversionType) {
    this.value = value;
    if (!Object.values(ConversionType).includes(conversionType)) {
      throw new Error(`Invalid conversion type: ${conversionType}`);
    }
    this.conversionType = conversionType;
    this.convertedValue = this.perform();
  }

  private static readonly CelsiusToFahrenheitFactor = 9 / 5;
  private static readonly FahrenheitToCelsiusFactor = 5 / 9;
  private static readonly KilometersToMilesFactor = 0.621371;
  private static readonly MilesToKilometersFactor = 1.60934;
  private static readonly KilogramsToPoundsFactor = 2.20462;
  private static readonly PoundsToKilogramsFactor = 0.453592;
  private static readonly LitersToGallonsFactor = 0.264172;
  private static readonly GallonsToLitersFactor = 3.78541;
  private static readonly conversionFunctions: Record<
    ConversionType,
    ConversionFunction
  > = {
    [ConversionType["Celsius to Fahrenheit"]]: (value) =>
      value * Convert.CelsiusToFahrenheitFactor + 32,
    [ConversionType["Fahrenheit to Celsius"]]: (value) =>
      (value - 32) * Convert.FahrenheitToCelsiusFactor,
    [ConversionType["Kilometers to Miles"]]: (value) =>
      value * Convert.KilometersToMilesFactor,
    [ConversionType["Miles to Kilometers"]]: (value) =>
      value * Convert.MilesToKilometersFactor,
    [ConversionType["Kilograms to Pounds"]]: (value) =>
      value * Convert.KilogramsToPoundsFactor,
    [ConversionType["Pounds to Kilograms"]]: (value) =>
      value * Convert.PoundsToKilogramsFactor,
    [ConversionType["Liters to Gallons"]]: (value) =>
      value * Convert.LitersToGallonsFactor,
    [ConversionType["Gallons to Liters"]]: (value) =>
      value * Convert.GallonsToLitersFactor,
  };

  getValue(): number {
    return this.value;
  }

  setValue(value: number): void {
    this.value = value;
  }

  getConversionType(): ConversionType {
    return this.conversionType;
  }

  setConversionType(conversionType: ConversionType): void {
    this.conversionType = conversionType;
  }

  perform(): number {
    const conversionFunction = Convert.conversionFunctions[this.conversionType];
    if (conversionFunction) {
      this.convertedValue = conversionFunction(this.value);
      return this.convertedValue;
    } else {
      return 0;
    }
  }
}

export { Convert, ConversionType };
