let score = 0;
function yourScore () {
    if (document.getElementById("correct1").checked) {
        score++;
    }
    if (document.getElementById("correct2").checked) {
        score++;
    }

    if (document.getElementById("correct3").checked) {
        score++;
    }

    if (document.getElementById("correct41").checked && document.getElementById("correct42").checked) {
        score++;
    }

    if (document.getElementById("correct51").checked && document.getElementById("correct52").checked) {
        score++;
    }
    
    if (document.getElementById("correct61").checked && document.getElementById("correct62").checked) {
        score++;
    }

    if (document.getElementById("correct71").checked && document.getElementById("correct72").checked && document.getElementById("correct73").checked) {
        score++;
    }

    if (document.getElementById("correct81").checked && document.getElementById("correct82").checked && document.getElementById("correct83").checked) {
        score++;
    }

    if (document.getElementById("correct9").checked) {
        score++;
    }

    if (document.getElementById("correct10").checked) {
        score++;
    }

    if (document.getElementById("correct11").checked) {
        score++;
    }

    if (document.getElementById("correct12").checked) {
        score++;
    }

    if (document.getElementById("correct13").checked) {
        score++;
    }

    if (document.getElementById("correct14").checked) {
        score++;
    }

    if (document.getElementById("correct151").checked && document.getElementById("correct152").checked) {
        score++;
    }

    if (document.getElementById("correct161").checked && document.getElementById("correct162").checked) {
        score++;
    }

    if (document.getElementById("correct171").checked && document.getElementById("correct172").checked) {
        score++;
    }

    if (document.getElementById("correct171").checked && document.getElementById("correct172").checked) {
        score++;
    }

    if (document.getElementById("correct181").checked && document.getElementById("correct182").checked) {
        score++;
    }

    if (document.getElementById("correct191").checked && document.getElementById("correct192").checked) {
        score++;
    }

     if (document.getElementById("correct20").checked) {
        score++;
    }

     if (document.getElementById("correct21").checked) {
        score++;
    }

     if (document.getElementById("correct22").checked) {
        score++;
    }
    if (document.getElementById("correct231").checked && document.getElementById("correct232").checked) {
        score++;
    }

    if (document.getElementById("correct24").checked) {
        score++;
    }

    if (document.getElementById("correct25").checked) {
        score++;
    }

    if (document.getElementById("correct26").checked) {
        score++;
    }

    if (document.getElementById("correct27").checked) {
        score++;
    }

    if (document.getElementById("correct28").checked) {
        score++;
    }

    if (document.getElementById("correct29").checked) {
        score++;
    }

    if (document.getElementById("correct30").checked) {
        score++;
    }

    alert("your Score is "+ score + " out of 30" )
    //console.log("your Score is "+ score + " out of 25")
    //submitBtn = getElementById("submitBtn")
    //console.log(innerHTML)
}