"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const PopupNotification = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show popup on every reload after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 1500)

    // Auto close after 10 seconds
    const autoCloseTimer = setTimeout(() => {
      setIsVisible(false)
    }, 11500) // 1.5s delay + 10s display

    return () => {
      clearTimeout(timer)
      clearTimeout(autoCloseTimer)
    }
  }, [])

  const closePopup = () => {
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-5 backdrop-blur-md bg-white/30 dark:bg-black/30 border border-red-300 shadow-xl rounded-3xl p-6 z-50 max-w-md"
          style={{
            borderRadius: "28px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <button
            onClick={closePopup}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close notification"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div className="text-center px-4">
            <h3 className="text-3xl font-black mb-2 text-black dark:text-white leading-tight">
              Ready to Transform Your Fitness Journey?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">Step Into the Spotlight of Stallion Classic</p>

            <Link
              href="/events"
              className="inline-block bg-red-500 text-white font-bold py-3 px-8 rounded-md hover:bg-red-600 transition-all duration-300 uppercase tracking-wider"
            >
              Register Now
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PopupNotification
