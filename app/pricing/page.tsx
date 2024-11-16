'use client'

import { Avatar, Button, Card, Badge } from "@nextui-org/react"
import { Clock, MessageSquare, Heart, Share2, Plus } from 'lucide-react'
import Image from "next/image"

export default function Component() {
  return (
    <div className="max-w-full mx-auto p-4 md:p-6">
      <Card className="border-none shadow-none">
        <div className="space-y-6 px-0">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              AI Series Part IV: Creating a RAG chatbot with LangChain (NextJS)
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Avatar src="/placeholder.svg" name="TS" size="sm" />
                <span className="font-medium text-foreground">Tiago Souto</span>
              </div>

              {/* Follow Button */}
              <Button variant="light" size="sm" className="mt-2 sm:mt-0 sm:ml-4">
                Follow
              </Button>
            </div>

            {/* Time read and Date in separate line */}
            <div className="flex flex-wrap sm:flex-nowrap sm:gap-2 mt-2">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>8 min read</span>
              </div>
              <span>·</span>
              <span>Apr 7, 2024</span>
            </div>
          </div>
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Article cover"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
        <div className="px-0 mt-6">
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Badge color="secondary" variant="flat">LangChain</Badge>
            <Badge color="secondary" variant="flat">NextJS</Badge>
            <Badge color="secondary" variant="flat">Artificial Intelligence</Badge>
            <Badge color="secondary" variant="flat">Software Development</Badge>
            <Badge color="secondary" variant="flat">OpenAI</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="light" size="sm" className="gap-2">
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Like</span>
              </Button>
              <Button variant="light" size="sm" className="gap-2">
                <MessageSquare className="w-4 h-4" />
                <span className="hidden sm:inline">Comment</span>
              </Button>
              <Button variant="light" size="sm" className="gap-2">
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </Card>
      <Button
        isIconOnly
        className="fixed bottom-6 right-6 rounded-full w-12 h-12 bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
      >
        <Plus className="w-6 h-6" />
        <span className="sr-only">New post</span>
      </Button>
    </div>
  )
}
