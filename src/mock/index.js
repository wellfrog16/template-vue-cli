const mock = require('./data/mock.json');

module.exports = app => {
    app.get('/mock/list/', (req, res) => {
        res.json(mock);
    });
};
