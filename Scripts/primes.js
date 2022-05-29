let _titles = document.querySelectorAll('.title');
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

window.addEventListener('scroll', () => {
    let current = "";
    let list_item = "";
    _titles.forEach((title) => {
        const titleTop = title.offsetTop - 10;
        const titleHeight = title.clientHeight;

        if (pageYOffset >= titleTop) {
            current = title.getAttribute('id');

            for (var i = 0; i < _list_items.length; i++) {
                list_item = _list_items[i].dataset.title;
                if (current == list_item) {
                    _list_items[i].dataset.selected = true;
                    _list_items[i].style.cssText = `
                        color:black;
                        background-color: whitesmoke;
                    `;
                }else{
                    _list_items[i].dataset.selected = false;
                    _list_items[i].style.color = 'gray';
                    _list_items[i].style.backgroundColor = 'white';
                }
            }


        }


    })

})

