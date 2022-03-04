marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer()

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            markdown: placeholder
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            markdown: event.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-evenly">
                    <textarea 
                        id="editor"
                        value={this.state.markdown}
                        onChange={this.handleChange}
                        className="col-4"
                    ></textarea>
                    <Preview markdown={this.state.markdown} />
                </div>
            </div>
        )
    }
}

function Preview({markdown}) {
    return (
        <div
        dangerouslySetInnerHTML={{
            __html: marked(markdown, {renderer: renderer})
        }}
        id="preview"
        className="col-7"
        ></div>
    )
}

//DUMMY TEXT

const placeholder = `# How to Use the Markdown Previewer:
# One hashtag creates an h1 heading
## Two hashtags create an h2 heading

Put your [links](https://www.freecodecamp.org) in between brackets and add the destinations between parenthesis after it

\`<Backticks_make_inline_code />\`

\`\`\`
const multiCodeBlock = {
    firstLine: \`\`\`,
    yourCode: code,
    lastLine: \`\`\`
}
\`\`\`

- Place a dash before
- Each list item

> Put a greater than symbol before your block quote

**Two asterisks make bold text**

Put an exclamation point before your enclosed link to turn your link into an image
![image](https://www.seekpng.com/png/full/198-1989444_chibi-image-chibi-girl-on-computer.png)`

ReactDOM.render(<App />, document.getElementById('root'))