"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline'; // Import Underline extension
import Link from '@tiptap/extension-link';
import TextAlign from '@tiptap/extension-text-align';
import FontFamily from './FontFamily';
import FontSize from './FontSize';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableRow from '@tiptap/extension-table-row';
import TableHeader from '@tiptap/extension-table-header';
import { useState } from 'react';
import { Node, mergeAttributes } from '@tiptap/core';

// Custom Image Extension with Alignment
const CustomImage = Node.create({
  name: 'image',

  inline: true,
  group: 'inline',
  draggable: true,

  addAttributes() {
    return {
      src: { default: null },
      alt: { default: null },
      title: { default: null },
      alignment: { default: 'left' }, // Default alignment
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

// Define font families, sizes, and bullet styles
const fontFamilies = [
  { value: 'Arial', label: 'Arial' },
  { value: 'Courier New', label: 'Courier New' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Verdana', label: 'Verdana' },
];

const fontSizes = [
  { value: '12px', label: '12px' },
  { value: '14px', label: '14px' },
  { value: '16px', label: '16px' },
  { value: '18px', label: '18px' },
  { value: '20px', label: '20px' },
];

const bulletStyles = [
  { value: 'disc', label: 'Disc' },
  { value: 'circle', label: 'Circle' },
  { value: 'square', label: 'Square' },
];

const TiptapEditor = () => {
  const [selectedFont, setSelectedFont] = useState('');
  const [selectedFontSize, setSelectedFontSize] = useState('');
  const [selectedBulletStyle, setSelectedBulletStyle] = useState('');
  const [textColor, setTextColor] = useState('#000000');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline, // Add Underline extension
      CustomImage,
      Link,
      FontFamily,
      FontSize,
      Color,
      TextStyle,
      Subscript,
      Superscript,
      Table.configure({
        resizable: true,
        allowTableNode: true,
      }),
      TableCell,
      TableRow,
      TableHeader,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'center', 'right', 'justify'],
      }),
      BulletList,
      OrderedList,
    ],
    content: '<p>Hello, this is a rich text editor!</p>',
  });

  const handleFontChange = (event) => {
    const fontFamily = event.target.value;
    setSelectedFont(fontFamily);
    if (fontFamily) {
      editor.chain().focus().setFontFamily(fontFamily).run();
    } else {
      editor.chain().focus().unsetFontFamily().run();
    }
  };

  const handleFontSizeChange = (event) => {
    const fontSize = event.target.value;
    setSelectedFontSize(fontSize);
    if (fontSize) {
      editor.chain().focus().setFontSize(fontSize).run();
    } else {
      editor.chain().focus().unsetFontSize().run();
    }
  };

  const handleBulletStyleChange = (event) => {
    const bulletStyle = event.target.value;
    setSelectedBulletStyle(bulletStyle);
    const bulletClass = bulletStyle === 'circle' ? 'circle-bullet' : bulletStyle === 'square' ? 'square-bullet' : '';
    editor.chain().focus().setNode('bulletList', { bullet: bulletClass }).run();
  };

  const handleTextColorChange = (event) => {
    const color = event.target.value;
    setTextColor(color);
    editor.chain().focus().setColor(color).run();
  };

  const addImageWithLink = (event) => {
    const file = event.target.files[0];
    const targetURL = prompt('Please enter the target URL (optional):');
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        editor.chain().focus().setImage({ src: base64Image }).run();
        if (targetURL) {
          editor.chain().focus().extendMarkRange('link').setLink({ href: targetURL }).run();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const addFile = () => {
    const url = prompt('Enter the file URL');
    if (url) {
      editor.chain().focus().insertContent(`<a href="${url}" target="_blank">Download File</a>`).run();
    }
  };

  const toggleSubscript = () => {
    editor.chain().focus().toggleSubscript().run();
  };

  const toggleSuperscript = () => {
    editor.chain().focus().toggleSuperscript().run();
  };

  const toggleUnderline = () => {
    editor.chain().focus().toggleUnderline().run(); // This should work now
  };

  const addTable = () => {
    const rows = parseInt(prompt('Number of rows'), 10);
    const cols = parseInt(prompt('Number of columns'), 10);
    if (!isNaN(rows) && !isNaN(cols)) {
      editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();
    }
  };

  const alignImage = (alignment) => {
    const selectedImage = editor.getAttributes('image');
    if (selectedImage.src) {
      editor.chain().focus().setImageAlignment(alignment).run();
    }
  };

  if (!editor) {
    return <p>Loading editor...</p>;
  }

  return (
    <div className="editor-container">
      <div className="toolbar">
        {/* Header buttons */}
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="header-button">Bold</button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="header-button">Italic</button>
        <button onClick={toggleUnderline} className="header-button">Underline</button>
        <button onClick={toggleSubscript} className="header-button">Subscript</button>
        <button onClick={toggleSuperscript} className="header-button">Superscript</button>

        {/* Font Family Selector */}
        <select value={selectedFont} onChange={handleFontChange} className="font-family-selector">
          {fontFamilies.map((font) => (
            <option key={font.value} value={font.value}>
              {font.label}
            </option>
          ))}
        </select>

        {/* Font Size Selector */}
        <select value={selectedFontSize} onChange={handleFontSizeChange} className="font-size-selector">
          {fontSizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>

        {/* Bullet Style Selector */}
        <select value={selectedBulletStyle} onChange={handleBulletStyleChange} className="bullet-style-selector">
          {bulletStyles.map((style) => (
            <option key={style.value} value={style.value}>
              {style.label}
            </option>
          ))}
        </select>

        {/* Text Color Picker */}
        <input
          type="color"
          value={textColor}
          onChange={handleTextColorChange}
          className="text-color-picker"
        />

        {/* Image Upload */}
        <input type="file" accept="image/*" onChange={addImageWithLink} className="image-upload" />

        {/* Add File Button */}
        <button onClick={addFile} className="add-file-btn">Add File</button>

        {/* Add Table Button */}
        <button onClick={addTable} className="add-table-btn">Add Table</button>

        {/* Align Image Button */}
        <button onClick={() => alignImage('left')} className="align-image-btn">Align Left</button>
        <button onClick={() => alignImage('center')} className="align-image-btn">Align Center</button>
        <button onClick={() => alignImage('right')} className="align-image-btn">Align Right</button>
      </div>
      <EditorContent editor={editor} />
      <style jsx>{`
        .editor-container {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
        }
        .toolbar {
          display: flex;
          margin-bottom: 10px;
        }
        .header-button, .font-family-selector, .font-size-selector, .bullet-style-selector, .text-color-picker, .image-upload, .add-file-btn, .toggle-subscript-btn, .toggle-superscript-btn, .add-table-btn, .align-image-btn {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default TiptapEditor;
