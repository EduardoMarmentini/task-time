import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PlayIcon, PauseIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Home() {
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
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center">Timer</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-6 pt-6">
              <div className="text-5xl font-mono tabular-nums" aria-live="polite">
                00:00:00
              </div>
              <Button className="w-full max-w-xs">
                <PlayIcon className="mr-2 h-5 w-5" />
                Start
              </Button>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">New Task</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Task Title</Label>
                  <Input id="title" placeholder="Enter task title" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="group">Group</Label>
                  <Select>
                    <SelectTrigger id="group">
                      <SelectValue placeholder="Select a group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="study">Study</SelectItem>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="work">Work</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Add Task</Button>
            </CardFooter>
          </Card>
        </div>
        
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-400px pr-4">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Study</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Teste</TableCell>
                        <TableCell>X</TableCell>
                        <TableCell>01:00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Teste</TableCell>
                        <TableCell>X</TableCell>
                        <TableCell>01:00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Teste</TableCell>
                        <TableCell>X</TableCell>
                        <TableCell>01:00</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
                <Separator className="mt-4" />
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Personal</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Teste</TableCell>
                        <TableCell>X</TableCell>
                        <TableCell>01:00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Teste</TableCell>
                        <TableCell>X</TableCell>
                        <TableCell>01:00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Teste</TableCell>
                        <TableCell>X</TableCell>
                        <TableCell>01:00</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
                <Separator className="mt-4" />
              </div>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Work</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Title</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Teste</TableCell>
                        <TableCell>X</TableCell>
                        <TableCell>01:00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Teste</TableCell>
                        <TableCell>X</TableCell>
                        <TableCell>01:00</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Teste</TableCell>
                        <TableCell>X</TableCell>
                        <TableCell>01:00</TableCell>
                      </TableRow>
                  </TableBody>
                </Table>
                <Separator className="mt-4" />
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}