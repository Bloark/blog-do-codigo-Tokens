const postsControlador = require('./posts-controlador');

module.exports = app => {
  app
    .route('/post')
    .get(postsControlador.lista)
    .post(
      passport.authenticate('bearer',{session: false}),
      postsControlador.adiciona
    );
};
