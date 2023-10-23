const { Router } = require("express");

const { check } = require("express-validator");
const { productoExiste } = require("../helpers/db-validators");

const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");
// importar funcion para validar rol

const {
  obtenerProductos,
  actualizarProducto,
  borrarProducto,
  obtenerProducto,
  productoPost,
} = require("../controllers/productos");

const router = Router();

router.get("/", obtenerProductos);

//Listar producto por id
router.get(
  "/:id",
  [
    check("id", "El id no es válido").isMongoId(),
    //me aseguro si existe un producto con ese ID 🤔
    validarCampos,
  ],
  obtenerProducto
);

router.post(
  "/",
  [
    validarJWT,
    //validar rol
    check("nombre", "El nombre es obligatorio").notEmpty(),
    check("categoria", "La categoría es obligatoria").notEmpty(),
    validarCampos,
  ],
  productoPost
);

router.put(
  "/:id",
  [
    validarJWT,
    //validar rol
    check("id", "No es un Id válido").isMongoId(),
    //me aseguro si existe un producto con ese ID 🤔

    validarCampos,
  ],
  actualizarProducto
);

router.delete(
  "/:id",
  [
    validarJWT,
    //validar rol
    check("id", "No es un Id válido").isMongoId(),
    //me aseguro si existe un producto con ese ID 🤔
    validarCampos,
  ],
  borrarProducto
);

module.exports = router;
