const { Router } = require("express");
const { check } = require("express-validator");

const { validarCampos, validarJWT, esAdminRole } = require("../middlewares");

//importar función para validar si la categoría existe

const {
  crearCategoria,
  obtenerCategorias,
  obtenerCategoria,
  actualizarCategoria,
  borrarCategoria,
} = require("../controllers/categorias");

const router = Router();

router.get("/", obtenerCategorias);

router.get(
  "/:id",
  [
    check("id", "No es un id válido").isMongoId(),
    //validar si existe la categoría
    validarCampos,
  ],
  obtenerCategoria
);

router.post(
  "/",
  [
    validarJWT,
    //validar si es rol administrador
    check("nombre", "El nombre es obligatorio").notEmpty(),
  ],
  crearCategoria
);

router.put(
  "/:id",
  [
    validarJWT,
    //validar si es rol administrador
    check("id", "No es un id válido").isMongoId(),
    //validar si existe la categoría
    check("nombre", "El nombre es obligatorio").notEmpty(),
    validarCampos,
  ],
  actualizarCategoria
);

router.delete(
  "/:id",
  [
    validarJWT,
    //validar si es rol administrador
    check("id", "No es un id válido").isMongoId(),
    //validar si existe la categoría
    validarCampos,
  ],
  borrarCategoria
);

module.exports = router;
