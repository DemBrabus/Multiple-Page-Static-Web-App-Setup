//
//Index JS
//


import '../Styles/xxStyles.scss';
import './index.scss';

console.log('Hello from Index.js');

class Foo {
    constructor(){
        this.value = "foobar"
    }
    static instance() {
        return new Foo()
    }
    getValue() {
        return this.value
    }
}

console.log(Foo.instance().getValue())