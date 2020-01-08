import React,{Component} from 'react'
import './css/Form.css'

class Form extends Component{
  render(){
    return (
      <div className = "form">
        <form onSubmit={this.props.handleSubmit}>
          <input name = "title" type = "text" placeholder = "お探しのもの＊必須" defaultValue = "" /><br/>
          <textarea name = "desc" placeholder = "詳細を入力" defaultValue = ""　/><br/>
          <button type = "submit">検索</button>
        </form>
      </div>
    )
  }
}

export default Form
