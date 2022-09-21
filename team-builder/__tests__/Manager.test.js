const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('rob', 32, 'haslkd', 2);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String)) && toBe(true);
    expect(manager.number).toEqual(expect.any(Number));

});