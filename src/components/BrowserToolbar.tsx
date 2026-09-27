import type { Page } from "../types/navigation"
import AddressBar from "./AddressBar"
import NavigationButtons from "./NavigationButtons"

interface BrowserToolbarProps {
  currentPage: Page
  canGoBack: boolean
  canGoForward: boolean
  canClose: boolean
  onBack: () => void
  onForward: () => void
  onClose: () => void
}

function BrowserToolbar({
  currentPage,
  canGoBack,
  canGoForward,
  canClose,
  onBack,
  onForward,
  onClose,
}: BrowserToolbarProps) {
  return (
    <div className="border-b bg-white p-3 sm:p-4">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">

        {/* Back / Forward */}
        <NavigationButtons
          canGoBack={canGoBack}
          canGoForward={canGoForward}
          onBack={onBack}
          onForward={onForward}
        />

        {/* Reload */}
        <button
          className="rounded-lg border bg-white px-3 py-2 text-lg text-gray-600 shadow-sm transition hover:bg-gray-50"
          title="Reload"
        >
          ↻
        </button>

        {/* Address + Close */}
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <AddressBar url={currentPage.url} />

          <button
            onClick={onClose}
            disabled={!canClose}
            title="Close current page"
            className="shrink-0 rounded-lg border bg-white px-3 py-2 text-lg leading-none text-gray-600 shadow-sm transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40"
          >
            ×
          </button>
        </div>

      </div>
    </div>
  )
}

export default BrowserToolbar