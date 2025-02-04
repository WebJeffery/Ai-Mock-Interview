import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>最近活动</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* 最近活动列表将在这里实现 */}
          <p className="text-sm text-muted-foreground">暂无活动记录</p>
        </div>
      </CardContent>
    </Card>
  )
} 