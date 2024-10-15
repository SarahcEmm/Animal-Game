        // Animal facts stored in an object
        const animalFacts = {
            lion: {
                name: "Lion",
                scientificName: "Panthera leo",
                family: "Felidae",
                diet: "Carnivore",
                habitat: "Grasslands, savannas",
                lifespan: "10-14 years in the wild"
            },
            elephant: {
                name: "Elephant",
                scientificName: "Loxodonta",
                family: "Elephantidae",
                diet: "Herbivore",
                habitat: "Forests, savannas, grasslands",
                lifespan: "60-70 years"
            },
            bear: {
                name: "Bear",
                scientificName: "Ursidae",
                family: "Ursidae",
                diet: "Omnivore",
                habitat: "forests, grasslands, deserts, artic",
                lifespan: "25-30 years in the wild"
            },
            giraffe: {
                name: "Giraffe",
                scientificName: "Giraffa camelopardalis",
                family: "Giraffidae",
                diet: "Herbivore",
                habitat: "Savannas, grasslands",
                lifespan: "20-25 years"
            },
            rabbit: {
                name: "Rabbit",
                scientificName: "Oryctolagus cuniculus",
                family: "Leporids",
                diet: "Herbivore",
                habitat: "grasslands, forests, deserts, wetlands,",
                lifespan: "9 years"
            },
            dragon: {
                name: "Dragon",
                scientificName: "Draco",
                family: "Unknown",
                diet: "Carnivore and goblins",
                habitat: "rocky lower slopes, snowy mountaintops",
                lifespan: "3000-5000 years"
            }
        };

        // Function to display animal facts
        function displayAnimalFacts(animalKey) {
            const animal = animalFacts[animalKey];
            const animalInfoDiv = document.getElementById('animal-info');

            // Build the animal details HTML
            const animalDetails = `
                <h2>${animal.name}</h2>
                <p><strong>Scientific Name:</strong> ${animal.scientificName}</p>
                <p><strong>Family:</strong> ${animal.family}</p>
                <p><strong>Diet:</strong> ${animal.diet}</p>
                <p><strong>Habitat:</strong> ${animal.habitat}</p>
                <p><strong>Average Lifespan:</strong> ${animal.lifespan}</p>
            `;
            animalInfoDiv.innerHTML = animalDetails;  // Display the facts
        }

        // Add click event listeners to each animal image
        const animalImages = document.querySelectorAll('.animal-image');
        animalImages.forEach(img => {
            img.addEventListener('click', () => {
                const selectedAnimal = img.getAttribute('data-animal');  // Get the animal key from data attribute
                displayAnimalFacts(selectedAnimal);  // Call the function to display facts
            });
        });