const { Router } = require("express");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const { esRoleValido } = require("../helpers/db-validators");

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
    check("role").custom(esRoleValido),
    validarCampos,
  ],
  usuarioPost
);
router.put("/:id", usuarioPut);
router.delete("/", usuarioDelete);

module.exports = router;
