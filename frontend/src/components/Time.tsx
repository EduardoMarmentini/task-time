"use strict"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { PlayIcon, PauseIcon } from 'lucide-react'
import { useState } from "react"

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
              <Button className="w-full max-w-xs">
                <PlayIcon className="mr-2 h-5 w-5" />
                Start
              </Button>
            </CardContent>
          </Card>
    )
}