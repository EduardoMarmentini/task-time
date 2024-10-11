"use client";

import { useState } from "react";
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
  time: string;
  category: "Study" | "Personal" | "Work";
}

export default function CreateTask({ onAddTask }: { onAddTask: (task: Task) => void }) {

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("00:00:00");
  const [category, setCategory] = useState<Task["category"] | "">("");

  // Função que envia a nova task para a lista
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Verifica se os campos preenchidos
    if (!title || !time || !category) {
      alert("Preencha os campos");
      return;
    }

    const newTask: Task = { title, time, category: category as Task["category"] };

    // Chama a função para adicionar a task
    onAddTask(newTask); 

    // Limpar o formulário
    setTitle("");
    setTime("00:00:00");
    setCategory("");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">New Task</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="title">Task Title</Label>
            <Input
              id="title"
              placeholder="Enter task title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Input
              id="time"
              type="time"
              step="60"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select
              value={category}
              onValueChange={(value) => setCategory(value as Task["category"])}
            >
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