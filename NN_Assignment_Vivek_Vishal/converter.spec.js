/**
 * @file
 * Set of test cases to test exported module dateToTimeString function
 * uses mocha and chai library , used CDN links in specRunner.html
 * results can be seen in SpecRunner.html
 */



import { dateToTimeString } from './converter.js'

describe('unit test executions for invalid date time input', ()=> {
    it('should throw error when provided date is NaN', ()=> {
        chai.expect(dateToTimeString(new Date("invaliddate"))).to.equal("Fatal Error : Incorrect date time inputs [code 400]");
    });

    it('should throw error when provided date is partially  in format 2018,12,1,2,"xyz"',()=> {
        chai.expect(dateToTimeString(new Date(2018,12,1,2,"xyz"))).to.equal("Fatal Error : Incorrect date time inputs [code 400]");
    });
    it('should pick the current date time when empty input is provided to method',()=> {
        chai.expect(dateToTimeString()).to.not.equal(undefined);
    });
})
describe('Unit test executions for main method- dateToTimeString ',()=> {

    it('should return time expected format with given input- 10,15 ',()=> {
        chai.expect(dateToTimeString(new Date(2018, 12, 20, 10, 15))).to.equal("quarter past ten");
    })

    it('should return time expected format with given input - 10,20 ',()=> {
        chai.expect(dateToTimeString(new Date(2018, 12, 20, 10, 20))).to.equal("twenty past ten");
    })

    it('should return time expected format with given input - 10,30 ',()=> {
        chai.expect(dateToTimeString(new Date(2018, 12, 20, 10, 30))).to.equal("half past ten");
    })

    it('should return time expected format with given input - 10,45 ',()=> {
        chai.expect(dateToTimeString(new Date(2018, 12, 20, 10, 45))).to.equal("quarter to eleven");
    })

    it('should return time expected format with given input - 10,37 ',()=> {
        chai.expect(dateToTimeString(new Date(2018, 12, 20, 10, 37))).to.equal("twenty three to eleven");
    })

    it('should show the time 12 o clock in string when 24 hours zero minutes are input',()=> {
        chai.expect(dateToTimeString(new Date(2018, 12, 20, 24, 0))).to.equal("twelve o'clock");
    })

    it('should return the correct time format when specific value is 24 : 01',()=> {
        chai.expect(dateToTimeString(new Date(2018, 12, 20, 24, 1))).to.equal("a minute past twelve");
    })

    it('should return the correct time format when specific value is 23 : 59',()=> {
        chai.expect(dateToTimeString(new Date(2018, 12, 20, 23, 59))).to.equal("a minute to twelve");
    })

});
