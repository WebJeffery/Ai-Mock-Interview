'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatDate } from '@/lib/utils';

interface InterviewItemCardProps {
  title: string;
  description: string;
  createdAt: Date;
  onClick: () => void;
}

export default function InterviewItemCard({
  title,
  description,
  createdAt,
  onClick,
}: InterviewItemCardProps) {
  return (
    <Card
      className="cursor-pointer transition-all hover:shadow-md"
      onClick={onClick}
    >
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="mt-2 text-xs text-muted-foreground">
          创建于 {formatDate(createdAt)}
        </p>
      </CardContent>
    </Card>
  );
} 