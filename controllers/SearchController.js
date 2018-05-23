var hunterio = require('hunter.io');
var hunter = new hunterio('bd88b7e8c2ccb57f52c33a6907451af1862442e3');
var Search = require('../models/Search')
var SearchController = {
    index: function (req, res) {
        Search.find({}, function (err, data) {
            return res.render('search', { list: data, user: req.user });
        }).sort({created_at: 'asc' });
    },
    save: function (req, res) {
        var urls =  req.body['url[]'].toString().trim().replace(/,{1,}$/, '');;
        var searchObj = new Search({ name: req.body.name, userName: req.user, url: urls });
        searchObj.save(function (err, searchData) {
            if (err) {
                return res.render('addSearch', { message: "Unable to save Search data", "success": false, user: req.user });
            }
            res.redirect('/search');

        });
    },
    add: function (req, res) {
        res.render('addSearch', { user: req.user });
    },
    searchByDomain: function (req, res) {
        var domains = req.query.domain.split(',')
        var results = [];
        domains.forEach(domain => {
            var promise = new Promise((resolve, reject) => {
                hunter.emailCount({
                    domain: domain
                }, function (err, result) {
                    if (err) {
                        reject(err);
                    }
                    resolve(result);
                });
            });
            results.push(promise);
        });
        Promise.all(results)
            .then(values => {
               res.render('searchFilter', { domains: values, user: req.user });
            })
            .catch(e => {
                res.console.error();
                ('searchFilter', { err: e, user: req.user });
            });
    }

};

module.exports = SearchController;
