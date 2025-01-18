document.addEventListener("DOMContentLoaded", () => {

    const ghosts = {
        Spirit: ["Ghost Writing", "EMF 5", "Spirit Box"],
        Wraith: ["DOTS", "EMF 5", "Spirit Box"],
        Phantom: ["DOTS", "Ultra Violet", "Spirit Box"],
        Poltergeist: ["Ghost Writing", "Ultra Violet", "Spirit Box"],
        Banshee: ["DOTS", "Ghost Orbs", "Ultra Violet"],
        Jinn: ["EMF 5", "Ultra Violet", "Freezing Temps"],
        Mare: ["Ghost Writing", "Ghost Orbs", "Spirit Box"],
        Revenant: ["Ghost Writing", "Ghost Orbs", "Freezing Temps"],
        Shade: ["Ghost Writing", "EMF 5", "Freezing Temps"],
        Demon: ["Ghost Writing", "Ultra Violet", "Freezing Temps"],
        Yurei: ["DOTS", "Ghost Orbs", "Freezing Temps"],
        Oni: ["DOTS", "EMF 5", "Freezing Temps"],
        Yokai: ["DOTS", "Ghost Orbs", "Spirit Box"],
        Hantu: ["Ghost Orbs", "Ultra Violet", "Freezing Temps"],
        Goryo: ["DOTS", "EMF 5", "Ultra Violet"],
        Myling: ["Ghost Writing", "EMF 5", "Ultra Violet"],
        Onryo: ["Ghost Orbs", "Freezing Temps", "Spirit Box"],
        The_Twins: ["EMF 5", "Freezing Temps", "Spirit Box"],
        Raiju: ["DOTS", "Ghost Orbs", "EMF 5"],
        Obake: ["DOTS", "Ultra Violet", "EMF 5"],
        The_Mimic: ["Ultra Violet", "Freezing Temps", "Spirit Box"],
        Moroi: ["Ghost Writing", "Freezing Temps", "Spirit Box"],
        Deogen: ["DOTS", "Ghost Writing", "Freezing Temps"],
        Thaye: ["DOTS", "Ghost Writing", "Ghost Orbs"],
    };

    const ghostAbilities = {
        Spirit: ["When smudged, can't hunt for 180s."],
        Wraith: ["not an ability but: doesn't step in salt"],
        Phantom: ["have MUCH slower blinking speed. Won't be visible on photos"],
        Poltergeist: ["Can throw items really fast and far. Can do a 'item tornado' "],
        Banshee: ["only targets one player in MultiPlayer"],
        Jinn: ["Can't turn off the breaker."],
        Mare: ["Can't turn on a light. Can turn light off immediately after turning on."],
        Revenant: ["is REALLY fast"],
        Shade: ["Can't hunt when the player is in the ghost room"],
        Demon: ["Can hunt at 100% sanity"],
        Yurei: ["can \"slam\" doors fully shut. Will drain 20% sanity."],
        Oni: ["Throw items really far. Cannot do the 'weird breath ghost event'. Fast blinking speed"],
        Yokai: ["Can't hunt at 90% sanity if you're talking near the ghost"],
        Hantu: ["The warmer the room is, the slower will he be"],
        Goryo: ["His DOTS can only be seen through a camera"],
        Myling: ["Footsteps are really Quiet"],
        Onryo: ["Uses a firelight just like a crucifix"],
        The_Twins: ["can SOMETIMES roam to throw you off, but the ghost room wont change"],
        Raiju: ["Extra fast around electrical equipment"],
        Obake: ["Can change ghost models"],
        The_Mimic: ["Mimics other ghost special abilities. Will have a 'fake evidence': Ghost Orbs"],
        Moroi: ["Doesn't really have one, but can whisper through a Spirit Box"],
        Deogen: ["Can do a HEAVY breath in a spirit box"],
        Thaye: ["Will 'age' through the game"]
    };

    // Event listener for selecting a ghost from the dropdown
    document.getElementById("ghostSelector").addEventListener("change", function () {
        const selectedGhost = this.value;
        const attributes = ghosts[selectedGhost];
        const ability = ghostAbilities[selectedGhost];

        // Display the attributes
        const displayDiv = document.getElementById("attributesDisplay");
        if (attributes) {
            displayDiv.innerHTML = `<p><strong>Attributes:</strong><br>${attributes.map(attr => `<p>${attr}</p>`).join("")}</p>`;
        } else {
            displayDiv.innerHTML = "<p>No attributes to display.</p>";
        }

        // Display the special ability
        const abilityDiv = document.getElementById("abilityDisplay");
        if (ability) {
            abilityDiv.innerHTML = `<p><strong>Special Ability:</strong><br>${ability}</p>`;
        } else {
            abilityDiv.innerHTML = "<p>No special ability to display.</p>";
        }
    });

    // Event for finding matching ghosts based on selected attributes
    document.getElementById("findGhosts").addEventListener("click", function () {
        const selectedAttributes = Array.from(
            document.querySelectorAll("#attributesSelector input:checked")
        ).map(input => input.value);

        if (selectedAttributes.length !== 3) {
            document.getElementById("matchingGhosts").innerHTML = "<p>Please select exactly 3 attributes.</p>";
            return;
        }

        const matchingGhosts = Object.keys(ghosts).filter(ghost =>
            selectedAttributes.every(attr => ghosts[ghost].includes(attr))
        );

        const matchingDiv = document.getElementById("matchingGhosts");
        if (matchingGhosts.length > 0) {
            matchingDiv.innerHTML = `<p>Matching Ghosts:</p><ul>${matchingGhosts.map(ghost => `<li>${ghost}</li>`).join("")}</ul>`;
        } else {
            matchingDiv.innerHTML = "<p>No ghosts match the selected attributes.</p>";
        }
    });

    // Generate and display the ghost grid with click functionality
    const ghostGrid = document.getElementById('ghostGrid');
    Object.keys(ghosts).forEach(ghostName => {
        const ghostDiv = document.createElement('div');
        ghostDiv.classList.add('ghost-name', 'normal');
        ghostDiv.textContent = ghostName;

        ghostDiv.addEventListener('click', function () {
            // Toggle the class between normal, green, and red
            if (ghostDiv.classList.contains('normal')) {
                ghostDiv.classList.remove('normal');
                ghostDiv.classList.add('green');
            } else if (ghostDiv.classList.contains('green')) {
                ghostDiv.classList.remove('green');
                ghostDiv.classList.add('red');
            } else if (ghostDiv.classList.contains('red')) {
                ghostDiv.classList.remove('red');
                ghostDiv.classList.add('normal');
            }
        });

        ghostGrid.appendChild(ghostDiv);
    });
});
