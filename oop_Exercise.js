  // part 1 of Assignment 
  //=================================================
 // Define the Companion class
//  class Companion {
//        constructor(name, type, companion = null) {
//            this.name = name;
//            this.type = type;
//            this.companion = companion;
//       }
//    }

   // Define the Adventurer class
  //  class Adventurer {
  //   constructor(name, health = 10, inventory = [], companion = null) {
  //              this.name = name;
  //              this.health = health;
  //              this.inventory = inventory;
  //              this.companion = companion;
  //  }

  //  roll(mod = 0) {
  //           const result = Math.floor(Math.random() * 20) + 1 + mod;
  //           console.log(`${this.name} rolled a ${result}.`);
  //        }
  // }

  // create Frank
  // const frank = new Companion("Frank", "Flea", {
  //        belongings: ["small hat", "sunglasses"]
  //    });

  //    // create Leo with Frank as his companion
  //      const leo = new Companion("Leo", "Cat", "frank");
     
  //      // create Robin with leo as his companion
  //      const robin = new Adventurer("Robin", 10, ["sword", "potion", "artifact"], leo);

  //      // Test the roll method
  //      robin.roll();
  //      robin.roll(2);
  //      robin.roll(-1);

       // function to log the object structure

      //  function logAdventurer(adventurer) {
      //     console.log(`Adventurer: ${adventurer.name}`);  // log the name of adveturer
      //     console.log(`Health: ${adventurer.health}`);    // log the health of adventure
      //     console.log('Inventory:');      // log the inventory of adventurer
      //     adventurer.inventory.forEach(item => console.log(`- ${item}`));
      //     // checks if adveturer has a companion
      //         if (adventurer.companion) {
      //           // logs tha name and type of companion
      //            console.log(`Companion: ${adventurer.companion.name} (${adventurer.companion.type})`);
      //            // checks if companion have also companion
      //            if (adventurer.companion.companion) {
      //                console.log(`Companion's companion: ${adventurer.companion.companion.name} (${adventurer.companion.companion.type})`);
      //                if (adventurer.companion.companion.belongings) {
      //                    console.log('Belongings:');
      //                    adventurer.companion.companion.belongings.forEach(item => console.log(`- ${item}`));
      //                }

      //            }
      //        }
      //    }

         // log the entire object structure
        //  logAdventurer(robin);


         // part 2 of Assignment
         //===============================================

    //  // Define the character class
    //    class Character {
    //      constructor(name) {
    //       this.name = name;
    //       this.health = 100;
    //       this.inventory = [];
    //        }

    //    roll(mod = 0) {
    //        const result = Math.floor(Math.random() * 20) + 1 + mod;
    //        console.log(`${this.name} rolled a ${result}.`);
    //              }
    //        }

      // // Define the Adventurer class that extends character
      //       class Adventurer extends Character {
      //          constructor(name) {
      //           super(name);
      //            }
      //      }

      //     // Define the companion class that extends character
      //        class Companion extends Character {
      //           constructor(name, type) {
      //             super(name);
      //             this.type = type;
      //             this.companion = null; // Companion can have its own companion
      //              }
      //          }

//          // create robin as an adventurer
//             const robin = new Adventurer("Robin");
//             robin.inventory = ["sword", "potion", "artifact"];

//         // create leo as robin's companion
//           const leo = new Companion("Leo", "Cat");

// // Create Frank as Leo's companion
//     const frank = new Companion("Frank", "Flea");
//     frank.inventory = ["small hat", "sunglasses"];

//     // Nest the companions
//      leo.companion = frank;
//      robin.companion = leo;

    //  // Test the roll method
    //    robin.roll();
    //    leo.roll();
    //    frank.roll();

    //    // Function to log the object structure
    //  function logCharacter(character) {
    //    console.log(`Character: ${character.name}`);
    //    console.log(`Health: ${character.health}`);
    //  if (character.inventory.length > 0) {
    //      console.log('Inventory:');
    //      character.inventory.forEach(item => console.log(`- ${item}`));
    //  }
//      if (character.companion) {
//          console.log(`Companion: ${character.companion.name} (${character.companion.type})`);
//          if (character.companion.inventory.length > 0) {
//              console.log('Companion Inventory:');
//              character.companion.inventory.forEach(item => console.log(`- ${item}`));
//          }
//          if (character.companion.companion) {
//              console.log(`Companion's companion: ${character.companion.companion.name} (${character.companion.companion.type})`);
//              if (character.companion.companion.inventory.length > 0) {
//                  console.log('Companion\'s Companion Inventory:');
//                  character.companion.companion.inventory.forEach(item => console.log(`- ${item}`));
//              }
//          }
//      }
//  }

