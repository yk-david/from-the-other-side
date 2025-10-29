# Course Notes

## Top-Level Await vs Async Functions

**Date:** October 29, 2025

### The Issue
Found code using `await` keyword outside of an `async` function:

```javascript
try {
  const data = await fetch("/api");
  const response = await data.json();
  renderCards(response);
} catch (err) {
  console.log(err);
}
```

### Why This Works (or Doesn't)

The `await` keyword can only be used in two scenarios:

1. **Inside an async function**
2. **At the top level of an ES module** (top-level await)

### Solution Options

#### Option 1: Top-Level Await (ES Modules)
If your HTML loads the script as a module, the current code works fine:

```html
<script type="module" src="index.js"></script>
```

**Requirements:**
- Modern browser support (Chrome 89+, Firefox 89+, Safari 15+)
- Script must be loaded with `type="module"`

#### Option 2: Async IIFE (Broader Compatibility)
Wrap the code in an immediately invoked async function:

```javascript
(async () => {
  try {
    const data = await fetch("/api");
    const response = await data.json();
    renderCards(response);
  } catch (err) {
    console.log(err);
  }
})();
```

**Advantages:**
- Works in non-module contexts
- Better browser compatibility
- More explicit about async behavior

### Key Takeaway
Always ensure `await` is used within an async context. If you see `await` at the top level, verify that the script is loaded as an ES module, or wrap it in an async IIFE for safety.
