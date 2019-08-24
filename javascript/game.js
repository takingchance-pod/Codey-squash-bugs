$(document).ready(function() {
    "use strict";

//Declare where hero & enemy text displays.
    var heroMessage = document.getElementById("hero-message");
    var enemyMessage = document.getElementById("enemy-message");

//Declare and display initial hero HP
    var heroHP = 50;
    var enemyHP;
    document.getElementById("hero-hp").innerHTML = "HP: " + heroHP;
    //heroMessage.innerHTML = "Let's get this party started.";

//Upon clicking the Continue Button, a new battle is prepared
    document.getElementById("continue-button").addEventListener("click", displayEnemyEncounter, false);

    function displayEnemyEncounter() {
        $("#hero-message").text("Oh no -- a new Bug has appeared in the code...");
        $("#continue-button").css("visibility", "hidden");
        $("#attack-button").css("visibility", "visible");

        //Embedded function to generate new enemy and display Enemy Info Window
        function generateNewEnemy() {

            enemyHP = Math.floor(Math.random() * (40 - 20 + 1) + 20);
            $("#enemy-info").css("visibility", "visible");
            document.getElementById("enemy-hp").innerHTML = "HP: " + enemyHP;
        };
        generateNewEnemy();
    }

//Upon clicking the Attack Button, the player progresses through the battle set up above.
    document.getElementById("attack-button").addEventListener("click", initiateAttack, false);

    //Define function that runs through a single combat encounter
    function initiateAttack() {
        heroAttacks();
        if (enemyHP <= 0) {
            heroMessage.innerHTML = "Codey squashed the bug!";
            $("#attack-button").css("visibility", "hidden");
            $("#enemy-info").css("visibility", "hidden");
            enemyMessage.innerHTML = "";
            $("#continue-button").css("visibility", "visible");
            document.getElementById("continue-button").removeEventListener("click", initiateAttack, false);
        } else {
            setTimeout(enemyAttacks, 1500);
            if (heroHP <= 0) {
                heroMessage.innerHTML = "The enemy defeated the hero...\nGAME OVER";
                enemyMessage.innerHTML = "";
                $("#attack-button").css("visibility", "hidden");
                //document.getElementById("continue-button").removeEventListener("click", initiateAttack, false);
            }
        }
        setTimeout(function () {
            enemyMessage.innerHTML = "";
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
        }
    }




    // Animation Piece










});
