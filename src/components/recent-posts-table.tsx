import * as React from 'react'
import { format } from 'date-fns'
import { ExternalLink } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import type { Radar } from '@/types'

interface RecentPostsTableProps {
  radars: Radar[];
}

export function RecentPostsTable({ radars }: RecentPostsTableProps) {
  const allPosts = React.useMemo(() => {
    return radars
      .flatMap(radar => 
        radar.runs?.flatMap(run => 
          run.results.map(result => ({
            ...result,
            radarName: radar.description,
            timestamp: run.timestamp,
          }))
        ) ?? []
      )
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .slice(0, 10)
  }, [radars])

  if (allPosts.length === 0) {
    return (
      <div className="rounded-md border p-8 text-center">
        <p className="text-sm text-muted-foreground">No results found yet. Create a radar to start monitoring.</p>
      </div>
    )
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableCaption>A list of your most recent results from all radars</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Profile</TableHead>
            <TableHead>Radar</TableHead>
            <TableHead className="max-w-[500px]">Content</TableHead>
            <TableHead>Score</TableHead>
            <TableHead className="w-[80px]">Link</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium">
                {format(new Date(post.timestamp), 'MMM d, yyyy')}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={post.profile.avatarUrl} alt={post.profile.name} />
                    <AvatarFallback>{post.profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">{post.profile.name}</span>
                </div>
              </TableCell>
              <TableCell>{post.radarName}</TableCell>
              <TableCell className="max-w-[500px] truncate">
                {post.content}
              </TableCell>
              <TableCell>{post.matchScore}</TableCell>
              <TableCell>
                <a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}