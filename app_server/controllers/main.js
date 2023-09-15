/* Get Homepage */
const index = (req, res) => {
    res.render('index',{title: 'online shopping'});
};

module.exports = {
    index
};