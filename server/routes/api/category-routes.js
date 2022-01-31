const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model:Product}],
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id
        }
      }
    );
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// const router = require('express').Router();
// const { Category, Product } = require('../../models');

// // The `/api/categories` endpoint

// router.get('/',async(req, res) => {
//   try{
//     const resData=await Category.findAll({
//       include:[{model:Product}]
//     });
//     res.status(200).json(resData);
//      }
//      catch(err){
//     res.status(500).json(err)
//     };
//   // find all tags
//   // be sure to include its associated Product data
// });
// router.get('/:id', async(req, res) => {
//   try{
//     const resData=await Category.findByPk(req.params.id,{
//       include:[{model:Product}]
//     })
//     if(!resData){
//       res.status(404).json({message:'dumb ass'})
//     }
//     res.status(200).json(resData);
//   }catch(err){
//     res.status(500).json(err);
//   }
//   // find one category by its `id` value
//   // be sure to include its associated Products
// });

// router.post('/', async(req, res) => {
//   // create a new category
//     try{
//     const resData=await Category.create(req.body)
//     res.status(200).json(resData);
//   }catch(err){
//     res.status(500).json(err);
//   }
// });

// router.put('/:id', async(req, res) => {
//     try{
//     const resData= await Category.update(req.body.category_name,{
//       where:{id:req.params.id}
//     })
//      if (!resData) {
//       res.status(404).json({ message: 'No category with this id!' });
//     return;
//     }
//     res.status(200).json(resData);
//   }catch(err){
//     res.status(500).json(err);
//   }
//   // update a category by its `id` value
// });

// router.delete('/:id', async(req, res) => {
//   // delete a category by its `id` value
//   try{
//     const resData= await Category.destroy({where:{id:req.params.id}})
//       if(!resData) {
//       res.status(404).json({ message: 'No category with this id!' });
//       return;
//       }
//         res.status(200).json(resData);
//       }catch(err){
//         res.status(500).json(err);
//       }
// });

// module.exports = router;