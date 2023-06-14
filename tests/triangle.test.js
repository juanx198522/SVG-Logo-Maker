const Triangle = require("../lib/triangle")

describe('Triangle', () => {
    it('renders correctly', () => {
      const shape = new Triangle();
      var color =('pink')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"></polygon>`);
    });
  });