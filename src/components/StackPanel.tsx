import type { Page } from "../types/navigation"
import StackColumn from "./StackColumn"

interface StackPanelProps {
  backStack: Page[]
  currentPage: Page
  forwardStack: Page[]
}

function StackPanel({
  backStack,
  currentPage,
  forwardStack,
}: StackPanelProps) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Navigation State
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Visual representation of the browser navigation stacks.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <StackColumn
          title="Back Stack"
          pages={backStack}
          type="back"
        />

        <StackColumn
          title="Current Stack"
          pages={[currentPage]}
          type="current"
        />

        <StackColumn
          title="Forward Stack"
          pages={forwardStack}
          type="forward"
        />
      </div>
    </section>
  )
}

export default StackPanel