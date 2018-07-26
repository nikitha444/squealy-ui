import React, {Component} from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/sql'
import 'brace/theme/tomorrow'

export default class QueryEditor extends Component {

    constructor(props) {
      super(props)
      this.state = {
        editorContent: 'SELECT ...'
      }
    }
    textChangeHandler = (text) => {
        this.setState({editorContent: text})
    }    
    render() {    
        return (
              <AceEditor
                mode="sql"
                theme="tomorrow"
                name={'sqlQuery'}
                height="200px"
                width="100%"
                fontSize={15}
                maxLines={20}
                minLines={15}
                highlightActiveLine={true}
                ref={'ace'}
                value={this.state.editorContent}
                editorProps={{$blockScrolling: true}}
                onChange={this.textChangeHandler}
                onBlur={this.onBlurHandler}
              />
        )
      }
}  