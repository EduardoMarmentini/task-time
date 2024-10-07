"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Task {
  title: string;
  category: string;
  status: "Concluido" | "A fazer";
  time: string;
}

interface CreateTaskProps {
  onAddTask: (newTask: Task) => void;
}

export default function CreateTask({ onAddTask }: CreateTaskProps) {
  const [task, setTask] = useState<Task>({
    title: "",
    time: "",
    category: "", // Default value
    status: "A fazer",
  });

  const onSave = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!task.title || !task.time || !task.category) {
      alert("Preencha todos os campos antes de salvar!");
      return;
    }

    onAddTask(task);

    setTask({ title: "", time: "", category: "", status: "A fazer" });
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setTask((prevTask) => ({ ...prevTask, [id]: value }));
  };

  const onSelectChange = (value: "Study" | "Personal" | "Work") => {
    setTask((prevTask) => ({ ...prevTask, category: value }));
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">New Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSave} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Task Title</Label>
            <Input
              id="title"
              placeholder="Enter task title"
              value={task.title}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              type="time"
              value={task.time}
              onChange={onInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select onValueChange={onSelectChange} value={task.category}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Study">Study</SelectItem>
                <SelectItem value="Personal">Personal</SelectItem>
                <SelectItem value="Work">Work</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full">
            Add Task
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}