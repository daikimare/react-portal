import React, { Component } from 'react'; 
//import Subject from './subject';
import "./css/main.css";
class App extends Component {
  constructor() {
    super() 
    this.state = {
      //表示するリンク先
      initialItem: [
        "学生ステーション",
        "教務課",
        "修学相談室",
        "履修申請",
        "学友会",
        "夢工房",
        "情報処理サービスセンター",
        "進路開発センター",
        "研究室一覧",
        "スポーツ工房",
        "扇ヶ丘診療所",
        "基礎英語教育センター(EEC)",
        "ライブラリセンター(LC)",
        "教員オフィスアワー",
        "留学支援課",
        "カウンセリングセンター",
        "放送大学",
        "修学基礎",
        "カリキュラムガイドブック",
        "キャンパスノート",
        "インターンシップ",
        "KITオナーズプロジェクト",
        "留学支援",
        "資格講習会"
      ],
      items: []

    }
  }

  componentDidMount() {
    this.setState({items: this.state.initialItem})
  }
//記入されたテキストとinitialItemとの差分を求める
  filterList = (e) => {
    const updateList = this.state.initialItem.filter((item) => {
      return item.toLowerCase().search( e.target.value.toLowerCase()) !== -1;
    })
    this.setState({items: updateList})
  }

  render() {
    return (
      <div>
        <form action="">
          <div className="search-box">
            <input className="search-txt" type="text" placeholder="search" onChange={this.filterList}/>
            <a class="search-btn" href="#">
              <i className="fas fa-search"></i>
            </a>
          </div>
        </form>
        <div className="subjectList">
          {this.state.items.map((item, index) => {
            return (
              <li className="subjectName" key={index}>{item}</li>
            )  
          })}
        </div>
      </div>
    );
  }
}

export default App;