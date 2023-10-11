const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  esRoleValido,
  emailExiste,
  existeUsuarioPorId,
} = require("../helpers/db-validators");

const {
  usuariosGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", usuariosGet);
router.post(
  "/",
  [
    check("name", "El nombre es obligatorio").notEmpty(),
    check("password", "La contraseña debe tener más de 6 caracteres").isLength({
      min: 6,
    }),
    check("email", "El email no es válido").isEmail(),
    check("email").custom(emailExiste),
    check("role").custom(esRoleValido),
    validarCampos,
  ],
  usuarioPost
);
router.put(
  "/:id",
  [
    check("id", "No es un Id válido").isMongoId(),
    //validar si el id existe
    check("id").custom(existeUsuarioPorId),
    check("role").custom(esRoleValido),
    validarCampos,
  ],
  usuarioPut
);
router.delete(
  "/:id",
  [
    check("id", "No es un Id válido").isMongoId(),
    check("id").custom(existeUsuarioPorId),
    validarCampos,
  ],
  usuarioDelete
);

module.exports = router;
