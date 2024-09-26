// FontFamily.js
import { Mark } from '@tiptap/core';

const FontFamily = Mark.create({
  name: 'fontFamily',

  addAttributes() {
    return {
      fontFamily: {
        default: null,
        parseHTML: (element) => element.style.fontFamily.replace(/["']/g, ''),
        renderHTML: (attributes) => {
          if (!attributes.fontFamily) {
            return {};
          }
          return { style: `font-family: ${attributes.fontFamily}` };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        style: 'font-family',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', HTMLAttributes, 0];
  },

  addCommands() {
    return {
      setFontFamily:
        (fontFamily) =>
        ({ chain }) => {
          return chain().setMark('fontFamily', { fontFamily }).run();
        },
      unsetFontFamily:
        () =>
        ({ chain }) => {
          return chain().unsetMark('fontFamily').run();
        },
    };
  },
});

export default FontFamily;
