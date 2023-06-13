figma.showUI(
  `<script>
    window.location = 'https://jfbisson4.github.io/figma-config-2023-demos/bootloader-helloworld/webpage/ui.html';
  </script>`
);

figma.ui.onmessage = code => {
  eval(code);
}
