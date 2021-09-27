$(document).ready(function () {

    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let charNumber = 0
    let sentenceIndex = 0
    let currentLetter = sentences[sentenceIndex].substring(charNumber, charNumber + 1);
    let yellowBlock = $("#yellow-block")
    let counter = 17
    let totalLetters = 0
    let mistakes = 0



    $("#keyboard-upper-container").hide();
    $("#sentence").text(sentences[sentenceIndex])
    $("#target-letter").text(sentences[sentenceIndex][charNumber]);



    $(document).keydown(function (event) {
        totalLetters++
        if (totalLetters == 1) {

            startDate = new Date();
            startTime = startDate.getTime();

        }


        if (event.key == sentences[sentenceIndex][charNumber]) {
            yellowBlock.css("left", `${counter}px`)
            charNumber++
            let correct = $("<span>✔</span>");
            $("span").css("color", "green")
            $(correct).addClass('green');
            $(correct).appendTo("#feedback");
            $("#target-letter").empty()
            $("#target-letter").text(sentences[sentenceIndex][charNumber]);
        }

        else {
            let incorrect = $("<span>✗</span>");
            $("span").css("color", "red")
            $(incorrect).addClass('red');
            $(incorrect).appendTo("#feedback");
            mistakes++
        }

        if (charNumber === sentences[sentenceIndex].length) {
            sentenceIndex++
            charNumber = 0
            counter = 17.2
            $("#sentence").text(sentences[sentenceIndex])
            $("#target-letter").text(sentences[sentenceIndex][charNumber]);
        }

        counter += 17



        if (event.shiftKey) {
            $("#keyboard-upper-container").show();
            $("#keyboard-lower-container").hide();
        }

    })


    $(document).keypress(function (event) {

        $(`#${event.which}`).css("background-color", "yellow");
    })

    $(document).keyup(function (event) {

        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();

        $(`#${event.key.charCodeAt(0)}`).css("background-color", "")




        if (sentenceIndex === sentences.length) {

            let endDate = new Date();
            let endTime = endDate.getTime();
            let minutes = (endTime - startTime) / 60000;

            wpm = Math.round(54 / minutes - 2 * mistakes);

            let results = confirm("You type " + wpm + " words per minute. Would you like to try again?");

            if (results == true) {

                location.reload();
            }
        }



    })
})






