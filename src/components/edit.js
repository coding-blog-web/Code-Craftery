import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const Editor = ({ language, value, onChange }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MonacoEditor
        language={language}
        theme="vs-dark"
        value={value}
        onChange={onChange}
        options={{ selectOnLineNumbers: true }}
        height="100%"
        width="100%"
      />
    </div>
  );
};

export default Editor;
