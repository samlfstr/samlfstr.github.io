'use strict';

/*Copy To Clipboard it uses Clipboard api*/

let clickToClipboard = document.querySelectorAll('.click');

clickToClipboard.forEach((item)=>{
    item.addEventListener('click',()=>{
        const innerText = item.innerText;
        navigator.clipboard.writeText(innerText);
    })
})

/*End Copy To Clipboard*/

/*Tippy*/

tippy('.copy', {
    content: "Copy Content",
    placement: "top-end",
    animation: 'fade',
});

/*End Tippy*/


// short name, version, display name, max size
var db = openDatabase('songs', '1.0', 'Favourite songs', 2 * 1024 * 1024);

db.transaction(function(tx) {
    //  tx.executeSql('DROP TABLE IF EXISTS songs');
    tx.executeSql(
        'CREATE TABLE IF NOT EXISTS songs (artist varchar(255), song varchar(255))',
        [], null, handleError);
}, null, null); // error handler, success handler

function addSong(artist, song) {
    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO songs (artist, song) VALUES (?, ?)', [artist,
            song
        ]);
    }, handleError, function() {
        log('Added: <br />' + song + ' by ' + artist);
    });
}

function findSong(text) {
    db.transaction(function(tx) { // readTransaction() is apparently faster
        var statement = 'SELECT artist, song FROM songs WHERE artist LIKE "%' +
            text + '%" OR song like "%' + text + '%"';
        // array unused here: ? field values not used in query statement
        tx.executeSql(statement, [], function(thisTx, results) {
            var numRows = results.rows.length;
            for (var i = 0; i !== numRows; ++i) {
                var row = results.rows.item(i);
                log('Found: <br />' + row.song + ' by ' + row.artist);
            }
        }, handleError);
    });
}

// tx.executeSql("DELETE FROM songs WHERE SONG=?", [song], handleError, null);

function handleError(transaction, error) {
    transaction = null; // dummy statement to avoid jshint error...
    log('Something went wrong: ' + error.message + ', code: ' + error.code);
    return false;
}

var dataElement = document.getElementById('data');

function log(message) {
    dataElement.innerHTML = message + '<br /><br />' + dataElement.innerHTML;
}

var storeButton = document.getElementById('storeButton');
var artist = document.getElementById('artist');
var song = document.getElementById('song');
storeButton.addEventListener('click', function() {
    addSong(artist.value, song.value);
});

var findButton = document.getElementById('findButton');
var query = document.getElementById('query');
findButton.addEventListener('click', function() {
    findSong(query.value);
});