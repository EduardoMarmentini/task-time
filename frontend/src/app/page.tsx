"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Timer from "@/components/Time";
import CreateTask from "@/components/CreateTask";
import TaskList from "@/components/TaskList";

// Definindo o tipo da tarefa
interface Task {
  title: string;
  category: "Study" | "Personal" | "Work";
  status: "Concluido" | "A fazer";
  time: string;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { title: "Estudar React", category: "Study", status: "Concluido", time: "02:00" },
    { title: "Preparar apresentação", category: "Personal", status: "A fazer", time: "01:30" },
    { title: "Ler e-mails", category: "Work", status: "A fazer", time: "01:00" },
    { title: "Correr", category: "Personal", status: "A fazer", time: "01:00:00" },
    { title: "Fazer commit", category: "Work", status: "A fazer", time: "01:00" },
    { title: "Estudar ingles", category: "Study", status: "A fazer", time: "10:00" },
  ]);

  // Função para adicionar uma nova tarefa
  const addTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
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
          <Timer />
          {/* Passando a função de adicionar tarefa como prop */}
          <CreateTask onAddTask={addTask} />
        </div>
        {/* Passando as tarefas como prop para TaskList */}
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}
