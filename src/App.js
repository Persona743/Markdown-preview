import { useState } from 'react';
import { marked } from 'marked';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//  When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header(H1 size), a sub header(H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text

const App = () => {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  1. First item
  2. Second item
  3. Third item
  > blockquote
  ![alt text](image.jpg)
  **bold text**
  `)

  marked.setOptions({
    breaks: true
  })

  return (
    <div className='App container'>
      <div className='row'>
        <div className='col'>
          <h5 className='text-center'>Write here:</h5>
          <textarea
            id='editor'
            onChange={(e) => { setText(e.target.value) }}
            value={text}
          >
          </textarea>
          <h5 className='text-center'>See codes here:</h5>
          <div className='col' id='preview' dangerouslySetInnerHTML={{ __html: marked(text) }}></div>
        </div>
      </div>
    </div>
  )
}

export default App;