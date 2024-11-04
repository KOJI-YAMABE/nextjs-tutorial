import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import { BBSPost } from '@/app/types/types';

export const BBSCard = ({ post }: { post: BBSPost }) => {
    const { id, username, title, content, createdAt } = post
    return (
        <div className="grid lg:grid-cols-3 px-4 py-4 gap-4">
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{username}</CardDescription>
                </CardHeader>
                <CardContent>
                    {content}
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link className="text-blue-500" href={`/bbs-posts/${id}`}>Read More</Link>
                </CardFooter>
            </Card>
        </div>
    )
}
