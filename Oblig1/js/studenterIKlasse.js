/*event listeners må kalle opp en anonym funksjon (som igjen kaller opp 'printStudent'), om ikke
vil printStudent bli kalt opp hver gang man deklarerer en event listener*/
document.getElementById("BIGEOMAT").addEventListener("click", function(){printStudent("BIGEOMAT")});
document.getElementById("BWU").addEventListener("click", function(){printStudent("BWU")});
document.getElementById("ÅRWEB").addEventListener("click", function(){printStudent("ÅRWEB")});
document.getElementById("BIXD").addEventListener("click", function(){printStudent("BIXD")});
document.getElementById("all").addEventListener("click", function(){printStudent("all")});

function printStudent(klasseInput){
    document.querySelector(".studenter").innerHTML = "";
    if(klasseInput!="all"){
        fetch('./studenter.json')
        .then(respons => respons.json())
        .then(data => {
            var studentlist = JSON.stringify(data)
            for(let i=0; i<JSON.parse(studentlist).length; i++){
                if(JSON.parse(studentlist)[i].forkortelse == klasseInput){
                    let newLi = document.createElement("li");
                    document.querySelector(".studenter").appendChild(newLi);
                    newLi.innerHTML = 
                    JSON.parse(studentlist)[i].fornavn + " " +
                    JSON.parse(studentlist)[i].etternavn + ", " +
                    JSON.parse(studentlist)[i].studieprogram + " (" +
                    JSON.parse(studentlist)[i].forkortelse + ")";
                }
            }
        }); 
    }

    else{
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
}