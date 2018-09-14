var wins = 0;
var losses = 0;
var scoreGoal = 0;
var userScore = 0;

reset();

function reset() {
    scoreGoal = Math.floor(Math.random() * 101) + 19;
    $(".targetScore").text("Target Score: " + scoreGoal);
    console.log(scoreGoal);

    $(".spring").val(Math.floor(Math.random() * 12) + 1);
    $(".summer").val(Math.floor(Math.random() * 12) + 1);
    $(".fall").val(Math.floor(Math.random() * 12) + 1);
    $(".winter").val(Math.floor(Math.random() * 12) + 1);

    console.log($(".spring").val());
    console.log($(".summer").val());
    console.log($(".fall").val());
    console.log($(".winter").val());

    userScore = 0;
    $(".userScore").text("Current Score: " + userScore)
    console.log(userScore);
}

$(".clk").on("click", function() {
    var number = parseInt($(this).val());
    userScore += number;
    console.log(userScore);
    $(".userScore").text("Current Score: " + userScore);

    if (userScore === scoreGoal) {
        wins++;
        $(".wins").text("Wins: " + wins);
        alert("you win");
        reset();
    } else if (userScore > scoreGoal) {
        losses++;
        $(".losses").text("Losses: " + losses);
        alert("you lose");
        reset();
    }
});

