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
        let word_input = 'word';
        word_input = item.innerText.toString().toLowerCase();
        // Data Input : Fetch
        const result = async function () {
            const word = await fetch(`https://dictionaryapi.com/api/v3/references/sd3/json/${word_input}?key=c81949f8-2a54-4ed6-b9c8-b9d091eab5d3`);
            return word.json();
        }

        // Filter Logic : Get Only The Words Definitions
        result().then((data) => {
            let entries = data.entries();
            let first_iteration = entries.next();
            let items = first_iteration.value;
            let definition = items[1].shortdef;
            let fl = items[1].fl;
            let word_title = items[1].hwi.hw.toUpperCase();

            popup.innerHTML = `
             <h3 id="word_title">${word_title}</h3>
             <a class="close" href="#">&times;</a>
             <div class="content word_def">
                 <i><strong>${fl}</strong> : ${definition}</i>
                 <br>
             </div>`;
            document.getElementById('click_it').click();
        });

    })
});
