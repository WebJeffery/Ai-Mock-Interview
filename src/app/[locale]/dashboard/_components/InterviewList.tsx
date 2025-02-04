'use client';

import { useRouter } from 'next/navigation';
import InterviewItemCard from './InterviewItemCard';

interface Interview {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

interface InterviewListProps {
  interviews: Interview[];
}

export default function InterviewList({ interviews }: InterviewListProps) {
  const router = useRouter();

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {interviews.map((interview) => (
        <InterviewItemCard
          key={interview.id}
          {...interview}
          onClick={() => router.push(`/dashboard/${interview.id}`)}
        />
      ))}
    </div>
  );
} 