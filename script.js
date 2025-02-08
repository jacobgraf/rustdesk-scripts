document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("pre code").forEach((codeBlock) => {
    // Create the copy button
    const button = document.createElement("button");
    button.className = "copy-button";
    button.textContent = "Copy";

    // Position the button inside the <pre> block
    const pre = codeBlock.parentElement;
    pre.style.position = "relative"; // Ensure proper positioning
    pre.appendChild(button);

    // Copy code to clipboard on button click
    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy"), 2000);
      });
    });
  });
});
