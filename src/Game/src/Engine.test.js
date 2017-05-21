import Engine from './Engine';

it(
    'Engine getStartingBoard is a static method',
    () => {
        expect(Engine.getStartingBoard).toBeDefined();
    }
)

it(
    'Engine getStartingBoard is not an instance method',
    () => {
        expect(new Engine().getStartingBoard).toBeUndefined();
    }
)

it(
    'Engine getStartingBoard returns non null',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(nBoard).not.toEqual(null);
    }
)

it(
    'Engine getStartingBoard isOccupied 1 is true',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(Engine.isOccupied(1, nBoard)).toBe(true);
    }
)

it(
    'Engine getStartingBoard isOccupied 2 is false',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(Engine.isOccupied(2, nBoard)).toBe(false);
    }
)

it(
    'Engine getStartingBoard isOccupied 3 is false',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(Engine.isOccupied(3, nBoard)).toBe(false);
    }
)

it(
    'Engine getStartingBoard isOccupied 4 is true',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(Engine.isOccupied(4, nBoard)).toBe(true);
    }
)

it(
    'Engine getStartingBoard isOccupied 5 is false',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(Engine.isOccupied(5, nBoard)).toBe(false);
    }
)

it(
    'Engine getStartingBoard isOccupied 6 is false',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(Engine.isOccupied(6, nBoard)).toBe(false);
    }
)

it(
    'Engine getStartingBoard isOccupied 7 is false',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(Engine.isOccupied(7, nBoard)).toBe(false);
    }
)

it(
    'Engine getStartingBoard isOccupied 9 is true',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(Engine.isOccupied(9, nBoard)).toBe(true);
    }
)

it(
    'Engine getStartingBoard isOccupied 8 is true',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(Engine.isOccupied(8, nBoard)).toBe(true);
    }
)

it(
    'Engine getStartingBoard isOccupied 10 is false',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(Engine.isOccupied(10, nBoard)).toBe(false);
    }
)

it(
    'Engine getStartingBoard isOccupied 11 is false',
    () => {
        var nBoard = Engine.getStartingBoard();
        expect(Engine.isOccupied(11, nBoard)).toBe(false);
    }
)

//expect(Employee.convert).toBeDefined();
//expect(new Employee().convert).toBeUndefined();

/*
the board notation would translate to 
{
    v: 8, 
    h1: 1, 
    h2: 4, 
    h3: 9,
    vert: 0,
    next: 'h'
}
 */