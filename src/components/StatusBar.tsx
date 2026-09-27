interface StatusBarProps {
  backCount: number
  forwardCount: number
}

function StatusBar({
  backCount,
  forwardCount,
}: StatusBarProps) {
  return (
    <div className="flex items-center justify-between border-t bg-gray-50 px-5 py-3 text-xs text-gray-500">
      <span>
        Back Stack: {backCount}
      </span>

      <span>
        LIFO — Last In, First Out
      </span>

      <span>
        Forward Stack: {forwardCount}
      </span>
    </div>
  )
}

export default StatusBar