import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


interface Task {
  title: string
  category: "Study" | "Personal" | "Work"
  status: "Concluido" | "A fazer"
  time: string
}

interface TaskListProps {
  tasks?: Task[]
}

export default function TaskList({ tasks = [] }: TaskListProps) {
  const categories: Array<Task["category"]> = ["Study", "Personal", "Work"]

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          {categories.map((category, index) => (
            <div key={index} className="mb-6">
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
                  {tasks
                    ?.filter((task) => task.category === category)
                    .map((task, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{task.title}</TableCell>
                        <TableCell>
                          <Badge variant={task.status === "Concluido" ? "success" : "destructive"}>
                            {task.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{task.time}</TableCell>
                      </TableRow>
                    )) ?? []}
                </TableBody>
              </Table>
              <Separator className="mt-4" />
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
} 