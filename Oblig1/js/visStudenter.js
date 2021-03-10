printStudent();
function printStudent(){
    fetch('./studenter.json')
    .then(respons => respons.json())
    .then(data => {
        var studentlist = JSON.stringify(data)
        for(let i=0; i<JSON.parse(studentlist).length; i++){
            let newLi = document.createElement("li");
            document.querySelector(".studenter").appendChild(newLi);
            newLi.innerHTML = 
            JSON.parse(studentlist)[i].fornavn + " " +
            JSON.parse(studentlist)[i].etternavn + ", " +
            JSON.parse(studentlist)[i].studieprogram + " (" +
            JSON.parse(studentlist)[i].forkortelse + ")";
        }
    });    
}

