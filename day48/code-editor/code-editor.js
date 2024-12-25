// references to elements
const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");
const outputFrame = document.getElementById("output");

// Function to update the output iframe
function updateOutput() {
  const html = htmlCode.value;
  const css = `<style>${cssCode.value}</style>`;
  const js = `<script>${jsCode.value}</script>`;

  // Combine the HTML, CSS, and JavaScript
  const completeCode = html + css + js;

  // Update the iframe's content
  const iframeDocument =
    outputFrame.contentDocument || outputFrame.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(completeCode);
  iframeDocument.close();
}

// Add event listeners to update output on input
htmlCode.addEventListener("input", updateOutput);
cssCode.addEventListener("input", updateOutput);
jsCode.addEventListener("input", updateOutput);

// Initial update to populate output with default content
updateOutput();
