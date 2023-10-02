const { request, response } = require("express");

//funciones

const usuariosGet = (req = request, res = response) => {
  const { limit, page } = req.query;
  //request , response
  res.json({
    message: "GET usuarios - Controllers",
    limit,
    page,
  });
};

const usuarioPost = (req = request, res) => {
  const { nombre, correo } = req.body;
  res.json({
    message: "POST usuarios - Controllers",
    nombre,
    correo,
  });
};

const usuariosPut = (req = request, res) => {
  const { id } = req.params;

  res.json({
    message: "PUT usuarios - Controllers",
    id,
  });
};

const usuariosDelete = (req, res) => {
  //request , response
  res.json({
    message: "DELETE usuarios - Controllers",
  });
};

module.exports = {
  usuariosGet,
  usuarioPost,
  usuariosPut,
  usuariosDelete,
};
