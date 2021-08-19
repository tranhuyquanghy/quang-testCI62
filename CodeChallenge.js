
async function getData(input) {
    let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`);
    let data = await res.json();

    let checked1 = document.getElementById("domain1").checked ;
    let checked2 = document.getElementById("domain2").checked ;
    let checked3 = document.getElementById("domain3").checked ;
    let result = document.querySelector('a');
    document.querySelector('small').innerHTML = 'Link generated'

    
    if (checked1) {
        result.href = data.result.full_short_link;
 
    }
    else if (checked2) {

    }
    else if (checked3) {

    }
}





let submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    let link = document.getElementById('input').value;
    getData(link);
});
