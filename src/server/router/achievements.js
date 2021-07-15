import express from 'express';
import controller from '../controllers/achievements.js';

const router = express.Router();

router.get('/achievements', controller.getAll);
router.get('/achievements/:id', controller.getOne);
router.post('/achievements',  controller.create);


router.put('/achievements/:id', controller.update);
router.delete('/achievements/:id', controller.remove);

export default router;
