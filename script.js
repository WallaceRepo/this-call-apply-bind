var word = function() {
    console.log(this)
}

//word()

var words = {
    name: 'this is a word object',
    log: function(){
        var self = this
        this.name = 'New word is set'
        console.log(this)
         // below function won't change this.name.
         // preious object is lost and now pointing to global obj container. setname wont print.
         // it added this.name to global object.
        var setname = function(newname) {
            this.name = newname
        }
        setname('Updated!')
        console.log(this)
        // this is pointing to the this func, this.name is changed. setname changes this.name;
        var setname1 = function(newname) {
            self.name = newname
        }
        setname1('Updated Again!')
        console.log(this)
    }
}
words.log() 
{ name: 'New word is set', log: [Function: log] }
{ name: 'New word is set', log: [Function: log] }
{ name: 'Updated Again!', log: [Function: log] }

//.apply(this, [..args]), .call(this, arg1, arg2), .bind(this, arg1, arg2)

function quads(a, b) {
    return a * b;
}

function blue(){
   return quads.bind(this, 2, 3 )
}
function blue1(){
   return quads.call(this, 2, 3 )
}
function blue2(){
   return quads.apply(this, [2, 3] )
}
console.log(blue())
// Implement own .map() func for Array.
function newMap(func) {
    let destArr = []
    const srcArrLen = this.length;
    for(let i = 0; i < srcArrLen; i++) {
        destArr.push(func.call(this, this[i]))
    }
    return destArr
}

Object.defineProperty(Array.prototype, 'newMap', { value:newMap})

const arr = [1,2,4] // 
const newArr = arr.newMap(item => item+1);
console.log(newArr); // [ 2, 3, 5 ]

let a = [1,2,4].newMap(item => item+1);
console.log(a) // [ 2, 3, 5 ]

// Another way to implement .map() func

Array.prototype.myMap = function(callbackFn) {
    const len = this.length;
    const array = new Array(len);
    
    for(let i = 0; i < len; i++) {
       array[i] = callbackFn.call(this, this[i] ) 
    }
    return array;
}

let b = [1, 2, 3, 4].myMap((i) => i * i); // [ 1, 4, 9, 16 ]




