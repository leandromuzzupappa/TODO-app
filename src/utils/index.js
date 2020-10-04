const utils = {
    // FILTER
    showAll: (tasks) => {
        console.log('YOUR TASKS ARE:');
        tasks.forEach(task => {
            let doneText = task.done ? "Done" : "Pending";
            console.log(`- [${doneText}] ${task.name} (${task.deadline})`);
        });
    },
    showDone: (tasks) => {
        console.log('YOUR FINISHED TASKS ARE:');
        tasks.forEach(task => {
            if (task.done) {
                console.log(`- [Done] ${task.name} (${task.deadline})`);
            }
        });
    },
    showPending: (tasks) => {
        console.log('YOUR PENDING TASKS ARE:')
        tasks.forEach(task => {
            if (!task.done) {
                console.log(`- [Pending] ${task.name} (${task.deadline})`);
            }
        });
    },

    // SEARCH
    search: (tasks, params) => {
        let counter = 0;
        const [, content, typeContent] = params;
        let _content = content.toLowerCase();

        console.log(`THE RESULT FOR "${_content}" ARE:`);

        tasks.forEach(task => {
            let _typeContent = typeContent === '--content' ? task.name.toLowerCase() : task.deadline;

            if (_typeContent.indexOf(_content) > -1) {
                let doneText = task.done ? "Done" : "Pending";
                console.log(`- [${doneText}] ${task.name} (${task.deadline})`);
                counter++;
            }
        });

        counter == 0 ? console.log('-- There are no results.') : '';
    },

    // EDIT
    modifyStatus: (tasks, params, save) => {
        let [, taskIndex] = params;

        const task = tasks[taskIndex];
        task.done = !task.done;

        console.log('Saving...')
        save(tasks);

        console.log('-- Task Updated!  \n\r');
        console.log(utils.showAll(tasks)); // Shows all current tasks

    },
    modifyContent: (tasks, params, save) => {
        let [, taskIndex, newContent] = params;
        tasks[taskIndex].name = newContent;

        console.log('Saving...');
        save(tasks);

        console.log('-- Task Updated!  \n\r');
        console.log(utils.showAll(tasks));

    },
    modifyDeadline: (tasks, params, save) => {
        let [, taskIndex, newDeadline] = params;

        tasks[taskIndex].deadline = newDeadline;

        console.log('Saving...')
        save(tasks);

        console.log('-- Task Updated!  \n\r');
        console.log(utils.showAll(tasks));
    },

    // ADD - REMOVE
    addNew: (tasks, params, save) => {
        let [, name, deadline] = params;
        const newTask = {
            name: name,
            deadline: deadline,
            done: false,
        }
        tasks.push(newTask);

        console.log('Saving...')
        save(tasks);

        console.log('-- Task added!  \n\r');
        console.log(utils.showAll(tasks));

    },
    delete: (tasks, params, save) => {
        let [, taskIndex, isConfirmed] = params;

        if (taskIndex === 'all' && isConfirmed === undefined) {
            console.log('You are about to delete all your tasks, to confirm run the following command');
            console.log('node ./src/index.js delete all --true');

            return;
        }

        if (isConfirmed == '--true') {
            save([]);
            console.log('All tasks have been deleted');

            return;
        }

        tasks.splice(taskIndex);

        console.log('Saving...')
        save(tasks);

        console.log('-- Task deleted!  \n\r');
        console.log(utils.showAll(tasks));

    },

}


module.exports = utils;