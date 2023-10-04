const { request, response } = require("express");
const Usuario = require("../models/usuario");

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

const usuarioPost = async (req = request, res) => {
  const { name, email, password } = req.body;

  const usuario = new Usuario({ name, email, password });

  await usuario.save();

  res.status(201).json({
    message: "Usuario creado",
    usuario,
  });
};

const usuarioPut = (req = request, res) => {
  const { id } = req.params;

  res.json({
    message: "PUT usuarios - Controllers",
    id,
  });
};

const usuarioDelete = (req, res) => {
  //request , response
  res.json({
    message: "DELETE usuarios - Controllers",
  });
};

module.exports = {
  usuariosGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
};
