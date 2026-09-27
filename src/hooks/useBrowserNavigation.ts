import { useRef, useState } from "react"
import { Stack } from "../data-structures/Stack"
import type { Page } from "../types/navigation"

export function useBrowserNavigation(initialPage: Page) {
  const backStackRef = useRef<Stack<Page> | null>(null)
  const forwardStackRef = useRef<Stack<Page> | null>(null)

  if (backStackRef.current === null) {
    backStackRef.current = new Stack<Page>()
  }

  if (forwardStackRef.current === null) {
    forwardStackRef.current = new Stack<Page>()
  }

  const backStackObject = backStackRef.current
  const forwardStackObject = forwardStackRef.current

  const [backStack, setBackStack] = useState<Page[]>([])
  const [forwardStack, setForwardStack] = useState<Page[]>([])
  const [currentPage, setCurrentPage] = useState<Page>(initialPage)

  const [history, setHistory] = useState<string[]>([
    `Opened ${initialPage.title}`,
  ])

  // Navigate to a new page
  const navigateTo = (newPage: Page): void => {
    // Do nothing if the user clicks the page
    // that is already currently open.
    if (newPage.id === currentPage.id) {
      return
    }

    // Current page goes into Back Stack
    backStackObject.push(currentPage)

    // New page becomes Current Page
    setCurrentPage(newPage)

    // Custom project behavior:
    // Forward Stack is NOT cleared.

    // Update UI
    setBackStack(backStackObject.toArray())
    setForwardStack(forwardStackObject.toArray())

    setHistory((previous) => [
      ...previous,
      `Navigated to ${newPage.title}`,
    ])
  }

  // Back operation
  const goBack = (): void => {
    if (backStackObject.isEmpty()) {
      return
    }

    // Current page goes into Forward Stack
    forwardStackObject.push(currentPage)

    // Remove top page from Back Stack
    const previousPage = backStackObject.pop()

    if (!previousPage) {
      return
    }

    // Previous page becomes Current Page
    setCurrentPage(previousPage)

    // Update UI
    setBackStack(backStackObject.toArray())
    setForwardStack(forwardStackObject.toArray())

    setHistory((previous) => [
      ...previous,
      `Back → ${previousPage.title}`,
    ])
  }

  // Forward operation
  const goForward = (): void => {
    if (forwardStackObject.isEmpty()) {
      return
    }

    // Current page goes into Back Stack
    backStackObject.push(currentPage)

    // Remove top page from Forward Stack
    const nextPage = forwardStackObject.pop()

    if (!nextPage) {
      return
    }

    // Forward page becomes Current Page
    setCurrentPage(nextPage)

    // Update UI
    setBackStack(backStackObject.toArray())
    setForwardStack(forwardStackObject.toArray())

    setHistory((previous) => [
      ...previous,
      `Forward → ${nextPage.title}`,
    ])
  }

  // Close current page
  const closeCurrentPage = (): void => {
    // If there is no previous page,
    // the current page cannot be closed.
    if (backStackObject.isEmpty()) {
      return
    }

    // Remove the top page from Back Stack
    const previousPage = backStackObject.pop()

    if (!previousPage) {
      return
    }

    // Previous page becomes Current Page
    setCurrentPage(previousPage)

    // Update UI
    setBackStack(backStackObject.toArray())
    setForwardStack(forwardStackObject.toArray())

    setHistory((previous) => [
      ...previous,
      `Closed ${currentPage.title} → ${previousPage.title}`,
    ])
  }

  return {
    currentPage,
    backStack,
    forwardStack,

    navigateTo,
    goBack,
    goForward,
    closeCurrentPage,

    canGoBack: backStack.length > 0,
    canGoForward: forwardStack.length > 0,

    history,
  }
}