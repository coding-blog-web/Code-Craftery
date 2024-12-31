import React, { useState } from 'react';
import Editor from './components/edit';
import Output from './components/output';
import './app.css';

const App = () => {
  const [files, setFiles] = useState({
    'index.html': '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello, World!</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n    <p id="currentTime"></p>\n    <script src="script.js"></script>\n  </body>\n</html>',
    'styles.css': 'h1 { color: blue; }\np { font-style: italic; }',
    'script.js': 'document.getElementById("currentTime").innerText = new Date();',
  });

  const [selectedFile, setSelectedFile] = useState('index.html');
  const [output, setOutput] = useState('');

  const handleFileChange = (fileName, content) => {
    setFiles({ ...files, [fileName]: content });
  };

  const runCode = () => {
    const html = files['index.html'] || '';
    const css = `<style>${files['styles.css'] || ''}</style>`;
    const js = `<script>${files['script.js'] || ''}</script>`;
    setOutput(html.replace('</head>', `${css}</head>`).replace('</body>', `${js}</body>`));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Online Code Compiler</h1>
        <button onClick={runCode}>Run Code</button>
      </header>
      <div className="app-body">
        <div className="file-tabs">
          {Object.keys(files).map((file) => (
            <button
              key={file}
              className={selectedFile === file ? 'active' : ''}
              onClick={() => setSelectedFile(file)}
            >
              {file}
            </button>
          ))}
        </div>
        <Editor
          language={selectedFile.split('.').pop()}
          value={files[selectedFile]}
          onChange={(content) => handleFileChange(selectedFile, content)}
        />
        <Output content={output} />
      </div>
    </div>
  );
};

export default App;
