const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    it('the getRole method should return Engineer', () => {
        const Jim = new Engineer('Jim', 45546, 'Jim.Smith@gmail.com', 'JimCode9');
        expect(Jim.getRole()).toBe('Engineer');
    });
    it('the github username given should equal the github username', () => {
        const Jim = new Engineer('Jim', 45546, 'Jim.Smith@gmail.com', 'JimCode9');
        expect(Jim.github).toBe('JimCode9');
    });
    it('the getGithub method should return the username given', () => {
        const Jim = new Engineer('Jim', 45546, 'Jim.Smith@gmail.com', 'JimCode9');
        expect(Jim.getGithub()).toBe('JimCode9');
    });
})