import React from 'react';
import './tic-tac-toe.css';
import CrossIcon from '../../assets/image/cross.png';
import CircleIcon from '../../assets/image/circle.png';

const data = ["", "", "", "", "", "", "", "", ""];

export const TikTakToe = () => {
  const [count, setCount] = React.useState(0);
  const [lock, setLock] = React.useState(false);
  const titleRef = React.useRef(null);

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src=${CrossIcon} alt="cross" />`;
      data[num] = "x";
      setCount(count + 1);
    } else {
      e.target.innerHTML = `<img src=${CircleIcon} alt="circle" />`;
      data[num] = "o";
      setCount(count + 1);
    }
    checkWin();
  };

  const checkWin = () => {
    if(data[0] == data[1] && data[1] == data[2]  && data[2] != "") {
      won(data[2]);
    } else if(data[3] == data[4] && data[4] == data[5]  && data[5] != "") {
      won(data[5]);
    } else if(data[6] == data[7] && data[7] == data[8]  && data[8] != "") {
      won(data[8]);
    } else if(data[0] == data[3] && data[3] == data[6]  && data[6] != "") {
      won(data[6]);
    } else if(data[1] == data[4] && data[4] == data[7]  && data[7] != "") {
      won(data[7]);
    } else if(data[2] == data[5] && data[5] == data[8]  && data[8] != "") {
      won(data[8]);
    } else if(data[0] == data[4] && data[4] == data[8]  && data[8] != "") {
      won(data[8]);
    } else if(data[0] == data[1] && data[1] == data[2]  && data[2] != "") {
      won(data[2]);
    } else if(data[2] == data[4] && data[4] == data[6]  && data[6] != "") {
      won(data[6]);
    }
  }

  const won = (winner) => {
    setLock(true);
    if(winner == "x"){
      titleRef.current.innerHTML = `Congratulation: <img src="${CrossIcon}" /> wins`
    } else {
      titleRef.current.innerHTML = `Congratulation: <img src="${CircleIcon}" /> wins`
    }
  }

  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>Tic Tac Toe in <span>React</span></h1>
      <div className="board">
        <div className='row1'>
        <div className="box" onClick={(e) => toggle(e, 0)}></div>
        <div className="box" onClick={(e) => toggle(e, 1)}></div>
        <div className="box" onClick={(e) => toggle(e, 2)}></div>
        </div>
        <div className="row2">
        <div className="box" onClick={(e) => toggle(e, 3)}></div>
        <div className="box" onClick={(e) => toggle(e, 4)}></div>
        <div className="box" onClick={(e) => toggle(e, 5)}></div>
        </div>
        <div className="row3">
        <div className="box" onClick={(e) => toggle(e, 6)}></div>
        <div className="box" onClick={(e) => toggle(e, 7)}></div>
        <div className="box" onClick={(e) => toggle(e, 8)}></div>
        </div>
      </div>
      <button className='reset' onClick={() => window.location.reload()}>Reset</button>
    </div>
  );
};

