import { pages } from "./data/pages"
import { useBrowserNavigation } from "./hooks/useBrowserNavigation"

import BrowserToolbar from "./components/BrowserToolbar"
import OperationLog from "./components/OperationLog"
import SimulatedPage from "./components/SimulatedPage"
import StackPanel from "./components/StackPanel"
import StatusBar from "./components/StatusBar"

function App() {
  const {
    currentPage,
    backStack,
    forwardStack,
    navigateTo,
    goBack,
    goForward,
    closeCurrentPage,
    canGoBack,
    canGoForward,
    history,
  } = useBrowserNavigation(pages[0])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">

      {/* Project Header */}
      <header className="border-b bg-white px-6 py-5">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-bold">
            Browser Navigation Simulator
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Browser navigation simulation using Stack data structures
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 p-6">

        {/* Browser */}
        <section className="overflow-hidden rounded-xl border bg-white shadow-sm">

          <BrowserToolbar
            currentPage={currentPage}
            canGoBack={canGoBack}
            canGoForward={canGoForward}
            canClose={canGoBack}
            onBack={goBack}
            onForward={goForward}
            onClose={closeCurrentPage}
          />

          <SimulatedPage
            page={currentPage}
          />

          <StatusBar
            backCount={backStack.length}
            forwardCount={forwardStack.length}
          />

        </section>

        {/* Page Selection */}
        <section className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="mb-4">
            <h2 className="text-xl font-bold">
              Visit a Page
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Select a page to simulate navigation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => navigateTo(page)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition ${
                  currentPage.id === page.id
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                {page.title}
              </button>
            ))}
          </div>
        </section>

        {/* Stack Visualization */}
        <StackPanel
          backStack={backStack}
          currentPage={currentPage}
          forwardStack={forwardStack}
        />

        {/* Operation Log */}
        <OperationLog history={history} />

      </main>
    </div>
  )
}

export default App