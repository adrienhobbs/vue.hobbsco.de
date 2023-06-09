import { onBeforeUnmount } from 'vue'
interface CallbackArgs {
  progress: number
  timeElapsed: number
  timestamp: DOMHighResTimeStamp
}

export function useRaf(callback: (args: CallbackArgs) => void, duration: number, immediate = true) {
  let requestID: number | null
  let progress: number | null
  let previousTimestamp = 0
  let totalDelta = 0
  let isActive = false

  function loop(timestamp: DOMHighResTimeStamp) {
    if (!isActive) {
      isActive = true
      previousTimestamp = timestamp
    }

    totalDelta = totalDelta + timestamp - previousTimestamp

    progress = totalDelta / duration

    if (totalDelta > duration && requestID) {
      cancelAnimationFrame(requestID)
      requestID = null
      isActive = false

      return
    }

    callback({ timestamp, timeElapsed: totalDelta, progress: parseFloat(progress.toFixed(2)) })

    previousTimestamp = timestamp
    requestID = requestAnimationFrame(loop)
  }

  function start() {
    if (isActive) return
    requestID = requestAnimationFrame(loop)
  }

  function pause() {
    if (requestID) {
      cancelAnimationFrame(requestID)
      isActive = false
    }
  }

  function reset() {
    if (requestID) {
      cancelAnimationFrame(requestID)
    }
    isActive = false
    progress = null
    previousTimestamp = 0
    totalDelta = 0
    isActive = false
    requestID = null

    callback({ timestamp: 0, timeElapsed: 0, progress: 0 })
  }

  if (immediate) start()
  onBeforeUnmount(reset)

  return {
    start,
    pause,
    reset
  }
}
