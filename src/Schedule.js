import React from 'react';
import Calendar from 'react-calendar';

export default class Schedule extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      date:new Date (2020,1,27),
      //データ
     month_days:{
      20200101:{is_horiday:true},
      20200102:{is_horiday:true},
      20200103:{is_horiday:true},
      20200107:{text:'後学期再開'},
      20200112:{text:'同窓会'},
      20200113:{is_horiday:true,text:'成人の日'},
      20200127:{text:'PDポスターセッション'}
     } 
    };
    this.getTileClass = this.getTileClass.bind(this);
    this.getTileContent = this.getTileContent.bind(this);
  }
  //stateの表記と同じ表記する
  getFormatDate(date){
    return `${date.getFullYear()}${('0' + (date.getMonth() + 1)).slice(-2)}${('0' + date.getDate()).slice(-2)}`;
  }
  //日付のクラスをふよ
  getTileClass({ date, view }) {
    // 月表示のときのみ
    if (view !== 'month') {
      return '';
    }
    const day = this.getFormatDate(date);
    return (this.state.month_days[day] && this.state.month_days[day].is_holiday) ?
      'holiday' : '';
  }
  //日付の内容を出力
  getTileContent({ date, view }) {
    // 月表示のときのみ
    if (view !== 'month') {
      return null;
    }
    const day = this.getFormatDate(date);
    return (
      <p>
        <br />
        {(this.state.month_days[day] && this.state.month_days[day].text) ?
          this.state.month_days[day].text : ' '
        }
      </p>
    );
  }
  render() {
    return (
      <Calendar
        locale="ja-JP"
        value={this.state.date}
        tileClassName={this.getTileClass}
        tileContent={this.getTileContent}
      />
    );
  }
}
