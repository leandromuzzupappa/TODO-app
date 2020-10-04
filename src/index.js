/*
TODO APP
    [] Add
    [] Delete
    -- [] Delete all
    -- [] Delete only done tasks
    
    [] Edit
    -- [x] Edit status
        -- [] Edit multiple status tasks at once

    -- [] Edit content
    -- [] Edit deadline

    [x] Show
    -- [x] Show all
    -- [x] Show done
    -- [x] Show pending 

    [x] Search 
    -- [x] Dates
    -- [x] Keywords or text

    [] Sort
    -- [] by date
*/

const fs = require('fs');
const path = require('path');
const utils = require('./utils');

// Helpers
const getAbsolutePath = (filePath) => {
    return path.join(__dirname, filePath);
}
const saveTask = (obj) => {
    const tasksJSON = JSON.stringify(obj, null, 2);
    fs.writeFileSync(tasksFile, tasksJSON);
}

// Files to include
const tasksFile = getAbsolutePath('../db/tasks.json');
const tasksJSON = fs.readFileSync(tasksFile, {
    encoding: 'utf-8'
});
const tasks = JSON.parse(tasksJSON);

// Getting params from terminal
const params = process.argv;
params.shift();
params.shift();

switch (params[0]) {
    // FILTER
    case 'all':
        utils.showAll(tasks);
        break;

    case 'done':
        utils.showDone(tasks);
        break;

    case 'pending':
        utils.showPending(tasks);
        break;


        // SEARCH
    case 'search':
        if (params[2] === undefined) {
            console.log('You must to pass --content or --date');
            break;
        }
        utils.search(tasks, params);
        break;


        // EDIT
    case 'toggle':
        utils.modifyStatus(tasks, params, saveTask);
        break;



    default:
        console.log('default');
}