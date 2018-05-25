let jsonfile = require('jsonfile');
let path = require('path');

let model = {
    reset: function() {
        let db = {};
        db.meta = {};
        db.meta.nextID = 0;
        db.meta.name = "sample-project";
        db.data = {};
        jsonfile.writeFileSync(path.join(__dirname, './db.json'), db)
    },    
    
    
	create: function(newObject) {
        let db = require('./db.json');
        let data = db.data;
        newObject.key = db.meta.nextID;
        data[db.meta.nextID] = newObject;
        db.meta.nextID = db.meta.nextID + 1;
        jsonfile.writeFileSync(path.join(__dirname, './db.json'), db)
    },
    update: function(id, newObject) {
        let db = require('./db.json');
        let data = db.data;
        let part = data[id];
        part = newObject;
        db.data[id] = part;
        jsonfile.writeFileSync(path.join(__dirname, './db.json'), db);
        
    },

    read_all: function() {
        let db = require('./db.json');
        return db.data

    },

    read_one: function(index) {
        let db = require('./db.json');
        let data = db.data;
        return data[index];
    },
    
    
    remove: function(index) {
        let db = require('./db.json');
        delete db.data[index];
        jsonfile.writeFileSync(path.join(__dirname, './db.json'), db)
    }
};


module.exports = model;


