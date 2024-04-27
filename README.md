# Workflow Builder Application

---

## Description

This project is a comprehensive Workflow Builder application developed using React.js for the frontend and Node.js (Express.js) for the backend. The application allows users to visually construct workflows using drag-and-drop interface with pre-defined nodes. Once created, workflows can be saved, loaded, and executed to perform various data manipulation tasks. The backend interprets the workflow and executes tasks in the defined sequence.

---

## Features

- **Drag-and-Drop Interface:** Users can drag and drop workflow nodes onto the canvas to build their desired workflow.

- **Workflow Execution:** Users can upload data and select a workflow to trigger the execution. The backend executes tasks based on the defined workflow.

- **Workflow Nodes:** Includes nodes such as Filter Data, Wait, Convert Format, and Send POST Request, each performing specific data manipulation tasks.

- **Save and Load Workflows:** Users can save and load previously created workflows for reusability.

- **Visual Feedback:** Provides visual feedback on workflow execution progress.

- **Error Handling:** The application handles errors gracefully and provides informative feedback to the user interface.

---

## Technical Stack

- **Frontend:** React.js, Reactflow, Zustand (for state management)

- **Backend:** Node.js (Express.js)

- **Database:** MongoDB/PostgreSQL (as per choice)

- **Additional Libraries:** Reactflow for workflow visualization and execution.
---

## Setup Instructions

1. **Clone the repository:**

```bash

git clone https://github.com/your-username/workflow-builder.git

```
2. **Navigate to the project directory:**

```bash

cd workflow-builder

```
3. **Install dependencies for both frontend and backend:**

```bash

# Install frontend dependencies

cd frontend

npm install

# Install backend dependencies

cd ..backend

npm install

```

4. **Set up the database (MongoDB/PostgreSQL) and configure connection details in the backend.**

5. **Start the frontend and backend servers:**

```bash

# Start frontend server

cd ..frontend

npm start

# Start backend server

cd ..backend

npm start

```

6. **Access the application at** `http://localhost:3000\` **in your web browser.**

---

## Screenshots

1. **Drag-and-Drop Workflow Builder Screen**

![WhatsApp Image 2024-04-27 at 10 46 08 PM](https://github.com/KarthikeyaKollu/reactflow-Techstax/assets/108949445/b94fe4ed-1ca3-494d-ae8b-3a5aff353e86)

2. **Workflow Builder Screen**

![WhatsApp Image 2024-04-27 at 10 46 09 PM](https://github.com/KarthikeyaKollu/reactflow-Techstax/assets/108949445/53d45e12-0c6d-446f-b5c8-4395d7490499)

3. **Loading Page**

![WhatsApp Image 2024-04-27 at 10 46 08 PM (1)](https://github.com/KarthikeyaKollu/reactflow-Techstax/assets/108949445/e16255a5-545a-4877-9dde-a5d6d5a207c9)

---
video demo [link](https://drive.google.com/file/d/13NkMZ7dDOFItNfHeTk3scuPpereFXX93/view?usp=sharing)
Backend: [link](https://github.com/KarthikeyaKollu/Techstax-server.git)

## Acknowledgements

- Reactflow documentation

- Reactflow examples

- Zustand documentation

- Node.js documentation

---

Feel free to reach out if you have any questions or need further assistance!

**Happy Workflow Building!**
