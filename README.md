# Task Tracker
A basic task tracking app I created based on the walkthrough by Traversy Media. Apart from the walkthrough, I also added a few more features and effects to the app that I deemed fit.

## Technologies Used
- React.js
- Node.js
- JavaScript
- CSS3
- HTML5

### Installation & Setup
i. Clone the repository
```bash
git clone https://github.com/Snowden1738/task-tracker
```

ii. Move inside the cloned folder
```bash
cd task-tracker/
```

iii. Install dependencies
```bash
npm install
```

### How to Start/Launch?
i. Make sure you're inside the `task-tracker` folder

ii. Start the JSON server
```bash
npm run server
```

iii. Open another terminal instance and move inside the same folder

iv. Start the Vite development server
```bash
npm run dev
```

### Usage Instructions & Features
- As stated, the task list is persistent. The tasks stay intact even after closing the browser or stopping the live server.
- When there's no task in the list, or possibly when you're opening this app for the first time, you'll see a message in the task list area that says `No tasks pending! You're all caught up!`.
- To add a task to the list, click on the `Add` button at the top of the page. This will make a pane appear, where you can enter the task's title, set the date and time, and check the box or leave it unchecked, depending on whether you want a reminder for the task or not. Then click the `Save Task` button to save the task.
- When the `Hide automatically after adding task` checkbox is checked, the task adding pane automatically disappears upon clicking the `Save Task` button. If you want to keep adding multiple tasks at that moment, you can uncheck the box. This will prevent the pane from automatically disappearing after adding a task.
- The `Hide` button that appears when the task adding pane is active, hides the pane when clicked.
- Double-clicking an existing task toggles the reminder for the task. A thin, dark red bar on the left of a task denotes that the reminder for the task is active and inactive otherwise.
- Clicking the `Mark As Complete` button marks the particular task as completed, and the button text toggles to `Mark as Incomplete` which when clicked will mark it as incomplete. Apart from this, a completed task appears faded (visual effect) than an otherwise incomplete task.
- The `X` button on the right of any task when clicked, deletes the task from the list.
- The tasks stay arranged in reverse chronological order from top to bottom at any given time. In simple words, the task with the latest reminder time will appear at the top, and so on.
- Some additional basic effects have been incorporated to appeal to the overall look-and-feel of using the app. These include changing the tint/opacity of the task components and buttons when hovered on them with the mouse pointer. The task components and buttons temporarily change their size when clicked (active).
