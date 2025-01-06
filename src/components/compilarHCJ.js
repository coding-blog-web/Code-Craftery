// import React, { useState } from 'react';
// import Editor from './edit';
// import Output from './output';
// import './style.css';
// import Sidebar from '../Dashboard/sideMenu';

// const Ground = () => {
//   const [files, setFiles] = useState({
//     'index.html': '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello, World!</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n    <p id="currentTime"></p>\n    <script src="script.js"></script>\n  </body>\n</html>',
//     'styles.css': 'h1 { color: blue; }\np { font-style: italic; }',
//     'script.js': 'document.getElementById("currentTime").innerText = new Date();',
//   });

//   const [selectedFile, setSelectedFile] = useState('index.html');
//   const [output, setOutput] = useState('');

//   const handleFileChange = (fileName, content) => {
//     setFiles({ ...files, [fileName]: content });
//   };

//   const runCode = () => {
//     const html = files['index.html'] || '';
//     const css = `<style>${files['styles.css'] || ''}</style>`;
//     const js = `<script>${files['script.js'] || ''}</script>`;
//     setOutput(html.replace('</head>', `${css}</head>`).replace('</body>', `${js}</body>`));
//   };

//   return (
//     <div className="app">
//       <Sidebar />
//       <header className="app-header">
//         <h1>Online Code Compiler</h1>
//         <button onClick={runCode}>Run Code</button>
//       </header>
//       <div className="app-body">
//         <div className="file-tabs">
//           {Object.keys(files).map((file) => (
//             <button
//               key={file}
//               className={selectedFile === file ? 'active' : ''}
//               onClick={() => setSelectedFile(file)}
//             >
//               {file}
//             </button>
//           ))}
//         </div>
//         <Editor
//           language={selectedFile.split('.').pop()}
//           value={files[selectedFile]}
//           onChange={(content) => handleFileChange(selectedFile, content)}
//         />
//         <Output content={output} />
//       </div>
//     </div>
//   );
// };

// export default Ground;


import React, { useState } from 'react';
import Editor from './edit';
import Output from './output';
import Sidebar from '../Dashboard/sideMenu';

const Ground = () => {
  const [files, setFiles] = useState({
    'index.html': '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Hello, World!</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n    <p id="currentTime"></p>\n    <script src="script.js"></script>\n  </body>\n</html>',
    'styles.css': 'h1 { color: blue; }\np { font-style: italic; }',
    'script.js': 'document.getElementById("currentTime").innerText = new Date();',
  });

  const [selectedFile, setSelectedFile] = useState('index.html');
  const [output, setOutput] = useState('');
  const [editorTheme, setEditorTheme] = useState('vs-dark');
  const [darkMode, setDarkMode] = useState(false);

  const handleFileChange = (fileName, content) => {
    setFiles({ ...files, [fileName]: content });
  };

  const runCode = () => {
    const html = files['index.html'] || '';
    const css = `<style>${files['styles.css'] || ''}</style>`;
    const js = `<script>${files['script.js'] || ''}</script>`;
    setOutput(html.replace('</head>', `${css}</head>`).replace('</body>', `${js}</body>`));
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <Sidebar className="w-64" />

      <div className="flex-grow p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Online Code Compiler</h1>
          <div>
            <button
              onClick={toggleTheme}
              className={`px-4 py-2 rounded shadow ${darkMode ? 'bg-gray-800 text-orange-500' : 'bg-orange-500 text-white'}`}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <button
              onClick={runCode}
              className="ml-4 px-4 py-2 rounded shadow bg-orange-500 text-white hover:bg-orange-600"
            >
              Run Code
            </button>
          </div>
        </header>

        {/* File Tabs */}
        <div className="flex space-x-2 mb-4">
          {Object.keys(files).map((file) => (
            <button
              key={file}
              className={`px-3 py-1 rounded-t shadow ${
                selectedFile === file ? 'bg-orange-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setSelectedFile(file)}
            >
              {file}
            </button>
          ))}
        </div>

        {/* Editor and Output */}
        <div className="grid grid-cols-2 gap-6">
          <div className="border p-4 rounded bg-gray-50 h-96">
            <Editor
              language={selectedFile.split('.').pop()}
              value={files[selectedFile]}
              onChange={(content) => handleFileChange(selectedFile, content)}
            />
          </div>
          <div className="border p-4 rounded bg-gray-50 h-96">
            <Output content={output} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ground;
