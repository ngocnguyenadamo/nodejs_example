var express = require('express');
var router = express.Router();

const db = require("../models");
const Student = db.student;
// const Op = db.Sequelize.Op;

var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '.' + file.mimetype.split('/').pop())
  }
})
var upload = multer({ storage: storage });

/* GET home page. */
router.get('/', function(req, res, next) {
  Student.findAll()
    .then(students => {
      res.render('index', { students: students });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
});

router.post('/', upload.single('avatar'), function(req, res, next) {
  let filename = null;
  if (req.file) {
    filename = req.file.filename
  }

  Student.create({ name: req.body.name, avatar: filename })
          .then(function(student) {
            res.redirect('/');
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving tutorials."
            });
          });
});

module.exports = router;
