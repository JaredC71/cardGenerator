const Manager = require('../lib/manager');

describe("Manager", () => {
    it('the office number assigned to a manager should return as the value given', () => {
        const Jim = new Manager('Jim', 45546, 'Jim.Smith@gmail.com', 45);
        expect(Jim.officeNumber).toBe(45);
    });
    it('the getOfficeNum method should return as the office number given', () => {
        const Jim = new Manager('Jim', 45546, 'Jim.Smith@gmail.com', 45);
        expect(Jim.getOfficeNumber()).toBe(45);
    });
    it('the getRole method should return Manager', () => {
        const Jim = new Manager('Jim', 45546, 'Jim.Smith@gmail.com', 45);
        expect(Jim.getRole()).toBe('Manager');
    });
})