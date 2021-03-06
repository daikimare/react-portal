import React, { Component } from 'react'; 
// import {makeStayles,useTheme,List} from '@material-ui/core';
// import clsx from 'clsx'
// import {makeStayles} from '@material-ui/core'
// import {Button} from '@material-ui/core';
// import {IconButton} from '@material-ui/core';
// import {Divider} from '@material-ui/core';
// import Search from '@material-ul/icons/Search';
// import MenuIcon from '@material-ul/icons/MenuIcon';
// import  from '@material-ul/icons/';

// const useStyle = makeStyles(theme => ({

// }));

class Data extends Component {
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
          <div className="searchBox">
            <input className="searchTxt" type="text" placeholder="search" onChange={this.filterList} />
            <a class="searchBtn" href="#">
              <i className="fas fa-search"></i>
            </a>
          <button className = "searchBtn" variant = "contained" color = "primary" disableElevation>
            {/* <Search>
            </Search> */}
            
          </button>
          </div>
        </form>
        <div className="subjectList">
          {this.state.items.map((item, Main) => {
            return (
              <li className="subjectName" key={Main}>{item}</li>
            )  
          })}
        </div>
      </div>
    );
  }
}

export default Data;