// - add/remove a task
// - search by task id
// - sort based on priority

interface Task {
    id: number;
    title: string;
    priority: number
}

class TaskManager {
    private tasks: Task[] = []

    //Add Tasks
    public addTask(id: number, title: string, priority: number): void {
        // Define a new task (task to be added)
        const newTask: Task = { id, title, priority }
        // Action that adds the new task
        this.tasks.push(newTask)
        console.log(`Added: ${title}`)
    }

    // Search for Tasks - Using Big O(n)
    public BadSearchById(targetId: number): Task | null {
        for (let i = 0; this.tasks.length; i++) {
            if (this.tasks[i].id === targetId) {
                return this.tasks[i];
            } // we found the task we are searching for
        }
        return null;  // we couldn't find the task we are searchung for
    }

    // Search for Tasks - Using Big O(logn)
    public FastSearchById(targetId: number): Task | null {
        this.tasks.sort((a, b) => a.id - b.id)

        let left = 0
        let right = this.tasks.length - 1

        while (left <= right) {
            let mid = Math.floor((left + right) / 2) //getting the average
            let currentTask = this.tasks[mid]

            if (currentTask.id === targetId) {
                return currentTask;
                // we found the task we are searching  for                                                                                                                        
            } else if (currentTask.id < targetId) {
                left = mid + 1   // Throwing away the left side
            } else {
                right = mid - 1  // Throwing away the right side
            }
        }
        return null;
    }

    // Sort by Priority Method - Using Big O(n squared)
    public SortByPriority(): void {
        this.tasks.sort((a, b) => b.priority - a.priority)
    }

    public printTasks(): void {
        console.log("\n--- Current Task List ---")
        this.tasks.forEach(t => console.log(`[ID:  ${t.id}] ${t.title} - Priority: ${t.priority}`))
        console.log("=============================\n")
    }
}








// Initialize the Task Manger
const manager = new TaskManager()
manager.addTask(1, "Watch world cup", 3)
manager.addTask(10, "Watch netflix", 1)
manager.addTask(122, "Wash clothes", 1)
manager.addTask(467, "Read a novel", 3)
manager.addTask(250, "Study DSA", 3)
manager.addTask(499, "Go for HatchDev", 3)
manager.addTask(419, "Play Volleyball", 2)
manager.addTask(280, "Wash the dishes", 2)
manager.addTask(444, "Buy food", 3)
manager.addTask(67, "SLEEP", 3)

manager.printTasks()

console.log("Searching for ID 419");
const foundTask = manager.FastSearchById(419)
console.log("Result found:", foundTask);


// SORTING

console.log("\n Sorting tasks by highest priority");
manager.SortByPriority()
manager.printTasks()


// Take Home Project
// An E-commerce shopping cart/inventory system
// - add to cart
// - sort by price