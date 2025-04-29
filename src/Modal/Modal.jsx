import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./Modal.scss"

/**
 * Modal component for displaying overlay dialogs with customizable header, content, and styles.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {boolean} props.isOpen - Determines whether the modal is currently open.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @param {Object} props.modalElements - Elements to display inside the modal.
 * @param {string} props.modalElements.title - Title text displayed at the top of the modal.
 * @param {string} props.modalElements.subtitle - Subtitle text displayed below the title.
 * @param {string} [props.modalElements.text] - Optional plain text message displayed in the body.
 * @param {React.ReactNode} [props.modalElements.htmlElement] - Optional custom HTML or JSX to render inside the modal.
 * @param {string} [props.modalElements.closeButtonText] - Text for the close button at the bottom of the modal (defaults to "Close").
 * @param {Object} [props.modalOptions] - Optional styling and layout options.
 * @param {string} [props.modalOptions.headerBackgroundColor] - Background color of the modal header.
 * @param {string} [props.modalOptions.headerTextColor] - Text color of the modal header.
 * @param {string} [props.modalOptions.backdropColor] - Background color of the modal backdrop.
 * @param {boolean} [props.modalOptions.shadowed=true] - Whether a shadow effect is applied to the modal box.
 * @param {number} [props.fadeDuration=300] - Duration of the fade-in and fade-out animations, in milliseconds.
 *
 * @example
 * <Modal
 *   isOpen={true}
 *   onClose={handleClose}
 *   modalElements={{
 *     title: "Success",
 *     subtitle: "Employee created",
 *     text: "Employee John Doe has been added.",
 *     htmlElement: <p>Additional custom content here</p>,
 *     closeButtonText: "Dismiss"
 *   }}
 *   modalOptions={{
 *     headerBackgroundColor: "#4CAF50",
 *     headerTextColor: "#fff",
 *     backdropColor: "rgba(0, 0, 0, 0.5)",
 *     shadowed: true
 *   }}
 *   fadeDuration={500}
 * />
 */
const Modal = ({
  isOpen,
  onClose,
  modalElements,
  modalOptions = {},
  fadeDuration = 300,
}) => {
  const [visible, setVisible] = useState(isOpen)
  const [fadeState, setFadeState] = useState("fade-in")

  // Handle modal visibility and fade animations when `isOpen` changes
  useEffect(() => {
    if (isOpen) {
      setVisible(true)
      setFadeState("fade-in")
    } else {
      setFadeState("fade-out")
      const timer = setTimeout(() => setVisible(false), fadeDuration)
      return () => clearTimeout(timer)
    }
  }, [isOpen, fadeDuration])

  // Listen for "Escape" key to close the modal
  useEffect(() => {
    if (!visible) return
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [visible, onClose])

  // Do not render the modal if not visible
  if (!visible) return null

  // Customize header style based on options
  const headerStyle = {
    backgroundColor: modalOptions.headerBackgroundColor,
    color: modalOptions.headerTextColor,
  }

  return (
    <div
      className={`modal-backdrop ${fadeState}`}
      style={{
        backgroundColor: modalOptions.backdropColor || "rgba(0,0,0,0.7)",
        transitionDuration: `${fadeDuration}ms`,
      }}
      // Close modal when clicking outside the content
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div
        className={`modal-content ${modalOptions.shadowed !== false ? "shadowed" : ""}`}
        style={{ transitionDuration: `${fadeDuration}ms` }}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal header with title and close button */}
        <div className="modal-header" style={headerStyle}>
          <h2 className="modal-title">{modalElements.title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>

        {/* Modal subtitle */}
        <h3 className="modal-subtitle">{modalElements.subtitle}</h3>

        {/* Optional plain text section */}
        {modalElements.text && (
          <p className="modal-text">{modalElements.text}</p>
        )}

        {/* Optional custom HTML or JSX section */}
        <div className="modal-htmlElement">
          {modalElements.htmlElement}
        </div>

        {/* Bottom close button */}
        <button
          className="modal-button-close"
          onClick={onClose}
          style={headerStyle}
        >
          {modalElements.closeButtonText || "Close"}
        </button>
      </div>
    </div>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  modalElements: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string,
    htmlElement: PropTypes.node,
    closeButtonText: PropTypes.string,
  }).isRequired,
  modalOptions: PropTypes.shape({
    headerBackgroundColor: PropTypes.string,
    headerTextColor: PropTypes.string,
    backdropColor: PropTypes.string,
    shadowed: PropTypes.bool,
  }),
  fadeDuration: PropTypes.number,
}

export default Modal


