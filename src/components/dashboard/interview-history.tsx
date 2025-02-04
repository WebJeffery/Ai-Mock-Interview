import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function InterviewHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>面试历史</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* 面试历史列表将在这里实现 */}
          <p className="text-sm text-muted-foreground">暂无面试记录</p>
        </div>
      </CardContent>
    </Card>
  )
} 