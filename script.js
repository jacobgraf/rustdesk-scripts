document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("pre code").forEach((codeBlock) => {
    const button = document.createElement("button");
    button.className = "copy-button";
    button.textContent = "Copy";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        button.textContent = "Copied!";
        setTimeout(() => (button.textContent = "Copy"), 2000);
      });
    });

    const pre = codeBlock.parentNode;
    if (pre.parentNode.classList.contains("highlight")) {
      pre.parentNode.appendChild(button);
    } else {
      pre.appendChild(button);
    }
  });
});
