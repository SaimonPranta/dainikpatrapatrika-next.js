"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
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
import Table from '@tiptap/extension-table'; // Import Table extension
import TableCell from '@tiptap/extension-table-cell'; // Import Table Cell extension
import TableRow from '@tiptap/extension-table-row'; // Import Table Row extension
import TableHeader from '@tiptap/extension-table-header'; // Import Table Header extension
import { useState } from 'react';

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

const fontFamilies = [
  { label: 'Default', value: '' },
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Courier New', value: '"Courier New", Courier, monospace' },
  { label: 'Georgia', value: 'Georgia, serif' },
  { label: 'Times New Roman', value: '"Times New Roman", Times, serif' },
  { label: 'Verdana', value: 'Verdana, sans-serif' },
  { label: 'Roboto', value: '"Roboto", sans-serif' },
  { label: 'AdorshoLipi', value: 'AdorshoLipi, sans-serif' },
  { label: 'Bangla', value: 'Bangla, sans-serif' },
  { label: 'Kalpurush', value: 'Kalpurush, sans-serif' },
  { label: 'Nikosh', value: 'Nikosh, sans-serif' },
  { label: 'SolaimanLipi', value: 'SolaimanLipi, sans-serif' },
  { label: 'Hind Siliguri', value: '"Hind Siliguri", sans-serif' },
  { label: 'Mukti Narrow', value: 'Mukti Narrow, sans-serif' },
  { label: 'Siyam Rupali', value: 'Siyam Rupali, sans-serif' },
  { label: 'Baloo Da Bangla', value: '"Baloo Da Bangla", sans-serif' },
  { label: 'Lohit Bengali', value: '"Lohit Bengali", sans-serif' },
  { label: 'Likhan', value: 'Likhan, sans-serif' },
  { label: 'Bangla Sangam MN', value: '"Bangla Sangam MN", serif' },
];

const fontSizes = [
  { label: 'Default', value: '' },
  { label: '12px', value: '12' },
  { label: '14px', value: '14' },
  { label: '16px', value: '16' },
  { label: '18px', value: '18' },
  { label: '20px', value: '20' },
  { label: '24px', value: '24' },
  { label: '28px', value: '28' },
];

const bulletStyles = [
  { label: 'Default', value: '' },
  { label: 'Circle', value: 'circle' },
  { label: 'Square', value: 'square' },
  { label: 'Custom Image', value: 'url(image-url.png)' },
];

const TiptapEditor = () => {
  const [selectedFont, setSelectedFont] = useState('');
  const [selectedFontSize, setSelectedFontSize] = useState('');
  const [selectedBulletStyle, setSelectedBulletStyle] = useState('');
  const [textColor, setTextColor] = useState('#000000');

  const editor = useEditor({
    extensions: [
      StarterKit,
      CustomImage, // Use the custom image extension
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

  const addTable = () => {
    const rows = parseInt(prompt('Number of rows'), 10);
    const cols = parseInt(prompt('Number of columns'), 10);
    if (!isNaN(rows) && !isNaN(cols)) {
      editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run(); // Add withHeaderRow for better usability
    }
  };

  const alignImage = (alignment) => {
    editor.chain().focus().setImageAlignment(alignment).run();
  };

  if (!editor) {
    return <p>Loading editor...</p>;
  }

  return (
    <div className="editor-container">
      <div className="toolbar">
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

        {/* Image Upload Button */}
        <input
          type="file"
          accept="image/*"
          onChange={addImageWithLink}
          className="image-upload"
        />

        {/* File Upload Button */}
        <button onClick={addFile} className="file-upload">Upload File</button>

        {/* Subscript Button */}
        <button onClick={toggleSubscript} className="subscript-button">Sub</button>

        {/* Superscript Button */}
        <button onClick={toggleSuperscript} className="superscript-button">Sup</button>

        {/* Add Table Button */}
        <button onClick={addTable} className="add-table-button">Add Table</button>

        {/* Image Alignment Buttons */}
        <button onClick={() => alignImage('left')} className="align-image-btn">Align Left</button>
        <button onClick={() => alignImage('center')} className="align-image-btn">Align Center</button>
        <button onClick={() => alignImage('right')} className="align-image-btn">Align Right</button>
      </div>
      <EditorContent editor={editor} className="editor-content" />
      <style jsx>{`
        .editor-container {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }

        .toolbar {
          margin-bottom: 10px;
        }

        .font-family-selector,
        .font-size-selector,
        .bullet-style-selector,
        .text-color-picker,
        .image-upload,
        .file-upload,
        .subscript-button,
        .superscript-button,
        .add-table-button,
        .align-image-btn {
          margin-right: 10px;
        }

        .align-image-btn {
          margin-right: 10px;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .align-image-btn:hover {
          background-color: #f0f0f0; /* Change color on hover */
        }

        .image {
          display: block; /* Ensure images are block elements for alignment */
          margin: 0 auto; /* Center by default */
        }

        .image.left {
          float: left;
          margin-right: 10px; /* Space to the right of the image */
        }

        .image.center {
          display: block;
          margin: 0 auto; /* Center alignment */
        }

        .image.right {
          float: right;
          margin-left: 10px; /* Space to the left of the image */
        }
      `}</style>
    </div>
  );
};

export default TiptapEditor;
