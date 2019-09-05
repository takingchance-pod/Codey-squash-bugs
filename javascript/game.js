$(document).ready(function() {
    "use strict";

//Declare hero and enemy objects
    var hero = {
        maxHP: 12,
        currentHP: 12,
        attackValues:
            [0, 1, 3, 3, 3, 5]
    };

//Declare hero & enemy HP variables, and display hero HP
    var enemyHP;
    $("#hero-hp").html("HP: " + hero.maxHP);

//Upon clicking the Continue Button, a new battle is prepared
    $("#continue-button").click(displayEnemyEncounter);

    function displayEnemyEncounter() {
        $("#hero-message").html("");
        $("#enemy-avatar-container").css("visibility", "visible");
        $("#viewport-text-container").html
        ("<h1>Uh-oh, a Bug has<br>appeared in the code...</h1>");
        $("#continue-button").css("display", "none");
        $("#attack-button").css("display", "inline");

        //Embedded function to generate new enemy and display Enemy Info Window
        function generateNewEnemy() {
            enemyHP = Math.floor(Math.random() * (10 - 5 + 1) + 5);
            $("#enemy-info").css("visibility", "visible");
            $("#enemy-hp").html("HP: " + enemyHP);
        };
        generateNewEnemy();
    }

//Upon clicking the Attack Button, the player progresses through the battle set up above.
    $("#attack-button").click(initiateAttack);

    //Define function that runs through a single combat encounter
    function initiateAttack() {
        $("#attack-button").hide();
        heroAttacks();
        if (enemyHP <= 0) {
            $("#viewport-text-container").html("<h1 style='text-align:center'>Codey squashed the bug!</h1>");
            $("#enemy-avatar-container").css("visibility", "hidden");
            $("#attack-button").css("display", "none");
            $("#enemy-info").css("visibility", "hidden");
            $("#enemy-message").html("");
            $("#continue-button").css("display", "inline");
        } else  {
            setTimeout(enemyAttacks, 1500);
        }
        setTimeout(function () {
            $("#enemy-message").html("");
            $("#attack-button").show();
        }, 3000)

    }

    //Define function for hero's attack
    function heroAttacks() {
        $("#enemy-message").html("");
        var heroAttackValue = Math.floor(Math.random() * (5 - 0 + 1) + 0);
        // var heroAttackValue = hero.attackValues[Math.floor(Math.random() * hero.attackValues.length)];
        console.log(heroAttackValue);
        $("#hero-message").html("Hero deals " + heroAttackValue + " damage.");
        enemyHP -= heroAttackValue;
        if (enemyHP > 0) {
            $("#enemy-hp").html("HP: " + enemyHP);
        }
    }

    //Define function for enemy's attack
    function enemyAttacks() {
        $("#hero-message").html("");
        var enemyAttackValue = Math.floor(Math.random() * (3 - 0 + 1) + 0);
        $("#enemy-message").html("Enemy deals " + enemyAttackValue + " damage.");
        hero.currentHP -= enemyAttackValue;
        if (hero.currentHP > 0) {
            $("#hero-hp").html("HP: " + hero.currentHP);
        } else {
            $("#hero-hp").html("HP: 0");
            $("#viewport-text-container").html("<h1 style='text-align:center'>The enemy defeated the hero...<p>GAME OVER</p></h1>");
        //This option keeps the bug avatar in the same place upon Game Over
            //$("#hero-avatar-container").css("visibility", "hidden");
        //This option makes the bug avatar shift to the center upon Game Over
            $("#hero-avatar-container").hide();
            $("#attack-button").css("visibility", "hidden");
        }
    }

    // Toggle light/dark mode
    // Source for code inside of if/else:
    // https://stackoverflow.com/questions/19844545/replacing-css-file-on-the-fly-and-apply-the-new-style-to-the-page

    $("#light-dark-toggle").click(function() {
        var test = $("link").first().next().attr("href");
        if (test === "css/game.css") {
            var cssLink = $('link[href*="css/game.css"]');
            cssLink.replaceWith('<link href="css/game-dark.css" type="text/css" rel="stylesheet">');
        } else {
            var cssLink = $('link[href*="css/game-dark.css"]');
            cssLink.replaceWith('<link href="css/game.css" type="text/css" rel="stylesheet">');
        }
    })

    // Animation Piece

});
