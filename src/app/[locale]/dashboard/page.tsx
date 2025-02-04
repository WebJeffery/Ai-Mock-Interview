import { Metadata } from 'next'
import { InterviewHistory } from '@/components/dashboard/interview-history'
import { InterviewStats } from '@/components/dashboard/interview-stats'
import { NewInterview } from '@/components/dashboard/new-interview'
import { RecentActivity } from '@/components/dashboard/recent-activity'

export const metadata: Metadata = {
  title: '仪表盘 - AI Mock Interview',
  description: '查看你的面试历史和数据统计',
}

export default async function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <NewInterview />
        </div>
        <div className="w-full md:w-[320px]">
          <InterviewStats />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <InterviewHistory />
        </div>
        <div className="w-full md:w-[320px]">
          <RecentActivity />
        </div>
      </div>
    </div>
  )
} 