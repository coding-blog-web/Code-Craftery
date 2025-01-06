import React from 'react';
import MonacoEditor from 'react-monaco-editor';

const Editor = ({ language, value, onChange,theme }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
     <MonacoEditor
        language={language}
        theme={theme}  
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
