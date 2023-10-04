# @euripidean/convertinator

![example workflow](https://github.com/euripidean/convertinator/actions/workflows/node.js.yml/badge.svg)

[![npm version](https://img.shields.io/npm/v/@euripidean/convertinator)](https://www.npmjs.com/package/@euripidean/convertinator)
![GitHub](https://img.shields.io/github/license/euripidean/convertinator)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/euripidean/convertinator)
![GitHub issues](https://img.shields.io/github/issues/euripidean/convertinator)

## Introduction

`@euripidean/convertinator` is a JavaScript library that helps you with some of those tricksy conversions, so that you don't have to remember them.

## Installation

You can install the library using npm:

```bash
npm install @euripidean/convertinator

```

## Usage

Currently supported conversions:
**CF** = Celsius to Fahrenheit
**FC** = Fahrenheit to Celsius
**KM** = Kilometers to Miles
**MK** = Miles to Kilometers
**KLB** = Kilograms to Pounds
**LBK** = Pounds to Kilograms
**LG** = Liters to Gallons
**GL** = Gallons to Liters

```javascript
const { Convert } = require("@euripidean/convertinator");

// Create a new Conversion instance, passing in the value to convert and the ConversionType
const convert = new Convert(10, "CF");

// Get the converted value using the perform() method
console.log(convert.perform()); // 50
```
