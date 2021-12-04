const getALLTasks = (req,res) => {
    res.send('all items')
}

const createTask = (req,res) => {
    res.send('create task')
}
const getTask = (req,res) => {
    res.send('get one task')
}
const updateTask = (req,res) => {
    res.send('update task')
}
const deleteTask = (req,res) => {
    res.send('delete task')
}


modeule.exports = {
    getALLTasks,createTask,getTask,updateTask,deleteTask
}
