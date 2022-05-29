let _list_items = document.querySelectorAll('.listItem');

_list_items.forEach((item) => {
    item.addEventListener('click', () => {
        // on every click go through all the item
        for (var i = 0; i < _list_items.length; i++) {
            _list_items[i].dataset.selected = false;
            _list_items[i].style.color = 'gray';
            _list_items[i].style.backgroundColor = 'white';
        }
        item.dataset.selected = true;
        item.style.cssText = `
            color:black;
            background-color: whitesmoke;
        `;

    })

/*
    if (item.dataset.depth == 2) {
        /!*
        | *** Better to use CSS attribute selector ***
        | item.style.cssText = `
        | margin-left: .7em;
        | border-left: 1px solid gray;
        | padding-left: .3em;`;
        |
        | ***OR***
        | item.style.marginLeft = ".5em";
        | item.style.borderLeft = "1px solid gray";
        | item.style.paddingLeft = ".3em";
        *!/
    }
*/

});

