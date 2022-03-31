import asyncHandler from "express-async-handler"



// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
})

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoals = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set Goals' })
})

// @desc    Put goals
// @route   PUT /api/goals/:id
// @access  Private
const putGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update Goals' })
})

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Delete Goals' })
})

export {
    getGoals,
    setGoals,
    putGoals,
    deleteGoals
}
