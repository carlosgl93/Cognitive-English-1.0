
function expandByUrl() {
    let getHash = window.location.hash;
    console.log(getHash);

    let getTarget = getHash.slice(1);
    console.log(getTarget);

    let targetButton = document.getElementById(getTarget);
    
    targetButton.click();


}

window.onload(expandByUrl());
