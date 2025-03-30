import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { YearGroup } from "@/data/experiences"

interface YearNavigationProps {
  experiences: YearGroup[]
  visibleYears: string[]
  onToggleYear: (year: string) => void
}

export function YearNavigation({ experiences, visibleYears, onToggleYear }: YearNavigationProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {experiences.map((exp, index) => (
        <Button
          key={index}
          variant={visibleYears.includes(exp.year) ? "default" : "outline"}
          size="sm"
          className="rounded-full"
          onClick={() => onToggleYear(exp.year)}
        >
          <Calendar className="w-4 h-4 mr-2" />
          {exp.year}
        </Button>
      ))}
    </div>
  )
} 