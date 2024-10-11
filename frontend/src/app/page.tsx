"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Timer from "@/components/Timer"
import CreateTask from "@/components/CreateTask"
import TaskList from "@/components/TaskList"
import { useState } from "react"

interface Task {
  title: string;
  time: string;
  status: "Concluido" | "Em execução..." | "A fazer";
  category: "Work" | "Personal" | "Study";
}

export default function Home() {
  
  const [tasks, setTasks] = useState<Task[]>([
    { title: "Estudar Ingles", category: "Study", status: "A fazer", time: "01:00:00" },
    { title: "Ler e-mails", category: "Work", status: "A fazer", time: "01:00:00" },
    { title: "Academia", category: "Personal", status: "A fazer", time: "01:00:00" },
    { title: "Estudar TypeScript", category: "Study", status: "A fazer", time: "01:00:00" },
  ]);

  const onAddTask = (task: Task) => {
    setTasks((newTask) => [
      ...newTask, { ...task, status: "A fazer" }, 
    ]);
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-background p-4">
      <div className="flex flex-col items-center space-y-4 mb-8">
        <Avatar className="w-24 h-24">
          <AvatarImage src="https://github.com/EduardoMarmentini.png" alt="Eduardo Marmentini" />
          <AvatarFallback>ED</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl font-bold">Eduardo Marmentini</h1>
      </div>

      <div className="flex justify-center w-full max-w-5xl space-x-8">
        <div className="flex flex-col space-y-8 w-full max-w-md">
          <Timer/>
          <CreateTask onAddTask={onAddTask}/> 
        </div>
        <TaskList tasks={tasks}/> 
      </div>
    </main>
  )
}