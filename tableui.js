function doFunction() {
    let odds = document.querySelectorAll('table tr:nth-child(odd)');
    odds.forEach((odds) => {
        //adds a class made in css. This class overides the set class of colors and picks this one
        odds.classList.add('zebra');
    });


}

function undoFunction() {
    let odds = document.querySelectorAll('table tr:nth-child(odd)');
    odds.forEach((odds) => {

        ///this code removes the recent class we aaded
        odds.classList.remove('zebra');
    });
}