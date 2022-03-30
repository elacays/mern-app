// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
}

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const postGoals = (req, res) => {
    res.status(200).json({ message: 'Set Goals' })
}

// @desc    Put goals
// @route   PUT /api/goals/:id
// @access  Private
const putGoals = (req, res) => {
    res.status(200).json({ message: 'Update Goals' })
}

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoals = (req, res) => {
    res.status(200).json({ message: 'Delete Goals' })
}

export {
    getGoals,
    postGoals,
    putGoals,
    deleteGoals
}