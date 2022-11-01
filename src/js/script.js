class Project {
  constructor(name, url, desc, author, techs, date) {
    this.name = name;
    this.url = url;
    this.desc = desc;
    this.author = author;
    this.techs = techs;
    this.date = date;
  }
}

let numbersGame = new Project(
  "Numbers Game",
  "https://github.com/Ehnvik/numbers-game",
  "1 vs 1 gissa motspelarens valda nummer",
  "Gustav Ehnvik",
  ["HTML", "SCSS", "Javascript", "Parcel"],
  "2022-11-01"
);

let flexWebPage = new Project(
  "Flex Hemsida",
  "https://github.com/Ehnvik/flex-hemsida",
  "Hemsida för en glassbar byggd med hjälp av HTML och CSS",
  "Gustav Ehnvik",
  ["HTML", "CSS"],
  "2022-10-06"
);

let assignmentWebPage = new Project(
  "Assignment HTML CSS",
  "https://github.com/Ehnvik/assignment-html-css",
  "Skoluppgift. Bygg en exakt likadan hemsida som läraren.",
  "Gustav Ehnvik",
  ["HTML", "SCSS", "Parcel"],
  "2022-10-20"
);

let pokemonMemoryGame = new Project(
  "Pokemon Memory Game",
  "https://github.com/Ehnvik/pokemon-memory-game",
  "Memory game med Pokemon tema",
  "Gustav Ehnvik",
  ["HTML", "CSS", "Javascript"],
  "2021-09-28"
);

let projects = [numbersGame, flexWebPage, assignmentWebPage, pokemonMemoryGame];
