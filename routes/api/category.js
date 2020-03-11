import express from 'express';
import Category from '../../controllers/category';
import {
  checkCategoryExist,
  checkCategoryNotExist,
  updateCategoryMiddleware
} from '../../middlewares/categoryMiddleware';
import isAuthenticated from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create',
  isAuthenticated,
  checkCategoryExist,
  Category.createCategory
);
router.patch(
  '/update/:title',
  isAuthenticated,
  updateCategoryMiddleware,
  Category.editCategory
);
router.delete(
  '/delete/:categoryTitle',
  isAuthenticated,
  Category.deleteCategory
);
router.get('/getAll', Category.getAllCategory);
router.get('/getAllCategories', Category.getAllCategories);
router.get('/getOne/:categoryTitle', Category.getOneCategory);
export default router;
