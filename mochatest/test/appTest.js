import {assert} from 'chai';
import * as app from "../app.js";

const sayHelloResult = app.sayHello();
const addNumbersResult = app.addNumbers(5,6);

describe('App', ()=>{
    describe('sayHello()', () =>{
        it('sayHelo should return hello', function(){
            assert.equal(sayHelloResult,'hello');
        });
        it('sayHello should return type string',() => {
            assert.typeOf(sayHelloResult,'string');
        });
    })
    describe('addNumbers()',() =>{
        it('addNumbers should be above 5',() => {
            assert.isAbove(addNumbersResult,5);
        });
        it('addNumbers should return type number',() => {
            assert.typeOf(addNumbersResult,'number');
        })
    })

});