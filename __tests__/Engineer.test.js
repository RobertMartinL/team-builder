const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('reed', 73, 'slmd', 'gitty');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String)) && toBe(true);
    expect(engineer.github).toEqual(expect.any(String));

});