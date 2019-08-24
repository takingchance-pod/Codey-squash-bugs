$(document).ready(function() {
    "use strict";

    //Declare where hero & enemy text displays.
    var heroMessage = document.getElementById("hero-message");
    var enemyMessage = document.getElementById("enemy-message");

    //Declare and display initial hero HP
    var heroHP = 50;
    document.getElementById("hero-hp").innerHTML = "HP: " + heroHP;
    //heroMessage.innerHTML = "Let's get this party started.";

    function generateNewEnemy() {
    //var enemyHP =
    }

    //Declare and display initial enemy HP
    function generateEnemyHP() {
        return Math.floor(Math.random() * (40 - 20 + 1) + 20);
    }

    var enemyHP = generateEnemyHP();
    document.getElementById("enemy-hp").innerHTML = "HP: " + enemyHP;

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

    //Define function that runs through entire combat
    function initiateAttack() {
        heroAttacks();
        if (enemyHP <= 0) {
            heroMessage.innerHTML = "The hero defeated the enemy!";
            $("#attack-button").css("visibility", "hidden");
            enemyMessage.innerHTML = "";
            $("#continue-button").css("visibility", "visible");
            document.getElementById("continue-button").removeEventListener("click", initiateAttack, false);
        } else {
            setTimeout(enemyAttacks, 1500);
            if (heroHP <= 0) {
                heroMessage.innerHTML = "The enemy defeated the hero...\nGAME OVER";
                enemyMessage.innerHTML = "";
                document.getElementById("continue-button").removeEventListener("click", initiateAttack, false);
            }
        }
        setTimeout(function () {
            enemyMessage.innerHTML = "";
        }, 3000)
    }


    // Animation Piece


    //Assign event listener to "Proceed" button that initiates and clicks through combat

    function displayAttackHideContinue() {
        $("#attack-button").css("visibility", "visible");
        $("#continue-button").css("visibility", "hidden");
    }

    document.getElementById("continue-button").addEventListener("click", displayAttackHideContinue, false);
    // document.getElementById("continue-button").addEventListener("click", )

    //This used to be on the "continue-button"
    document.getElementById("attack-button").addEventListener("click", initiateAttack, false);

});
