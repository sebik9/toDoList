To-Do List Web App
This project is a simple To-Do List web application built with HTML, CSS, and JavaScript. Users can add tasks, mark them as completed by clicking on them, and remove tasks by clicking a close button next to each task item.

How to Use
Adding a Task:

Enter your task in the input field.
Click the "Add" button or press Enter to add the task to the list.
Completing a Task:

Click on a task to mark it as completed. Completed tasks will be visually distinguished.
Removing a Task:

Click the '×' symbol next to a task to remove it from the list.
Project Structure
HTML (index.html): Defines the structure of the web page, including input field, task list, and error message display area.

CSS (styles.css): Contains styles for the To-Do List interface, including task item appearance and error message formatting.

JavaScript (script.js): Contains the logic for adding tasks, marking tasks as completed, removing tasks, and displaying error messages. It also includes the global declaration for the close button symbol.

How It Works
Adding Tasks:

The addNewElement function reads the input value, creates a new list item (<li>), adds the task text, and appends a close button.
Empty input or whitespace-only input will trigger an error message.
Marking Tasks as Completed:

Clicking on a task toggles the 'checked' class, visually indicating completion.
Removing Tasks:

Clicking the close button removes the corresponding task from the list.
Error Handling:

The showError function displays an error message when there is an attempt to add an empty task.
The error message disappears after 3 seconds.
