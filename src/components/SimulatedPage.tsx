import type { Page } from "../types/navigation"

interface SimulatedPageProps {
  page: Page
}

function SimulatedPage({ page }: SimulatedPageProps) {
  return (
    <div className="min-h-[460px] bg-white px-8 py-12">
      <div className="mx-auto max-w-4xl">

        {/* Page Header */}
        <div>
          <p className="mb-3 text-sm font-medium text-green-600">
            SIMULATED WEB PAGE
          </p>

          <h1 className="text-4xl font-bold text-gray-900">
            {page.title}
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-600">
            {page.description}
          </p>
        </div>

        {/* Page Content */}
        <div className="mt-10 rounded-xl border bg-gray-50 p-8">
          <p className="text-gray-700">
            {page.content}
          </p>
        </div>

        {/* URL */}
        <div className="mt-8 rounded-lg bg-gray-900 p-4">
          <p className="font-mono text-sm text-gray-300">
            {page.url}
          </p>
        </div>

      </div>
    </div>
  )
}

export default SimulatedPage