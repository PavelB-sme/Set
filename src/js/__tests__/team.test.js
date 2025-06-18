/* eslint-disable no-undef */
import Team from '../team';

describe('Класс Team', () => {
  let team;

  beforeEach(() => {
    team = new Team();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {})
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  })




  test ('constructor initializes emty team', () => {
    expect(team.members).toBeInstanceOf(Set);
    expect(team.members.size).toBe(0);
  });

  test('adding a hero to the team', () => {
    const character = {name: 'мечник', damage: 50};
    team.add(character);

    expect(team.members.has(character)).toEqual(true)
  })

  test('adding duplicate hero to team', () => {
    
    const character = {name: 'мечник', damage: 50};
    team.add(character);
    team.add(character);

    expect(consoleErrorSpy).toHaveBeenCalledWith(`Персонаж ${character.name} уже в команде`)
  });

  test('test hero team addition', () => {
   
    team.addAll({name: 'мечник', damage: 50},
      {name: 'лучник', damage: 50},
      {name: 'маг', damage: 50},
      {name: 'мечник', damage: 50},
    );

    expect(team.members.length).toBe(3);
  });

  test('test convertation Set', () => {
    const character = {name: 'мечник', damage: 50};
    team.add(character);
    
    expect(team.toArray()).toBeInstanceOf(Array);
  })
});