//  // Log the entire object structure
//        logCharacter(robin);


    
   // part 3rd of Assignment
  //==========================================================
 // Define the Character class
  //  class Character {
  //      constructor(name) {
  //          this.name = name;
  //          this.health = 100;
  //          this.inventory = [];
  //      }
  
  //      roll(mod = 0) {
  //          const result = Math.floor(Math.random() * 20) + 1 + mod;
  //          console.log(`${this.name} rolled a ${result}.`);
  //      }
  //  }

   // Define the adventurer class that extends character
//    class Adventurer extends Character {
//         constructor(name, role) {
//             super(name);
//             this.role = role;
//             this.level = 1;
//              this.experience = 0;
//              this.inventory.push("bedroll", "50 gold coins");
//          }
     
//          scout() {
//                    console.log(`${this.name} is scouting ahead...`);
//                    super.roll();
//                }

//          levelUp() {
//             this.level += 1;
//            this.health = 100;  // Reset health on level up
//             console.log(`${this.name} has leveled up to level ${this.level}!`);
//                    }     

//            attack() {
//              console.log(`${this.name} attacks the enemy!`);
//                super.roll();
//                      }
//        }

//  //Define the Companion class that extends Character
//      class Companion extends Character {
//      constructor(name, type) {
//          super(name);
//          this.type = type;
//          this.loyalty = 100;
//      }

  //    assist() {
  //              console.log(`${this.name} assists in the action!`);
  //              super.roll();
  //          }
  //      }
  // // Create Robin as an adventurer
  //   const robin = new Adventurer("Robin", "Warrior");
  //    robin.inventory.push("sword", "potion", "artifact");

 // Create Leo as Robin's companion
//  const leo = new Companion("Leo", "Cat");

//  // Create Frank as Leo's companion
//     const frank = new Companion("Frank", "Flea");
//    frank.inventory.push("small hat", "sunglasses");
   
//    // Nest the companions
//      leo.companion = frank;
    //  robin.companion = leo;

    //  // Test the methods
    //    robin.roll();
    //    leo.roll();
    //    frank.roll();

    //    robin.scout();
    //    robin.levelUp();
    //    robin.attack();

    //    leo.assist();
    //    frank.assist();

       // Function to log the object structure
//        function logCharacter(character) {
//         console.log(`Character: ${character.name}`);
//         console.log(`Health: ${character.health}`);
//           if (character.inventory.length > 0) {
//            console.log('Inventory:');
//          character.inventory.forEach(item => console.log(`- ${item}`));
//     }
//      if (character.companion) {
//          console.log(`Companion: ${character.companion.name} (${character.companion.type})`);
//          if (character.companion.inventory.length > 0) {
//              console.log('Companion Inventory:');
//              character.companion.inventory.forEach(item => console.log(`- ${item}`));
//          }
//          if (character.companion.companion) {
//              console.log(`Companion's companion: ${character.companion.companion.name} (${character.companion.companion.type})`);
//              if (character.companion.companion.inventory.length > 0) {
//                  console.log('Companion\'s Companion Inventory:');
//                  character.companion.companion.inventory.forEach(item => console.log(`- ${item}`));
//              }
//          }
//      }
//  }

//  // Log the entire object structure
//      logCharacter(robin);


 // part 4 of assignment 
 //================================================

//   function logCharacter(character) {
//      console.log(`Character: ${character.name}`);
//      console.log(`Health: ${character.health}`);
//      if (character.inventory.length > 0) {
//          console.log('Inventory:');
//          character.inventory.forEach(item => console.log(`- ${item}`));
//      }
//      if (character.companion) {
//         console.log(`Companion: ${character.companion.name} (${character.companion.type})`);
//          if (character.companion.inventory.length > 0) {
//              console.log('Companion Inventory:');
//              character.companion.inventory.forEach(item => console.log(`- ${item}`));
//          }
//          if (character.companion.companion) {
//              console.log(`Companion's companion: ${character.companion.companion.name} (${character.companion.companion.type})`);
//              if (character.companion.companion.inventory.length > 0) {
//                  console.log('Companion\'s Companion Inventory:');
//                  character.companion.companion.inventory.forEach(item => console.log(`- ${item}`));
//              }
//        }
//      }
//     }

//      // Define the Character class with a static property
//      class Character {
//            constructor(name) {
//                this.name = name;
//                this.health = Character.MAX_HEALTH;
//                this.inventory = [];
//            }

//     roll(mod = 0) {
//          const result = Math.floor(Math.random() * 20) + 1 + mod;
//          console.log(`${this.name} rolled a ${result}.`);
//      }

//      static MAX_HEALTH = 100;
//  }

