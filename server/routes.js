const sharedPageData = require('../page-data/shared.json');
const homePageData = require('../page-data/home.json');
const aboutPageData = require('../page-data/about-coffee.json');
const coffeeTypesPageData = require('../page-data/coffee-types.json');

module.exports = (app) => {
  app.use(require('./view-data'));

  app.get('/', (req, res) => {
    res.render('pages/home.html', { shared: sharedPageData, page: homePageData });
  });

  app.get('/about-coffee', (req, res) => {
    res.render('pages/about-coffee.html', { shared: sharedPageData, page: aboutPageData });
  });

  app.get('/coffee-types', (req, res) => {
    res.render('pages/coffee-types.html', { shared: sharedPageData, page: coffeeTypesPageData });
  });

  app.get('/*', (req, res) => {
    res.render('pages/error.html', { shared: sharedPageData });
  });

  return app;
};