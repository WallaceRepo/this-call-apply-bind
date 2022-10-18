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
