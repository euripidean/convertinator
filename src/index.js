"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversionType = exports.Convert = void 0;
var ConversionType;
(function (ConversionType) {
    ConversionType["Celsius to Fahrenheit"] = "CF";
    ConversionType["Fahrenheit to Celsius"] = "FC";
    ConversionType["Kilometers to Miles"] = "KM";
    ConversionType["Miles to Kilometers"] = "MK";
    ConversionType["Kilograms to Pounds"] = "KLB";
    ConversionType["Pounds to Kilograms"] = "LBK";
    ConversionType["Liters to Gallons"] = "LG";
    ConversionType["Gallons to Liters"] = "GL";
})(ConversionType || (exports.ConversionType = ConversionType = {}));
var Convert = /** @class */ (function () {
    function Convert(value, conversionType) {
        this.value = value;
        this.conversionType = conversionType;
        this.convertedValue = this.perform();
    }
    Convert.prototype.getValue = function () {
        return this.value;
    };
    Convert.prototype.setValue = function (value) {
        this.value = value;
    };
    Convert.prototype.getConversionType = function () {
        return this.conversionType;
    };
    Convert.prototype.setConversionType = function (conversionType) {
        this.conversionType = conversionType;
    };
    Convert.prototype.perform = function () {
        var conversionFunction = Convert.conversionFunctions[this.conversionType];
        if (conversionFunction) {
            this.convertedValue = conversionFunction(this.value);
            return this.convertedValue;
        }
        else {
            return 0;
        }
    };
    Convert.CelsiusToFahrenheitFactor = 9 / 5;
    Convert.FahrenheitToCelsiusFactor = 5 / 9;
    Convert.KilometersToMilesFactor = 0.621371;
    Convert.MilesToKilometersFactor = 1.60934;
    Convert.KilogramsToPoundsFactor = 2.20462;
    Convert.PoundsToKilogramsFactor = 0.453592;
    Convert.LitersToGallonsFactor = 0.264172;
    Convert.GallonsToLitersFactor = 3.78541;
    Convert.conversionFunctions = (_a = {},
        _a[ConversionType["Celsius to Fahrenheit"]] = function (value) {
            return value * Convert.CelsiusToFahrenheitFactor + 32;
        },
        _a[ConversionType["Fahrenheit to Celsius"]] = function (value) {
            return (value - 32) * Convert.FahrenheitToCelsiusFactor;
        },
        _a[ConversionType["Kilometers to Miles"]] = function (value) {
            return value * Convert.KilometersToMilesFactor;
        },
        _a[ConversionType["Miles to Kilometers"]] = function (value) {
            return value * Convert.MilesToKilometersFactor;
        },
        _a[ConversionType["Kilograms to Pounds"]] = function (value) {
            return value * Convert.KilogramsToPoundsFactor;
        },
        _a[ConversionType["Pounds to Kilograms"]] = function (value) {
            return value * Convert.PoundsToKilogramsFactor;
        },
        _a[ConversionType["Liters to Gallons"]] = function (value) {
            return value * Convert.LitersToGallonsFactor;
        },
        _a[ConversionType["Gallons to Liters"]] = function (value) {
            return value * Convert.GallonsToLitersFactor;
        },
        _a);
    return Convert;
}());
exports.Convert = Convert;
