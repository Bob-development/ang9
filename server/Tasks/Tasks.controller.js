const tasks = [
    {
        title: 'Greeting',
    },

    {
        title: 'King',
    },

    {
        title: 'Cool University',
    }
]


async function getTasks(req, res){
    try {
        return res.json(tasks);
    } catch (e){
        console.log(e.message);
    }
}

function addTask(req, res){
    tasks.push(req.body);
}

module.exports = {
    getTasks,
    addTask
}