var indexController = {
    feed: function (req, res) {
        res.render('index', {})
    },
    results: function (req, res) {
        res.render('searchResults', {})
    },
};

module.exports = indexController;