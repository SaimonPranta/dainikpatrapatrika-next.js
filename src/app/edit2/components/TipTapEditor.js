// app/edit2/components/TipTapEditor.js

"use client";
import React from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import BulletList from '@tiptap/extension-bullet-list'; // Import the bullet list extension

const TipTapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      BulletList, // Add bullet list extension
    ],
    content: '<p>Type something here...</p>',
  });

  return (
    <div className="editor-container">
      <EditorContent editor={editor} />
      {editor && (
        <div className="editor-controls">
          <button className="editor-button" onClick={() => editor.chain().focus().toggleBulletList().run()}>
            Bullet List
          </button>
        </div>
      )}
    </div>
  );
};

export default TipTapEditor;
