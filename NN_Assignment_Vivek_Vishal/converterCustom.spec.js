/**
 * @file
 * additional set of test cases created in addition to converted.spec.js
 * reason - to test exported modules without using any library and own written set of JS functions
 * available in testUtils.js
 * Test results can be seen in SpecRunner.html
 */

import { dateToTimeString } from './converter.js';
import { describe, it , expect} from './testUtil.js';

describe('unit test executions for input validation', function () {
    it('should throw error when provided date is NaN', function () {
        expect(dateToTimeString(new Date("invalid date"))).toBe("Fatal Error : Incorrect date time inputs [code 400]");
    });

    it('should throw error when date consists partial string', function () {
        expect(dateToTimeString(new Date(2018,12,1,2,"xyz"))).toBe("Fatal Error : Incorrect date time inputs [code 400]");
    });
});


describe('Unit test executions for main method- dateToTimeString ', function () {

    it('should return time expected format with given input- 10,15 ', function () {
        expect(dateToTimeString(new Date(2018, 12, 20, 10, 15))).toBe("quarter past ten");
    })

    it('should return time expected format with given input - 10,20 ', function () {
        expect(dateToTimeString(new Date(2018, 12, 20, 10, 20))).toBe("twenty past ten");
    })

    it('should return time expected format with given input - 10,30 ', function () {
        expect(dateToTimeString(new Date(2018, 12, 20, 10, 30))).toBe("half past ten");
    })

    it('should return time expected format with given input - 10,45 ', function () {
        expect(dateToTimeString(new Date(2018, 12, 20, 10, 45))).toBe("quarter to eleven");
    })

    it('should return time expected format with given input - 10,37 ', function () {
        expect(dateToTimeString(new Date(2018, 12, 20, 10, 37))).toBe("twenty three to eleven");
    })

    it('should show the time 12 o clock in string when time is 24hrs ', function () {
        expect(dateToTimeString(new Date(2018, 12, 20, 24, 0))).toBe("twelve o'clock");
    })

});

