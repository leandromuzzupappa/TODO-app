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

}


module.exports = utils;