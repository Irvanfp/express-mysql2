const connection = require("../models");

class ControllerPemasok {
  getPemasok(req, res) {
    try {
      let sql = `select * from pemasok where id = ${req.body.id}`;
      if(req.body.id){}
      connection.query(sql, (err, result) => {
        if (err) {
          return res.status(501).json({
            message: "server tidak dapat mem-proses perintah",
            error: err,
          });
        }
        return res.status(200).json({
          message: "sukses",
          data: result,
        });
      });
    } catch (e) {
      return res.status(500).json({
        message: "server sedang gangguan",
        error: e,
      });
    }
  }
  createPemasok(req, res) {
    try {
      let sqlCreate = `INSERT INTO pemasok(id,nama) VALUES (${req.body.id},'${req.body.nama}')`;
      connection.query(sqlCreate, (err, result) => {
        let sql = `select * from pemasok where id = ${req.body.id}`;
        connection.query(sql, (err, result) => {
          if (err) {
            res.status(501).json({
              message: "server tidak dapat mem-proses perintah",
              error: err,
            });
          }
          res.status(200).json({
            message: "sukses",
            data: result,
          });
        });
      });
    } catch (e) {
      return res.status(500).json({
        message: "server sedang gangguan",
        error: e,
      });
    }
  }
  updatePemasok(req, res) {
    try {
      let sqlUpdate = `update pemasok set nama = '${req.body.nama}' where id = '${req.body.id}' `;
      connection.query(sqlUpdate, (err, result) => {
        if (err) {
          res.status(501).json({
            message: "server tidak dapat mem-proses perintah",
            error: err,
          });
        }
        let sqlSee = `select * from pemasok where id =${req.body.id}`;
        connection.query(sqlSee, (err, result) => {
          if (err) {
            res.status(501).json({
              message: "server tidak dapat mem-proses perintah",
              error: err,
            });
          }
          res.status(200).json({
            message: "sukses",
            data: result,
          });
        });
      });
    } catch (e) {
      return res.status(500).json({
        message: "server sedang gangguan",
        error: e,
      });
    }
  }
  deletePemasok(req, res) {
    try {
      let sqlUpdate = `delete from pemasok where id = '${req.body.id}' `;
      connection.query(sqlUpdate, async (err, result) => {
        if (err) {
          await res.status(501).json({
            message: "server tidak dapat mem-proses perintah",
            error: err,
          });
        }
        await res.status(200).json({
          message: "sukses",
          data: result,
        });
      });
    } catch (e) {
      return res.status(500).json({
        message: "server sedang gangguan",
        error: e,
      });
    }
  }
}

module.exports = new ControllerPemasok();
// module.exports = { getPemasok, createPemasok };
