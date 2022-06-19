// Selection Logic : Select Only Words
const word = document.querySelectorAll('.text');

// Dom : Add Span To Each Word
function addSpan(item) {
    let html = item.innerText;
    let words = html.split(" ");    let newHtml = "";

    // Todo add REGEX to make sure you only select str chars.

    for (let i = 0; i < words.length; i++) {
        newHtml += '<span class="line">' + words[i] + '</span> ';
    }

    item.innerHTML = newHtml;
}

word.forEach((item)=>{
    addSpan(item);
})


const def = document.querySelectorAll('.line');
def.forEach((item) => {
    item.addEventListener('dblclick', () => {
        let word_title = item.innerText.toString().toUpperCase();
        let word_input = item.innerText.toString().toLowerCase();
        // Data Input : Fetch
        const result = async function () {
            const word = await fetch(`https://dictionaryapi.com/api/v3/references/sd3/json/${word_input}?key=c81949f8-2a54-4ed6-b9c8-b9d091eab5d3`);
            return word.json();
        }

        // Filter Logic : Get Only The Words Definitions
        result().then((data) => {
            let definition = Array();
            const map_data = data.map(item_lvl1 => {
                if (item_lvl1.fl === "noun" && item_lvl1.hasOwnProperty('hom')) {
                    definition[0] = `NOUN : ${item_lvl1.shortdef}`;
                } else if (item_lvl1.hasOwnProperty('hom')) {
                    // console.log(item_lvl1)
                    definition [1] = `${item_lvl1.fl.toUpperCase()} : ${item_lvl1.shortdef}`;
                }
            })

            popup.innerHTML = `
             <h3 id="word_title">${word_title}</h3>
             <a class="close" href="#">&times;</a>
             <div class="content word_def">
                 <i>${definition[0]}</i>
                 <br>
                 <p></p>
                 <i>${definition[1]}</i>
             </div>`;
            document.getElementById('click_it').click();
        });

    })
});
