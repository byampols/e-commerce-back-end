const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    // include its associated Products
    include: [
      {
        model: Product,
        as: "product_tags",
        attributes: ['id', 'product_name']
      }
    ]
  }).then(dbTagData => res.json(dbTagData)).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    // include its associated Products
    include: [
      {
        model: Product,
        as: "product_tags",
        attributes: ['id', 'product_name']
      }
    ]
  }).then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({message: "No tag found with that id."});
      return;
    }
    res.json(dbTagData);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name: req.body.tag_name
  }).then(dbTagData => res.json(dbTagData)).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', (req, res) => {
  // update a tag by its `id` value
  Tag.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  }).then(dbTagData => {
    if (!dbTagData) {
      res.status(404).json({message: "No tag found with that id."});
      return;
    }
    res.json(dbTagData);
  }).catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
    // delete a tag by its `id` value
    Tag.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({message: "No tag found with that id."});
        return;
      }
      res.json(dbTagData);
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
