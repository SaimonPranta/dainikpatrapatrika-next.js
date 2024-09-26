"use client";

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import { useState } from 'react';

const TiptapEditor = () => {
  const [fileURL, setFileURL] = useState('');

  // Initialize the editor with StarterKit, Image, and Link
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link,
    ],
    content: <p>Hello, this is a rich text editor!</p>,
  });

  // Function to add an inline image with a target URL to the editor
  const addImageWithLink = (event) => {
    const file = event.target.files[0]; // Get the first selected file
    const targetURL = prompt('Please enter the target URL (optional):');

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;

        // Add image to the editor
        editor.chain().focus().setImage({ src: base64Image }).run();

        // If a target URL is provided, wrap the image with a link
        if (targetURL) {
          editor.chain().focus().extendMarkRange('link').setLink({ href: targetURL }).run();
        }
      };
      reader.readAsDataURL(file); // Convert image file to base64
    }
  };

  // Function to handle file attachments (simulated with links)
  const addFile = () => {
    const url = prompt('Enter the file URL');
    if (url) {
      setFileURL(url);
      editor.chain().focus().insertContent(<a href={url} target="_blank">Download File</a>).run();
    }
  };

  // Ensure the editor is loaded before accessing it
  if (!editor) {
    return <p>Loading editor...</p>;
  }

  // Toolbar for text formatting and adding media
  return (
    <div className="editor-container">
      <div className="toolbar">
        {/* Add buttons for bold, italic, headings, etc. here */}
        
        <input 
          type="file" 
          accept="image/*"
          onChange={addImageWithLink}
          style={{ display: 'none' }} 
          id="upload-image"
        />
        <label htmlFor="upload-image" className="custom-file-upload">
          Upload Image
        </label>

        <button onClick={addFile} className="file-upload-button">Attach File</button>
      </div>

      <EditorContent editor={editor} className="editor-content" />

      {/* CSS styles remain unchanged */}
    </div>
  );
};

export default TiptapEditor;
