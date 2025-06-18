
export default class Team {
  constructor() {
    this.members = new Set();
  }

  let 

  add (character) {
    for( let member of this.members) {
      if (member.name === character.name) {
        console.error(`Персонаж ${character.name} уже в команде`);
        return;
      }
    }
      
    this.members.add(character);
  }
    
  addAll (...characters) {
    const heroes = new Set();
      
    [...characters].forEach(character => heroes.add(JSON.stringify(character)));

    const result = [...heroes].map(str => JSON.parse(str))
    this.members = result;
      
  } 
    
  toArray () {
    return Array.from(this.members)
  }
}
