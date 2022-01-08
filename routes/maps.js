/*
 * All routes for Maps are defined here
 * Since this file is loaded in server.js into api/maps,
 *   these routes are mounted onto /maps
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const mapsRouter = (db) => {

  // GET /maps/
  router.get('/', (req, res) => {
    db.query('SELECT * FROM maps;')
      .then(res => {
        res.json(res.rows);
      })
      .catch(err => {
        console.log(err.message);
      });
  });

  // GET /maps/:id
  router.get('/:id', (req, res) => {
    db.query('SELECT * FROM maps WHERE id = $1;', [req.params.id])
      .then(res => {
        res.json(res.rows[0]);
      })
      .catch(err => {
        console.log(err.message);
      });
  });

  return router;
};

module.exports = mapsRouter;
