/**
 * DEBOUNCE vs THROTTLE — Your practice workspace
 * ===============================================
 *
 * Learn first: node 09-debounce-throttle.js
 */

// =============================================================================
// QUESTION 1
// =============================================================================

// QUESTION:
/**
 * You’re building:

A) Search box — call API while user types
B) Infinite scroll — load more on scroll
C) Window resize — recalculate layout when user stops resizing

 */

// MY ANSWER:
// Debounce, Throttle, Debounce

// =============================================================================
// QUESTION 2
// =============================================================================

// QUESTION:
/**
 * User types "react" quickly (5 keystrokes in 200ms).
    Search uses debounce 300ms.

    How many API calls after they stop typing?
 */

// MY ANSWER:
// 1

// =============================================================================
// QUESTION 3
// =============================================================================

// QUESTION:
/**
 * User scrolls continuously for 2 seconds.
Handler uses throttle 200ms.

Roughly how many times does the handler run? (approx number)
 */

// MY ANSWER:
// 10

// =============================================================================
// QUESTION 4
// =============================================================================

// QUESTION:
/**
 * What happens on each keystroke with debounce?

A) API fires immediately every time
B) Timer resets; API fires only after pause with no new keys
C) API fires once per second max
 */

// MY ANSWER:
// B

// =============================================================================
// QUESTION 5
// =============================================================================

// QUESTION:
/**
 * Why should you clear the debounce timer in useEffect cleanup when the component unmounts?
 */

// MY ANSWER:
// Prevent Memory Leak

// =============================================================================
// NOTES
// =============================================================================

//
