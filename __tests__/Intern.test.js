const Intern = require('../lib/intern');

describe("Intern", () => {
    it('the getRole method should return Intern', () => {
        const Jim = new Intern('Jim', 45546, 'Jim.Smith@gmail.com', 'Harvard');
        expect(Jim.getRole()).toBe('Intern');
    });
    it('the school name given should equal the school name', () => {
        const Jim = new Intern('Jim', 45546, 'Jim.Smith@gmail.com', 'Harvard');
        expect(Jim.school).toBe('Harvard');
    });
    it('the getSchool method should return the school name given', () => {
        const Jim = new Intern('Jim', 45546, 'Jim.Smith@gmail.com', 'Harvard');
        expect(Jim.getSchool()).toBe('Harvard');
    });
})