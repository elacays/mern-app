import express from 'express'
import { getGoals, setGoals, putGoals, deleteGoals } from '../controllers/goalsController.js'
const router = express.Router()

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(putGoals).delete(deleteGoals)

// router.get('/', getGoals)

// router.post('/', postGoals)

// router.put('/:id', putGoals)

// router.delete('/:id', deleteGoals)

export { router }

