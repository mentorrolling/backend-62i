const { Router } = require("express");
const {
  usuariosGet,
  usuarioPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", usuariosGet);
router.post("/", usuarioPost);
router.put("/:id", usuariosPut);
router.delete("/", usuariosDelete);

module.exports = router;
