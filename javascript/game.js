$(document).ready(function() {
    "use strict";

//Declare where hero & enemy text displays.
    var heroMessage = document.getElementById("hero-message");
    var enemyMessage = document.getElementById("enemy-message");

//Declare hero & enemy HP variables, and display hero HP
    var heroHP = 2;
    var enemyHP;
    document.getElementById("hero-hp").innerHTML = "HP: " + heroHP;

//Upon clicking the Continue Button, a new battle is prepared
    document.getElementById("continue-button").addEventListener("click", displayEnemyEncounter, false);

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
            document.getElementById("enemy-hp").innerHTML = "HP: " + enemyHP;
        };
        generateNewEnemy();
    }

//Upon clicking the Attack Button, the player progresses through the battle set up above.
    document.getElementById("attack-button").addEventListener("click", initiateAttack, false);

    //Define function that runs through a single combat encounter
    function initiateAttack() {
        $("#attack-button").hide();
        heroAttacks();
        if (enemyHP <= 0) {
            heroMessage.innerHTML = "Codey squashed the bug!";
            $("#enemy-avatar-container").css("visibility", "hidden");
            $("#attack-button").css("display", "none");
            $("#enemy-info").css("visibility", "hidden");
            enemyMessage.innerHTML = "";
            $("#continue-button").css("display", "inline");
            document.getElementById("continue-button").removeEventListener("click", initiateAttack, false);
        } else  {
            setTimeout(enemyAttacks, 1500);
            if (heroHP <= 0) {
                //Buggy code: cannot get duck avatar to disappear upon game over conditions
                    // $("#hero-avatar-container").css("visibility", "hidden");
                    // $("#hero-avatar-container").hide();
                    // $("#hero-avatar-container").css("display", "none");
                    // $(".test1").hide();
                heroMessage.innerHTML = "The enemy defeated the hero...\nGAME OVER";
                enemyMessage.innerHTML = "";
                $("#attack-button").css("visibility", "hidden");
                setTimeout(function () {
                    enemyMessage.innerHTML = "";
                }, 3000)
            }
        }
        setTimeout(function () {
            enemyMessage.innerHTML = "";
            $("#attack-button").show();
        }, 3000)

    }


    //Define function for hero's attack
    function heroAttacks() {
        enemyMessage.innerHTML = "";
        var heroAttackValue = Math.floor(Math.random() * (5 - 0 + 1) + 0);
        heroMessage.innerHTML = "Hero deals " + heroAttackValue + " damage.";
        enemyHP -= heroAttackValue;
        if (enemyHP > 0) {
            document.getElementById("enemy-hp").innerHTML = "HP: " + enemyHP;
        } else {
            document.getElementById("enemy-hp").innerHTML = "HP: 0";
        }
    }

    //Define function for enemy's attack
    function enemyAttacks() {
        heroMessage.innerHTML = "<br>";
        var enemyAttackValue = Math.floor(Math.random() * (3 - 0 + 1) + 0);
        enemyMessage.innerHTML = "Enemy deals " + enemyAttackValue + " damage.";
        heroHP -= enemyAttackValue;
        if (heroHP > 0) {
            document.getElementById("hero-hp").innerHTML = "HP: " + heroHP;
        } else {
            document.getElementById("hero-hp").innerHTML = "HP: 0";
            heroMessage.innerHTML = "The enemy defeated the hero...\nGAME OVER";
            $("#attack-button").css("visibility", "hidden");
        }
    }

    // Animation Piece

});
