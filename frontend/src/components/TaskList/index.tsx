import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Definindo a interface Task
interface Task {
  title: string;
  time: string;
  status: "Concluido" | "Em execução..." | "A fazer";
  category: "Work" | "Personal" | "Study";
}

// Função para gerar o Badge de status
const getStatusBadge = (status: Task['status']) => 
{
  switch (status) {
    case "Concluido":
      return <Badge variant="success">{status}</Badge>;
    case "Em execução...":
      return <Badge variant="in_progress">{status}</Badge>;
    case "A fazer":
      return <Badge variant="destructive">{status}</Badge>;
    default:
      return null;
  }
};

// Seta a interface da lista de task a ser adicionada dentro do elemento
interface TaskList 
{
  tasks : Task[];
}

export default function TaskList({tasks} : TaskList) {
  // Função para renderizar tasks por categoria
  const renderTasksByCategory = (category: Task["category"]) => {
    const filteredTasks = tasks.filter((task) => task.category === category);

    if (filteredTasks.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{category}</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{task.title}</TableCell>
                <TableCell>{getStatusBadge(task.status)}</TableCell>
                <TableCell>{task.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Separator className="mt-4" />
      </div>
    );
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          {renderTasksByCategory("Study")}
          {renderTasksByCategory("Work")}
          {renderTasksByCategory("Personal")}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}