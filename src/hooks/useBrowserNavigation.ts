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

  // Visit a new page
  const navigateTo = (newPage: Page): void => {
    // Do nothing if the user selects the current page
    if (newPage.id === currentPage.id) {
      return
    }

    // Put the current page into the Back Stack
    backStackObject.push(currentPage)

    // A new navigation creates a new path,
    // so the Forward Stack is cleared.
    forwardStackObject.clear()

    // Make the new page the current page
    setCurrentPage(newPage)

    // Update React state for the UI
    setBackStack(backStackObject.toArray())
    setForwardStack(forwardStackObject.toArray())

    setHistory((previous) => [
      ...previous,
      `Navigated to ${newPage.title}`,
    ])
  }

  // Go Back
  const goBack = (): void => {
    if (backStackObject.isEmpty()) {
      return
    }

    // Current page goes into Forward Stack
    forwardStackObject.push(currentPage)

    // Get the previous page from Back Stack
    const previousPage = backStackObject.pop()

    if (!previousPage) {
      return
    }

    // Previous page becomes current
    setCurrentPage(previousPage)

    // Update React state
    setBackStack(backStackObject.toArray())
    setForwardStack(forwardStackObject.toArray())

    setHistory((previous) => [
      ...previous,
      `Back → ${previousPage.title}`,
    ])
  }

  // Go Forward
  const goForward = (): void => {
    if (forwardStackObject.isEmpty()) {
      return
    }

    // Current page goes into Back Stack
    backStackObject.push(currentPage)

    // Get the next page from Forward Stack
    const nextPage = forwardStackObject.pop()

    if (!nextPage) {
      return
    }

    // Next page becomes current
    setCurrentPage(nextPage)

    // Update React state
    setBackStack(backStackObject.toArray())
    setForwardStack(forwardStackObject.toArray())

    setHistory((previous) => [
      ...previous,
      `Forward → ${nextPage.title}`,
    ])
  }

  // Close current page
  const closeCurrentPage = (): void => {
    if (backStackObject.isEmpty()) {
      return
    }

    // Remove the previous page from Back Stack
    const previousPage = backStackObject.pop()

    if (!previousPage) {
      return
    }

    // Previous page becomes current
    setCurrentPage(previousPage)

    // Update React state
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
