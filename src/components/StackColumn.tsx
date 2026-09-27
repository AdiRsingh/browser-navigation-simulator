import type { Page } from "../types/navigation"

interface StackColumnProps {
  title: string
  pages: Page[]
  type: "back" | "current" | "forward"
}

function StackColumn({
  title,
  pages,
  type,
}: StackColumnProps) {
  const isCurrent = type === "current"

  return (
    <div
      className={`rounded-xl border bg-white p-5 shadow-sm ${
        isCurrent
          ? "border-blue-500 ring-1 ring-blue-500"
          : "border-gray-200"
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-gray-900">
          {title}
        </h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            isCurrent
              ? "bg-blue-100 text-blue-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {pages.length}
        </span>
      </div>

      {pages.length === 0 ? (
        <div className="rounded-lg border-2 border-dashed border-gray-200 p-8 text-center text-sm text-gray-400">
          Empty
        </div>
      ) : (
        <div className="space-y-2">
          {pages
            .slice()
            .reverse()
            .map((page, index) => (
              <div
                key={`${type}-${page.id}-${index}`}
                className={`rounded-lg border p-3 ${
                  isCurrent
                    ? "border-blue-200 bg-blue-50"
                    : "bg-gray-50"
                }`}
              >
                <p className="font-medium text-gray-900">
                  {page.title}
                </p>

                <p className="mt-1 truncate text-xs text-gray-500">
                  {page.url}
                </p>
              </div>
            ))}
        </div>
      )}

      <p className="mt-4 text-center text-xs text-gray-400">
        {isCurrent
          ? "Currently displayed page"
          : "Top item is accessed first"}
      </p>
    </div>
  )
}

export default StackColumn