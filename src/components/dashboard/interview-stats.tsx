import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function InterviewStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>数据统计</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* 统计数据将在这里实现 */}
          <p className="text-sm text-muted-foreground">暂无统计数据</p>
        </div>
      </CardContent>
    </Card>
  )
} 