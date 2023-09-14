/* Get Homepage */
const index = (req, res) => {
    res.render('index',{title: 'Suraj'});
};

module.exports = {
    index
};