class Task {
    title: string;
    description?: string;
    priority: 'high' | 'medium' | 'low';
    duration: number;
    category: string;
    deadline?: Date;
    createdAt: Date;
    completed: boolean;

    constructor(
        title: string,
        priority: 'high' | 'medium' | 'low',
        duration: number,
        category: string,
        completed: boolean = false,
        description?: string,
        deadline?: Date
    ) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.duration = duration;
        this.category = category;
        this.deadline = deadline;
        this.createdAt = new Date();
        this.completed = completed;
    }
}

export default Task;