//Question 1
let characters=["harry","hermione","ron","draco","luna"]
  for(let variable = 0; variable < characters.length; variable++)
  {console.log (characters[variable]);}
//Question 2
let firstName="Harry";
let house="Gryffindor";
console.log(`Welcome, ${firstName} of Gryffindor`);
//Question 3 
let characterName="Hermione";
console.log (characterName.toUpperCase());
console.log (characterName.toLowerCase());
//Question 4
let spell="Expelliarmus";
console.log(spell.trim());
//Queston 5
let quote="I solemnly swear that I am up to no good";
console.log(quote.slice());
//Question 6
let firstName1="Ron";
let lastName="Weasley";
console.log(firstName1.concat()+ lastName.concat())
//Question 7
let sentence="Draco is a good wizard";
sentence= sentence.replace ("good","bad");
console.log(sentence);
//Question 8
let houses=["Gryffindor", "Hufflepuff", "Ravenclaw"];
houses.push("Slytherin"); 
houses.pop(); 
console.log(houses); 
//Question 9
let spells=["Alohomora","Lumos","Nox"]; 
console.log(spells); 
spells.unshift("Accio"); 
console.log(spells); 
spells.shift();
console.log(spells); 
//Question 10
let professors=["Dumbledore","McGonagall","Snape","Hagrid"];
let selectedProfessors = professors.slice(1, 3); 
console.log(selectedProfessors); 
//Question 11
let students=["Neville","Seamus","Dean","Parvati"];
students.splice(1, 2);
console.log(students); 
//Question 12
let phrase="Mischief Managed"; 
let result=phrase.trim().toLowerCase() + " - Harry";
console.log(result);
//Question 13
let wizards=["Harry", "Hermione", "Ron"];
wizards.push("Luna", "Draco"); 
console.log(wizards);
//Question 14
let message="Welcome to Hogwarts School of Witchcraft and Wizardry";
let extracted=message.slice(11, 19); 
let resultMessage=extracted.concat("Castle");
console.log(resultMessage); 

