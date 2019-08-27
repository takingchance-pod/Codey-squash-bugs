$(document).ready(function() {
    "use strict";

//Declare hero & enemy HP variables, and display hero HP
    var heroHP = 5;
    var enemyHP;
    $("#hero-hp").html("HP: " + heroHP);

//Upon clicking the Continue Button, a new battle is prepared
    $("#continue-button").click(displayEnemyEncounter);

    function displayEnemyEncounter() {
        $("#enemy-avatar-container").css("visibility", "visible");
        $("#hero-message").text("Uh-oh, a Bug has appeared in the code...");
        $("#continue-button").css("display", "none");
        $("#attack-button").css("display", "inline");

        //Embedded function to generate new enemy and display Enemy Info Window
        function generateNewEnemy() {
            //enemyHP = Math.floor(Math.random() * (40 - 20 + 1) + 20);
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
            $("#hero-message").html("Codey squashed the bug!");
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
        heroHP -= enemyAttackValue;
        if (heroHP > 0) {
            $("#hero-hp").html("HP: " + heroHP);
        } else {
            $("#hero-hp").html("HP: 0");
            $("#hero-message").html("The enemy defeated the hero...\nGAME OVER");
        //This option keeps the bug avatar in the same place upon Game Over
            //$("#hero-avatar-container").css("visibility", "hidden");
        //This option makes the bug avatar shift to the center upon Game Over
            $("#hero-avatar-container").hide();
            $("#attack-button").css("visibility", "hidden");
        }
    }

    // Animation Piece

});
