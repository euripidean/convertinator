/**
 * A function type for conversion functions.
 * @param value - The input value to be converted.
 * @returns The converted value.
 */
type ConversionFunction = (value: number) => number;

/**
 * Enum representing different types of conversions.
 */
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

/**
 * Class for performing unit conversions.
 */
class Convert {
  /**
   * The original value before conversion.
   */
  value: number;

  /**
   * The type of conversion to be performed.
   */
  conversionType: ConversionType;

  /**
   * The converted value after performing the conversion.
   */
  convertedValue: number;

  /**
   * Creates an instance of the Convert class.
   * @param value - The original value before conversion.
   * @param conversionType - The type of conversion to be performed.
   * @throws Error if the value is not a valid number or if the conversion type is invalid.
   */
  constructor(value: number, conversionType: ConversionType) {
    if (isNaN(value)) {
      throw new Error("Invalid value. Enter a number.");
    }
    this.value = value;
    if (!Object.values(ConversionType).includes(conversionType)) {
      throw new Error(`Invalid conversion type: ${conversionType}`);
    }
    this.conversionType = conversionType;
    this.convertedValue = this.perform();
  }

  /**
   * Factor for converting Celsius to Fahrenheit.
   */
  private static readonly CelsiusToFahrenheitFactor = 9 / 5;

  /**
   * Factor for converting Fahrenheit to Celsius.
   */
  private static readonly FahrenheitToCelsiusFactor = 5 / 9;

  /**
   * Factor for converting Kilometers to Miles.
   */
  private static readonly KilometersToMilesFactor = 0.621371;

  /**
   * Factor for converting Miles to Kilometers.
   */
  private static readonly MilesToKilometersFactor = 1.60934;

  /**
   * Factor for converting Kilograms to Pounds.
   */
  private static readonly KilogramsToPoundsFactor = 2.20462;

  /**
   * Factor for converting Pounds to Kilograms.
   */
  private static readonly PoundsToKilogramsFactor = 0.453592;

  /**
   * Factor for converting Liters to Gallons.
   */
  private static readonly LitersToGallonsFactor = 0.264172;

  /**
   * Factor for converting Gallons to Liters.
   */
  private static readonly GallonsToLitersFactor = 3.78541;

  /**
   * Mapping of conversion types to their respective conversion functions.
   */
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

  /**
   * Get the original value before conversion.
   * @returns The original value.
   */
  getValue(): number {
    return this.value;
  }

  /**
   * Set the original value before conversion.
   * @param value - The new original value.
   */
  setValue(value: number): void {
    this.value = value;
  }

  /**
   * Get the type of conversion to be performed.
   * @returns The conversion type.
   */
  getConversionType(): ConversionType {
    return this.conversionType;
  }

  /**
   * Set the type of conversion to be performed.
   * @param conversionType - The new conversion type.
   */
  setConversionType(conversionType: ConversionType): void {
    this.conversionType = conversionType;
  }

  /**
   * Perform the conversion and return the converted value.
   * @returns The converted value.
   */
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
