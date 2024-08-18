// utils.js
export const truncateHtml = (html, maxLength) => {
  // Create a temporary DOM element to parse HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  let text = tempDiv.textContent || tempDiv.innerText || "";

  if (text.length > maxLength) {
    text = text.substring(0, maxLength) + "...";
  }

  // Set truncated text back to tempDiv
  tempDiv.innerHTML = text;
  return tempDiv.innerHTML;
};
