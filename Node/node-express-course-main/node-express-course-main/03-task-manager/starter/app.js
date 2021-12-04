const express = require('express');
const app = express();

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App')
})

// app.get('/api/v1/tasks')         - get all tasks
// app.post('/api/v1/tasks')        - create task
// app.get('/api/v1/tasks:id')      - get one task
// app.patch('/api/v1/tasks:id')    - update
// app.delete('/api/v1/tasks:id')   - delete

const port = 3000

app.listen(port, console.log('server is listen on port ${port}...'))
