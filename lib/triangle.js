const Shape = require('./shape');

class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"></polygon>`
    }
};

module.exports = Triangle;