const sharedPageData = require('../page-data/shared.json');
const homePageData = require('../page-data/home.json');
const aboutPageData = require('../page-data/about-coffee.json');
const howToDrinkPageData = require('../page-data/how-to-drink-coffee.json');

module.exports = (app) => {
  app.use(require('./view-data'));

  app.get('/', (req, res) => {
    res.render('pages/home.html', { shared: sharedPageData, page: homePageData });
  });

  app.get('/about-coffee', (req, res) => {
    res.render('pages/about-coffee.html', { shared: sharedPageData, page: aboutPageData });
  });

  app.get('/how-to-drink-coffee', (req, res) => {
    res.render('pages/how-to-drink-coffee.html', { shared: sharedPageData, page: howToDrinkPageData });
  });

  app.get('/*', (req, res) => {
    res.render('pages/error.html', { shared: sharedPageData });
  });

  return app;
};