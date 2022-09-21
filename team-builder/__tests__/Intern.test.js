const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('rob', 32, 'haslkd', 'utsa');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String)) && toBe(true);
    expect(intern.school).toEqual(expect.any(String));

});