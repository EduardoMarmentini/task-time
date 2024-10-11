"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Pause, Square } from 'lucide-react'

interface TimerProps {
  selectedTask: {
    id: string
    title: string
    time: string
    status: string
  } | null
  onTaskComplete: (taskId: string) => void
  onTaskStart: (taskId: string) => void
  onTaskPause: (taskId: string) => void
}

export default function Timer() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Timer</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-6 pt-6">
        <div className="text-5xl font-mono tabular-nums" aria-live="polite">
          00:00:00
        </div>
        <div className="text-xl font-semibold">
        </div>
        <div className="flex space-x-4">
          <Button >
            <Play className="mr-2 h-5 w-5" />
            Start
          </Button>
          <Button>
            <Square className="mr-2 h-5 w-5" />
            Stop
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}