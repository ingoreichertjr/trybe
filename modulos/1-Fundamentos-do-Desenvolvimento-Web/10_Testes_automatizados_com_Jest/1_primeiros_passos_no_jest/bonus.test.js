// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  const employee = professionalBoard.find((i) => i.id === id)
  if (!employee) throw new Error('ID not found');
  if (!employee[detail]) throw new Error('Information unavailable');
  return employee[detail];
};

describe('test function searchEmployee', () => {
  it('test if searchEmployee is a function', () => {
    expect(typeof(searchEmployee)).toBe('function')
  })
  it('find employee 1256-4, then return firstName', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda')
  })
  it('find employee 8579-6, then return lastName', () => {
    expect(searchEmployee('8579-6', 'lastName')).toBe('Gates')
  })
  it('find employee 9852-2-2, then return specialities', () => {
    expect(searchEmployee('9852-2-2', 'specialities')).toEqual(['Ruby', 'SQL'])
  })
  it('return error if employee doesnt exist', () => {
    expect(() => searchEmployee('12345-0', 'firstName')).toThrowError(new Error('ID not found'))
  })
  it('return error if information is not available', () => {
    expect(() => searchEmployee('4678-2', 'favoriteFood')).toThrowError(new Error('Information unavailable'))
  })
})