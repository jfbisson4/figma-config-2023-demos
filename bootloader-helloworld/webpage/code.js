const INTER_BOLD = { family: "Inter", style: "Bold" };
figma.loadFontAsync(INTER_BOLD);

figma.ui.onmessage = characters => {
  if (figma.currentPage.selection.length === 0) {
    const text = figma.createText();
    figma.currentPage.selection = [text];
  }

  for (const node of figma.currentPage.selection) {
    if (node.type === 'TEXT') {
      node.fontName = INTER_BOLD;
      node.characters = characters;
    }
  }

  figma.closePlugin();
}
