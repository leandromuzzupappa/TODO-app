/*
TODO APP
    [] Add
    [] Delete
    -- [] Delete all
    -- [] Delete only done tasks
    
    [] Edit
    -- [] Edit status
        -- [] Edit multiple status tasks at once

    -- [] Edit content
    -- [] Edit deadline

    [x] Show
    -- [x] Show all
    -- [x] Show done
    -- [x] Show pending 

    [] Search 
    -- [] Dates
    -- [] Keywords or text

    [] Sort
    -- [] by date
*/

const fs = require('fs');
const path = require('path');

const getAbsolutePath = (filePath) => {
    return path.join(__dirname, filePath);
}

// Files to include
const tasksFile = getAbsolutePath('../db/tasks.json');
const tasksJSON = fs.readFileSync(tasksFile, {
    encoding: 'utf-8'
});
const tasks = JSON.parse(tasksJSON);

// SHOW
// Show all
const showAll = () => {
    tasks.forEach(task => {
        let doneText = task.done ? "Done" : "Pending";
        console.log(`- [${doneText}] ${task.name} (${task.deadline})`);
    })
}

// Show done
const showDone = () => {
    tasks.forEach(task => {
        if (task.done) {
            console.log(`- [Done] ${task.name} (${task.deadline})`);
        }
    })
}

// Show pending
const showPending = () => {
    tasks.forEach(task => {
        if (!task.done) {
            console.log(`- [Pending] ${task.name} (${task.deadline})`);
        }
    })
}

// Getting params from terminal
const params = process.argv;
params.shift();
params.shift();

switch (params[0]) {
    case 'all':
        showAll();
        break;

    case 'done':
        showDone();
        break;

    case 'pending':
        showPending();
        break;

    default:
        console.log('');
}