import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { YearGroup } from "@/data/experiences"
import { useState, useEffect } from "react"

interface YearNavigationProps {
  experiences: YearGroup[]
  visibleYears: string[]
  onToggleYear: (year: string) => void
}

export function YearNavigation({ experiences, visibleYears, onToggleYear }: YearNavigationProps) {
  const [lastInteractionType, setLastInteractionType] = useState<'mouse' | 'keyboard'>('mouse')

  return (
    <nav aria-label="연도별 경험 필터" className="flex flex-wrap gap-2 justify-center mb-8">
      {experiences.map((exp, index) => (
        <Button
          key={index}
          variant={visibleYears.includes(exp.year) ? "default" : "outline"}
          size="sm"
          className="rounded-full"
          onClick={() => {
            setLastInteractionType('mouse')
            onToggleYear(exp.year)
          }}
          onFocus={(e) => {
            // Tab 키로 인한 포커스인 경우에만 실행
            if (lastInteractionType !== 'mouse' && index !== 0) {
              onToggleYear(exp.year)
            }
          }}
          onKeyDown={() => setLastInteractionType('keyboard')}
        >
          <Calendar className="w-4 h-4 mr-2" />
          {exp.year}
        </Button>
      ))}
    </nav>
  )
} 