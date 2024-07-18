import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import $ from 'jquery';
import reportWebVitals from './reportWebVitals';
import { marked } from 'marked';

const root = ReactDOM.createRoot(document.getElementById('root'));
marked.setOptions({
  gfm: true,
  breaks: true
});

class MarkDownPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

// this is multi-line code:

\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == '') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header | Crazy Header | Another Header? |
| ----------- | ------------ | --------------- |
| Your content can | be here, and it | can be here.... |
| And here. | Okay. | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
      `,
      markDown: ''
    };
    this.txtChange = this.txtChange.bind(this);
  }

  txtChange(e) {
          //console.log("txtChange:"+ e.target.value);
          this.setState({
            input: e.target.value,
            markDown: marked.parse(e.target.value)
          }, () => {
            // Animate the new quote in
            $("#author").fadeToggle(50);
          });
        }
  componentDidMount() {
    // Initialize the markdown state once the component mounts
    this.setState({
      markDown: marked(this.state.input)
    });
  }

  render() {
    //console.log("start:"+ this.state.markDown);
    console.log("Mark:" + marked.parse("a"));
    return (
      <div className="container">
          <header className="App-header">
            <h1>Mark Down Preview:</h1>
          </header>
          <section id="workArea">
              <textarea id="editor" value={this.state.input} onChange={this.txtChange}/>
              {/*<textarea id="preview" dangerouslySetInnerHTML={{ __html: this.state.markDown }}   readOnly/>*/}
              <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.markDown }} ></div>

          </section>
          <div className="footer mt-4">by Wittawat Na Ranong</div>
      </div>
    );
  }
}

root.render(
  <React.StrictMode>
   <MarkDownPreview /> 
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
