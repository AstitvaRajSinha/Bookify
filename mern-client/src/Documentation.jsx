// src/Documentation.js
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
// import {img} from '../public/documentation.md'
const Documentation = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetch the documentation file
    fetch('../public/documentation.md')
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="documentation">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Documentation;
