document.getElementById('storeButton').addEventListener('click', function () {
    let key = document.getElementById('storeKey').value;
    let value = document.getElementById('storeValue').value;
    // should be unique how to do that ?
    // retreive val with the specified key
    if (window.localStorage[key] === value) alert('Duplicate Data')
    else localStorage.setItem(key, value);

}, false);

document.getElementById('retrieveButton').addEventListener('click', function () {
    let key = document.getElementById('retrieveKey').value;
    let data = document.getElementById('data');
    data.innerHTML += `<p>` + window.localStorage[key] + `</p>`;
}, false);
