interface OperationLogProps {
  history: string[]
}

function OperationLog({ history }: OperationLogProps) {
  return (
    <section className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">
          Operation Log
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Record of navigation operations performed by the user.
        </p>
      </div>

      <div className="space-y-2">
        {history.map((operation, index) => (
          <div
            key={index}
            className="rounded-lg bg-gray-50 px-4 py-3 font-mono text-sm text-gray-600"
          >
            <span className="mr-3 text-gray-400">
              {String(index + 1).padStart(2, "0")}
            </span>

            {operation}
          </div>
        ))}
      </div>
    </section>
  )
}

export default OperationLog