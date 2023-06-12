const Square = require("../lib/square")

describe('Square', () => {
    it('renders correctly', () => {
        const shape = new Square();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});