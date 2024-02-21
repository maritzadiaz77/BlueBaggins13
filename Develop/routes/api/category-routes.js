const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const allCategories = await Category.findAll({
      include: [Product]
    })
    res.status(200).json(allCategories)
  } catch (error) {
    res.status(500).json(error);
  }
  // be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const oneCategory = await Category.findOne({
      where: { id: req.params.id },
      include: [Product]
    })
    res.status(200).json(oneCategory);
  } catch (error) {
    res.status(500).json(error);
  }
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const createCategory = await Category.create(req.body)
    res.status(200).json(createCategory)
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updateCategory = await Category.update(req.body, {
      where: {
        id: req.params.id,
      }
    })
    res.status(200).json(updateCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});
router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const deleteCategory = await Category.destroy({
      where: {
        id: req.params.id,
      }
    })
    res.status(200).json(deleteCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
