const Role = require("../models/role");
const Usuario = require("../models/usuario");

const esRoleValido = async (role = "USER_ROLE") => {
  const existeRole = await Role.findOne({ role });
  if (!existeRole) {
    throw new Error(`El rol ${role} no está registrado en la BD`);
  }
};

//Validar si el email existe
const emailExiste = async (email) => {
  const existeEmail = await Usuario.findOne({ email });
  if (existeEmail) {
    throw new Error(`El correo ${email} ya está registrado`);
  }
};

const existeUsuarioPorId = async (id) => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El id ${id} NO existe`);
  }
  //Si el usuario existe verifico su estado
  if (!existeUsuario.state) {
    throw new Error(`El usuario ${existeUsuario.name} está inactivo`);
  }
};

//validar categoria por id

//validar Producto por id

module.exports = {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
};
