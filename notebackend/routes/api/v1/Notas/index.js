const express = require('express');
const router = express.Router();
const {validId,isEmpty} = require('../Utilidades');

const LibsNotas = require('../../../../libs/Notas');
const DaoNotas = require('../../../../dao/mongoDb/models/DaoNotas');
const notDao = new DaoNotas();
const not = new LibsNotas(notDao);
not.init();

router.get('/', async (req, res) => {
    // extraer y validar datos del request
    try {
        // devolver la ejecución el controlador de esta ruta
        const versionData = await not.getNotesVersion();
        return res.status(200).json(versionData);
    } catch (ex) {
        // manejar el error que pueda tirar el controlador
        console.error('Error Notes:', ex);
        return res.status(502).json({ 'error': 'Error Interno de Server' });
    }
});

router.get("/getNotesByUser/:codigo", async (req, res) => {
    try {
        let { codigo } = req.params;
        if (!validId(codigo)) {
            return res.status(400).json({
                error: 'Se espera un codigo numérico'
            });
        }
        const notas = await not.getNoteByUser({codigo:codigo});
        res.status(200).json({ notas });
    }
    catch (ex) {
        res.status(500).json({ "Error": "Error, " + ex });
    }
}
);

router.get("/porId/:codigo", async (req, res) => {
    try {
        let { codigo } = req.params;
        if (!validId(codigo)) {
            return res.status(400).json({
                error: 'Se espera un codigo numérico'
            });
        }
        const filas = await not.getNoteById({codigo:codigo});
        res.status(200).json(filas);
    }
    catch (ex) {
        res.status(500).json({ "Error": "Error, " + ex });
    }
}
);

router.post('/agregarNota', async (req, res) => {
    try {
    const {title, description, keyword} = req.body;
      if (isEmpty(title)) {
        return res.status(400).json({
          error: 'Se espera valor para el titulo de la nota...'
        });
      }

      if (isEmpty(description)) {
        return res.status(400).json({
          error: 'Se espera valor para la descripción'
        });
      }
      
      if (isEmpty(keyword)) {
        return res.status(400).json({
          error: 'Se espera valor para la palabra claves'
        });
      }

      
      const newNote = await not.addNote({title, description, keyword, idUser});
      return res.status(200).json(newNote);
    } catch(ex){
      console.error(ex);
      return res.status(502).json({error:'Error al procesar solicitud'});
    }
  });

module.exports = router;
