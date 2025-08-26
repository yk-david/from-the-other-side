import sanitizeHtml from "sanitize-html";

export function sanitizeInput(data) {
  const sanitizedData = {};

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "string") {
      // `sanitizeHtml can receive string type input only
      sanitizedData[key] = sanitizeHtml(value, {
        allowedTags: ["b"],
        allowedAttributes: {},
      });
    } else {
      sanitizedData[key] = value;
    }
  }

  return sanitizedData;
}