//  // Define the Adventurer class that extends Character with static properties and a constructor check
//     class Adventurer extends Character {
//      constructor(name, role) {
//          super(name);
//          if (!Adventurer.ROLES.includes(role)) {
//              throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(', ')}`);
//          }
//          this.role = role;
//          this.level = 1;
//          this.experience = 0;
//          this.inventory.push("bedroll", "50 gold coins");
//      }

//      scout() {
//                console.log(`${this.name} is scouting ahead...`);
//                super.roll();
//            }

//     levelUp() {
//           this.level += 1;
//           this.health = Character.MAX_HEALTH;  // Reset health on level up
//            console.log(`${this.name} has leveled up to level ${this.level}!`);
//                }
            
//      attack() {
//               console.log(`${this.name} attacks the enemy!`);
//               super.roll();
//              }
//      static ROLES = ["Fighter", "Healer", "Wizard"];
//               }
     
//     // Define the Companion class that extends Character
//     class Companion extends Character {
//      constructor(name, type) {
//          super(name);
//          this.type = type;
//          this.loyalty = 100;
//      }

//      assist() {
//         console.log(`${this.name} assists in the action!`);
//          super.roll();
//      }
//  }   
 
//   // Create Robin as an adventurer
//  const robin = new Adventurer("Robin", "Fighter");
//  robin.inventory.push("sword", "potion", "artifact");

// // Create Leo as Robin's companion
//  const leo = new Companion("Leo", "Cat");

//  // Create Frank as Leo's companion
//  const frank = new Companion("Frank", "Flea");
//  frank.inventory.push("small hat", "sunglasses");

//  // Nest the companions
//  leo.companion = frank;
//  robin.companion = leo;

//  // Log the entire object structure
//  logCharacter(robin);


// part 5 of assignment
//========================================================

// Define the Character class with a static property
 class Character {
     constructor(name) {
        this.name = name;
         this.health = Character.MAX_HEALTH;
         this.inventory = [];
     }

     roll(mod = 0) {
         const result = Math.floor(Math.random() * 20) + 1 + mod;
         console.log(`${this.name} rolled a ${result}.`);
     }

     static MAX_HEALTH = 100;
 }

 // Define the Adventurer class that extends Character with static properties and a constructor check
    class Adventurer extends Character {
     constructor(name, role) {
         super(name);
         if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(', ')}`);
         }
         this.role = role;
         this.level = 1;
         this.experience = 0;
         this.inventory.push("bedroll", "50 gold coins");
    }

     scout() {
               console.log(`${this.name} is scouting ahead...`);
         super.roll();
     }
     levelUp() {
          this.level += 1;
          this.health = Character.MAX_HEALTH;  // Reset health on level up
          console.log(`${this.name} has leveled up to level ${this.level}!`);
          }
      
           attack() {
             console.log(`${this.name} attacks the enemy!`);
               super.roll();
           }
      
           static ROLES = ["Fighter", "Healer", "Wizard"];
       }

 // Define the Companion class that extends Character
    class Companion extends Character {
       constructor(name, type) {
         super(name);
         this.type = type;
         this.loyalty = 100;
     }

     assist() {
         console.log(`${this.name} assists in the action!`);
        super.roll();
     }
 }

  // Define the AdventurerFactory class
   class AdventurerFactory {
     constructor(role) {
         if (!Adventurer.ROLES.includes(role)) {
             throw new Error(`Invalid role: ${role}. Valid roles are: ${Adventurer.ROLES.join(', ')}`);
         }
         this.role = role;
         this.adventurers = [];
     }

     generate(name) {
         const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
         return newAdventurer;
     }

         findByIndex(index) {
         return this.adventurers[index];
     }

     findByName(name) {
         return this.adventurers.find(a => a.name === name);
     }
 }

 // Create a factory for Healers and generate some healers
 const healers = new AdventurerFactory("Healer");
 const robin = healers.generate("Robin");
 const alex = healers.generate("Alex");

  // Log the entire object structure for a healer
  function logCharacter(character) {
    console.log("Character: " + character.name);
    console.log("Health: " + character.health);
    
    if (character.inventory.length > 0) {
        console.log("Inventory:");
        character.inventory.forEach(item => console.log("- " + item));
    }

    if (character.companion) {
        console.log("Companion: " + character.companion.name + " (" + character.companion.type + ")");
        logCharacter(character.companion);
    }
}

 // Testing
   console.log("Generated Healers:");
   logCharacter(robin);
   logCharacter(alex);

 // Find a healer by name
   const foundHealer = healers.findByName("Robin");
   console.log("Found Healer:");
   logCharacter(foundHealer);
 
   // Find a healer by index
  const healerByIndex = healers.findByIndex(1);
   console.log("Healer by Index:");
   logCharacter(healerByIndex);


   // part  6 0f assignment
   //================================================

   



