/**
 * 
 * @file
 * @description
 * This is a plain javascript test framework created to test exported modules in project 
 * Reason to create - simple and useful , no external library needed (as Mocha, jasmine, chai)
 * initially tried jasmine (doesnt support ES6 , mocha and chai uses library to be added in project )
 * 
 */




/**
 * @name printMessage
 * @description prints message /attaches test results to html element
 * @param {string} msg 
 * @param {string} id 
 */

const printMessage = (msg, id) => {
    let para = document.createElement('p');
        let node = document.createTextNode(msg);
        para.appendChild(node);
    if (id === 'it') {
        let element = document.getElementById('results');
        element.appendChild(para);  
    }
    else {
        let element = document.getElementById('status');
        element.appendChild(para);  
    }
      
}
 
/**
 * @module
 * @name describe
 * @description method call on describe , takes statement of describe block 
 * executes the function passed
 */
export const describe = (desc, fn) => {
       console.log(desc)
       fn()
}

 /**
  * @module
  * @name it
  * @param {string} msg statement message 
  * @param {function} fn function passed by it callback from spec 
  */ 
export const it = (msg, fn) => {
    printMessage( msg, "it")
    fn()
}

/**
 * @module
 * @name comparators
 * @description internal method called by callback expect method
 * only one assertion i.e. toBe used 
 * @param {*} exp expression to execute to compare /assert test results
 */
export const comparators = (exp) =>({
     toBe: (assertion) => {
         if (exp === assertion) {
            
            printMessage('Test passed','status');
        return true;
        }
        else {
             let msg = "Test failed --> expected value " + exp + "to be " + assertion;
             printMessage(msg, 'status');
            return false;
        }
        
    }
    
})

/**
 * @module
 * @name expect
 * @description expect method |accepts an expression passes to comparators
 * @param {*} exp expression passed 
 */
export const expect = (exp) => comparators(exp)