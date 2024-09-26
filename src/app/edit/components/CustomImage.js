// Custom Image Extension with Alignment
import { Node, mergeAttributes } from '@tiptap/core';

const CustomImage = Node.create({
  name: 'image',

  inline: true,
  group: 'inline',
  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
      alignment: {
        default: 'left', // Default alignment
      },
    };
  },

  parseHTML() {
    return [{ tag: 'img' }];
  },

  renderHTML({ node, HTMLAttributes }) {
    const { alignment } = node.attrs;
    const classNames = `image ${alignment}`; // Add alignment class
    return ['img', mergeAttributes(HTMLAttributes, { class: classNames })];
  },

  addCommands() {
    return {
      setImage: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        });
      },
      setImageAlignment: (alignment) => ({ commands }) => {
        return commands.updateAttributes(this.name, { alignment });
      },
    };
  },
});

export default CustomImage;
