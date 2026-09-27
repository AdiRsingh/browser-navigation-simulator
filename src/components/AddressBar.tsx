interface AddressBarProps {
  url: string
}

function AddressBar({ url }: AddressBarProps) {
  return (
    <div className="flex min-w-0 flex-1 items-center rounded-lg border bg-gray-50 px-3 py-2 sm:px-4">
      <span className="mr-2 shrink-0 text-gray-400">
        🔒
      </span>

      <span className="truncate font-mono text-xs text-gray-600 sm:text-sm">
        {url}
      </span>
    </div>
  )
}

export default AddressBar