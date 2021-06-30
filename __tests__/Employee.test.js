const Employee = require('../lib/employee');

describe('Employee', () => {
    it('The name set for an employee should return as the name given', () => {
        const newPerson = 'Peter';
        const newEmployee = new Employee(newPerson);
        expect(newEmployee.name).toBe(newPerson);

    })
    it('The id set for an employee should return as the id given', () => {
        const newEmployee = new Employee('Matt', 89);
        expect(newEmployee.id).toBe(89);

    })
    it('The email set for an employee should return as the email given', () => {
        const newEmployee = new Employee('Matt', 89, 'Matt@gmail.com');
        expect(newEmployee.email).toBe('Matt@gmail.com');

    })
    it('The getName method should return the name given', () => {
        const newEmployee = new Employee('Matt', 89, 'Matt@gmail.com');
        expect(newEmployee.getName()).toBe('Matt');

    })
    it('The getEmail method should return the email given', () => {
        const newEmployee = new Employee('Matt', 89, 'Matt@gmail.com');
        expect(newEmployee.getEmail()).toBe('Matt@gmail.com');

    })
    it('The getId method should return the id given', () => {
        const newEmployee = new Employee('Matt', 89, 'Matt@gmail.com');
        expect(newEmployee.getId()).toBe(89);

    })
    it('The getRole method should return the role given', () => {
        const newEmployee = new Employee('Matt', 89, 'Matt@gmail.com');
        expect(newEmployee.getRole()).toBe('Employee');

    })
   
})
