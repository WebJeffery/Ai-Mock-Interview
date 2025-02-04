'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AddNewInterview() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push('/dashboard/new')}
      className="flex items-center gap-2"
    >
      <Plus className="h-4 w-4" />
      新建面试
    </Button>
  );
} 