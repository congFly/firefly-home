const regRouter = (app) => {
  app.use('/api/users', require('./users'));
  app.use('/api/houses', require('./houses'));
  app.use('/api/houseDetails', require('./houseDetail'));
};

export default regRouter;