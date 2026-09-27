interface NavigationButtonsProps {
  canGoBack: boolean
  canGoForward: boolean
  onBack: () => void
  onForward: () => void
}

function NavigationButtons({
  canGoBack,
  canGoForward,
  onBack,
  onForward,
}: NavigationButtonsProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onBack}
        disabled={!canGoBack}
        className="rounded-lg border bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
      >
        <span className="sm:hidden">←</span>
        <span className="hidden sm:inline">← Back</span>
      </button>

      <button
        onClick={onForward}
        disabled={!canGoForward}
        className="rounded-lg border bg-white px-3 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 sm:px-4"
      >
        <span className="sm:hidden">→</span>
        <span className="hidden sm:inline">Forward →</span>
      </button>
    </div>
  )
}

export default NavigationButtons