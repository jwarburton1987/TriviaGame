$(document).ready(function () {
    //timer is done this is teh correct format for a functional timer.

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.text(minutes + ":" + seconds);

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    jQuery(function ($) {
        var fiveMinutes = 60 * 5,
            display = $('#time');
        startTimer(fiveMinutes, display);
    });

    //this is the end of the timer

    //this is the array and variables



    var hockeyQuestion = [{

        //question 1 correct answer nicklaus lidstrom
        question: "Who was the Detroit Red Wings captain in thier last stanley cup victory?",
        choices: ["Nicklaus Lidstrom", "Pavel Datsyuk", "Kris Draper", "Henrik Zetterberg"],
        //images:  ["../images/Rajah.gif"],
        validAnswer: 0
    },
    //question 2 answer sidney crosby
    {
        question: "In the 2008-2009 hockey season who was the capatain for the penguins when they won?",
        choices: ["Evgeni Malkin", "Brooks Orpik", "Sidney Crosby", "Rob Scuderi"],
        validAnswer: 2

    },
    //question 3 correct answer jonathon toews
    {
        question: "In the 2009-2010 NHL season who was the captain for the Black Hawks?",
        choices: ["Duncan Keith", "Jonathon Toews", "Joel Queenneville", "Patrick Kane"],
        validAnswer: 1


        //this is question 4 answer is zdeno chara
    }, {
        question: "Who was the captain of the winning team for the 2010-2011 Stanley cup?",
        choices: ["Zdeno Chara", "Claude Julien", "Alain Vigneault", "Patrice Bergeron"],
        validAnswer: 0

    },

    //this is question 5 answer is dustin brown
    {
        question: "Who was the captain of the winning team for the 2011-2012 Stanley cup?",
        choices: ["Dustin Brown", "Matt Greene", "Anze Kopitar", "Kyle Clifford"],
        validAnswer: 0

    },
    //this is question 6 the answer is jonathon toews

    {
        question: "Who was the captain of the winning team for the 2012-2013 Stanley cup?",
        choices: ["Patrick Kane", "Jonathon Toews", "Duncan Keith", "Patrick Sharp"],
        validAnswer: 2

    },

    //this is question 7 The correct answer is dustin brown
    {
        question: "Who was the captain of the winning team for the 2013-2014 Stanley cup?",
        choices: ["Mike Richards", "Anze Kopitar", "Matt Greene", "Dustin Brown"],
        validAnswer: 3

    },

    //This is question 8 the correct answer in jonathon toews 
    {
        question: "Who was the captain of the winning team for the 2014-2015 Stanley cup?",
        choices: ["Jonathon Toews", "Duncan Keith", "Patrick Sharp", "Patrick Kane"],
        validAnswer: 0

    },

    //this is question 9 the correct answer is sidny crosby

    {
        question: "Who was the captain of the winning team for the 2015-2016 Stanley cup?",
        choices: ["Marc-Andre Fleury", "Evgeni Malkin", "Sidney Crosby", "Chris Kunitz"],
        validAnswer: 2

    },
    //this is question 10 the correct answer is alex ovechkin
    {
        question: "Who was the captain of the winning team for the 2017/2018 Stanley cup?",
        choices: ["Alex Ovechkin", "Nicklas Backstrom", "Braden Holtby", "Brooks Orpik"],
        validAnswer: 0

    }

    ];


    var answer = hockeyQuestion[i].validAnswer;

















































var timer = 180;


function startGame() {



}








var timer = 180;




//function run() {
// clearInterval(intervalId);
// intervalId = setInterval(decrement, 1000);
//};
function countDown() {

    //  Decrease timer by one.
    timer--;

    //  Show the number in the #timer tag.
    $("#timer").text(timer);


}
//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.


function run() {

    setInterval(countDown, 1000);
}






countDown(timer);





//  Once number hits zero...
if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
}
