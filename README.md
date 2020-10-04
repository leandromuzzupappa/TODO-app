# **Node Todo App**
A Node app build without any third party modules to be using through terminal.

## Requirements
* [Node and NPM](https://nodejs.org/en/)

<br>


## Instalation
1- Clone this repo: `git clone https://github.com/leandromuzzupappa/node-todo.git` <br>
2- Navigate to the directory: `cd node-todo` <br>
3- Run the app: `node ./src/index.js`

<br>

## List of commands

### Create new task
```js
add {task-description} {task-deadline}
```

### Delete
```js
delete {task-index}     // Removes task by index
delete all --true       // Remove all tasks
```


### Edit
```js
toggle {task-index}                         // Edits the task current status, done/pending
edit-content {task-index} {new-content}     // Edits the task current content
edit-date {task-index} {new-deadline}       // Edits the task current date
```


### Filter
```js
all         // Return all tasks
done        // Return all finished tasks
pending     // Return all pending tasks
```


### Search
```js
search {content-or-deadline} {--content/--date} // Returns all matches tasks
```