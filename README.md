# Modal Component

A customizable and accessible **modal (dialog)** component built with **React**, supporting dynamic content, smooth CSS transitions, and flexible styling.

## ✨ Features
- Smooth **CSS-based** open/close animations
- Escape key support to close the modal
- Click outside to close
- Customizable header and backdrop colors
- Supports both text and custom HTML/JSX content
- Optional shadow around the modal
- Fully typed with **PropTypes**
- Lightweight and dependency-free

---

## 🔧 Prerequisites
Before using this component, make sure your project meets the following requirements:

✅ Uses React version 17, 18, or 19

✅ Has ReactDOM installed

✅ Includes PropTypes (already included in the package if you're using a bundler)

✅ Supports CSS or SCSS handling (via Vite, Webpack, or CRA)

✅ Accepts peer dependencies (ensure that react and react-dom are not duplicated in node_modules)

---

## 📦 Installation

Clone or copy the `Modal` component into your project
or use `npm install jackvpt-custom-modal`.

---

## 🚀 Usage

```jsx
import Modal from "./Modal"

function App() {
  const [isModalOpen, setModalOpen] = React.useState(false)

  const handleOpen = () => setModalOpen(true)
  const handleClose = () => setModalOpen(false)

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        modalElements={{
          title: "Success",
          subtitle: "Employee created",
          text: "Employee John Doe has been added.",
          htmlElement: <p>Additional custom content here.</p>,
          closeButtonText: "Close Modal",
        }}
        modalOptions={{
          headerBackgroundColor: "#4caf50",
          headerTextColor: "#fff",
          backdropColor: "rgba(0, 0, 0, 0.5)",
          shadowed: true,
        }}
      />
    </>
  )
}
```

---

## ⚙️ Props

### Required Props
| Prop            | Type        | Description                         |
|-----------------|-------------|-------------------------------------|
| `isOpen`        | `boolean`    | Controls the visibility of the modal. |
| `onClose`       | `function`   | Function to call when modal should close. |
| `modalElements` | `object`     | Defines the content displayed in the modal. |

### Optional Props
| Prop              | Type      | Description                         |
|-------------------|-----------|-------------------------------------|
| `modalElements.title` | `string` | Modal title text. |
| `modalElements.subtitle` | `string` | Modal subtitle text. |
| `modalElements.text` | `string` | Optional plain text content. |
| `modalElements.htmlElement` | `ReactNode` | Optional JSX/HTML to render. |
| `modalElements.closeButtonText` | `string` | Text for the close button (default: "Close"). |
| `modalOptions.headerBackgroundColor` | `string` | Header background color. |
| `modalOptions.headerTextColor` | `string` | Header text color. |
| `modalOptions.backdropColor` | `string` | Backdrop background color (default: `rgba(0, 0, 0, 0.7)`). |
| `modalOptions.shadowed` | `boolean` | Enables/disables shadow around the modal (default: `true`). |

---

## 🎨 Styling

The component uses **CSS transitions** defined in the accompanying SCSS file (`Modal.scss`).

Main classes:
- `.modal-backdrop`
- `.modal-content`
- `.modal-header`
- `.modal-close`
- `.modal-subtitle`
- `.modal-text`
- `.modal-htmlElement`
- `.modal-button-close`
- `.shadowed`

You can easily override or extend the styles based on your project needs.

---

## 🛡 Accessibility

- **Keyboard** accessible (press Escape key to close)
- **Clickable backdrop** to close the modal
- **Semantic** and accessible HTML structure

---

## 📄 License

This component is free to use and modify under the [MIT License](LICENSE).

---

# 📝 Notes

- The modal appears/disappears using CSS transitions on **opacity** and **scale**.
- There are no external dependencies needed.  
- Works out of the box in any React project.

