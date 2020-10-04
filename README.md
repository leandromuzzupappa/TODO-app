# TODO app

## List of commands

### Filter
```text
all     // Return all tasks
done    // Return all finished tasks
pending // Return all pending tasks
```

### Search
```text
search [ keyword/date ] [--content/--date]  // Returns all matches
```

### Edit
```text
toggle [ task index ]                   // Edits the task current status, done/pending
edit-content [task index] [new content] // Edits the task current content
edit-date [task index] [new date]       // Edits the task current date
```