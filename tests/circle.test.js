const Circle = require("../lib/circle")

describe('Circle', () => {
    it('renders correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"></circle>`);
    });
});