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
      Image,
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

        {/* Text Alignment Buttons */}
        <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className="align-btn">
          Left
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className="align-btn">
          Center
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className="align-btn">
          Right
        </button>

        {/* Bullet and Ordered List Buttons */}
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="bullet-btn">
          Bullet List
        </button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className="bullet-btn">
          Ordered List
        </button>

        {/* Subscript and Superscript Buttons */}
        <button onClick={toggleSubscript} className="subscript-btn">Subscript</button>
        <button onClick={toggleSuperscript} className="superscript-btn">Superscript</button>

        {/* Add Table Button */}
        <button onClick={addTable} className="table-btn">Add Table</button>

        <button className="custom-file-upload">
          Upload Image
        </button>
        <input 
          type="file" 
          accept="image/*"
          onChange={addImageWithLink}
          style={{ display: 'none' }} 
          id="upload-image"
        />

        <button onClick={addFile}>Add File</button>
      </div>

      <EditorContent editor={editor} className="editor-content" />

      <style jsx>{`
        .editor-container {
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .toolbar {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          padding: 5px 0;
        }

        .toolbar button, .toolbar select {
          margin-right: 10px;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .toolbar button:hover, .custom-file-upload:hover, .font-family-selector:hover, .font-size-selector:hover, .bullet-style-selector:hover, .text-color-picker:hover {
          background-color: #e7f1ff;
          border: 1px solid #0070f3;
        }

        .editor-content {
          border: 1px solid #ddd;
          padding: 16px;
          min-height: 200px;
          border-radius: 5px;
          background-color: #fafafa;
          box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.1);
          overflow-y: auto;
        }

        input[type="file"] {
          display: none;
        }

        .custom-file-upload {
          cursor: pointer;
        }

        .font-family-selector, .font-size-selector, .bullet-style-selector, .text-color-picker {
          margin-right: 10px;
        }

        .align-btn {
          padding: 8px;
          margin-right: 5px;
        }

        .is-active {
          background-color: #0070f3;
          color: white;
        }

        /* Custom bullet styles */
        .circle-bullet {
          list-style-type: circle;
        }
        
        .square-bullet {
          list-style-type: square;
        }
      `}</style>
    </div>
  );
};

export default TiptapEditor;
