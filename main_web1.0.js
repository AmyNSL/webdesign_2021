// Caculator
function Onaddbtnclick() {
    var num1 = document.getElementById('inputA').value;
    var num2 = document.getElementById('inputB').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = num1 + num2;
    document.getElementById('Result').innerText = "Result:" + result;
}

function Onminusbtnclick() {
    var num1 = document.getElementById('inputA').value;
    var num2 = document.getElementById('inputB').value;
    var num1 = parseFloat(num1);
    var num2 = parseFloat(num2);
    var result = num1 - num2;
    document.getElementById("Result").innerText = "Result:" + result;
}

function Onmulbtnclick() {
    var num1 = document.getElementById('inputA').value;
    var num2 = document.getElementById('inputB').value;
    var num1 = parseFloat(num1);
    var num2 = parseFloat(num2);
    var result = num1 * num2;
    document.getElementById("Result").innerText = "Result:" + result;
}

function Ondivbtnclick() {
    var num1 = document.getElementById('inputA').value;
    var num2 = document.getElementById('inputB').value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    var result = num1 / num2;
    document.getElementById("Result").innerText = "Result:" + result.toFixed(2);
}

// 圈圈叉叉 
var turnmarker = ['O', 'X'];
var randommarker = turnmarker.sort(function() {
    return .5 - Math.random();
}); //隨機指定玩家和電腦是圈或叉
var gamer = randommarker[0];
var computer = randommarker[1];

var clickStart = false; //判斷遊戲是否已經開始
var gameStart = false; // 判斷是否點過開始遊戲的button
var count = 0;

function gamestart() {
    if (clickStart === false && (gameStart === false || gameStart === true)) {
        clickStart = !clickStart;
        if (gameStart === false) {
            gameStart = !gameStart;
        }
        count += 1;
        document.getElementById("turn").innerText = "現在回合: 玩家";
        document.getElementById("gamemarker").innerText = "玩家標誌:  " + gamer + "  電腦標誌:  " + computer;
    } else if (gameStart === true && clickStart === true) {
        alert('請點擊再玩一次')
    }
    //console.log(clickStart, gamer, computer);
}

function tryagain() {
    if (gameStart === false) {
        alert('玩家尚未開始過遊戲,請先點擊開始遊戲!')
    } else {
        inlineid = [];
        for (i = 0; i < changeEle.length; i++) {　
            inlineid.push(changeEle[i].id);
        }
        console.log(inlineid);
        for (i = 0; i < inlineid.length; i++) {
            document.getElementById(inlineid[i]).className = "inline";
            document.getElementById(inlineid[i]).innerText = "";
        }
        gamerarr = [];
        computerarr = [];
        statusArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        count = 0;
        clickStart = !clickStart;
        isautoplayer = false;
        elements = document.getElementsByClassName('inline');
        inlineid = [];
        for (i = 0; i < elements.length; i++) {　
            inlineid.push(elements[i].id);
        };
        document.getElementById("turn").innerText = "現在回合: 玩家";
        document.getElementById("gamemarker").innerText = "玩家標誌:  " + gamer + "  電腦標誌:  " + computer;
    }

}

var elements = document.getElementsByClassName('inline'); //console.log(elements);
var changeEle = document.getElementsByClassName('inline_ans');
var inlineid = [];
var inlineidFixed = [];
for (i = 0; i < elements.length; i++) {　
    inlineid.push(elements[i].id); //在array中新增element
    inlineidFixed.push(elements[i].id);
};
var isautoplayer = false;
var computerid = null;
var win_arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
var statusArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

/*
function Getstatus() {
    var status = [];
    for (i = 0; i < 9; i++) {
        status.push(document.getElementById("index" + i).innerText);
    }
    //console.log(status);
    return status;
}*/

function winnerJudge() {
    var status = statusArray;
    if (count >= 5) {
        for (i = 0; i < win_arr.length; i++) {
            var ele1 = win_arr[i][0];
            var ele2 = win_arr[i][1];
            var ele3 = win_arr[i][2];
            if (status[ele1] != 0 && status[ele1] === status[ele2] && status[ele2] === status[ele3]) {
                document.getElementById(inlineidFixed[ele1]).classList.add("inline_win");
                document.getElementById(inlineidFixed[ele2]).classList.add("inline_win");
                document.getElementById(inlineidFixed[ele3]).classList.add("inline_win");
                if (status[ele1] === gamer) {
                    document.getElementById("turn").innerText = "遊戲回合結束,恭喜你贏得本局勝利!!!";
                } else if (status[ele1] === computer) {
                    document.getElementById("turn").innerText = "可惜了!遊戲回合結束,下場再接再厲!";
                }
                count = 0;
            }
        }
    }
}

function ComputerAI() {
    if (count === 1) {
        if (typeof(inlineid[4]) != 'undefined') {
            computerid = inlineid[4];
        } else {
            var order0 = [0, 2, 6, 8];
            index = Math.floor((Math.random() * order0.length));
            computerid = inlineid[order0[index]];
        }
    } else if (count === 3) {
        if (document.getElementById('index4').innerText === gamer) {
            for (i = 0; i < win_arr.length; i++) {
                var ele1 = win_arr[i][0];
                var ele2 = win_arr[i][1];
                var ele3 = win_arr[i][2];
                if (statusArray[ele1] === statusArray[ele2] && statusArray[ele1] === gamer) {
                    computerid = inlineid[ele3];
                } else if (statusArray[ele2] === statusArray[ele3] && statusArray[ele2] === gamer) {
                    computerid = inlineid[ele1];
                } else if (statusArray[ele1] === statusArray[ele3] && statusArray[ele1] === gamer) {
                    computerid = inlineid[ele2];
                }
            }
        } else if ((typeof(inlineid[4]) == 'undefined' && typeof(inlineid[0]) == 'undefined' && typeof(inlineid[8]) == 'undefined') ||
            (typeof(inlineid[4]) == 'undefined' && typeof(inlineid[2]) == 'undefined' && typeof(inlineid[6]) == 'undefined')) {
            var order1 = [1, 3, 5, 7];
            index = Math.floor((Math.random() * order1.length));
            computerid = inlineid[order1[index]];
        } else {
            for (i = 0; i < win_arr.length; i++) {
                var ele1 = win_arr[i][0];
                var ele2 = win_arr[i][1];
                var ele3 = win_arr[i][2];
                if (statusArray[ele1] === statusArray[ele2] && statusArray[ele1] === gamer && typeof(inlineid[ele3]) != 'undefined') {
                    computerid = inlineid[ele3];
                    break;
                } else if (statusArray[ele2] === statusArray[ele3] && statusArray[ele2] === gamer && typeof(inlineid[ele1]) != 'undefined') {
                    computerid = inlineid[ele1];
                    break;
                } else if (statusArray[ele1] === statusArray[ele3] && statusArray[ele1] === gamer && typeof(inlineid[ele2]) != 'undefined') {
                    computerid = inlineid[ele2];
                    break;
                } else {
                    if (i < win_arr.length - 1) {
                        continue;
                    } else if (i === win_arr.length - 1) {
                        if (statusArray[1] === statusArray[3] && statusArray[1] === gamer) {
                            computerid = inlineid[0];
                            break;
                        } else if (statusArray[1] === statusArray[5] && statusArray[1] === gamer) {
                            computerid = inlineid[2];
                            break;
                        } else if (statusArray[3] === statusArray[7] && statusArray[3] === gamer) {
                            computerid = inlineid[6];
                            break;
                        } else if (statusArray[5] === statusArray[7] && statusArray[5] === gamer) {
                            computerid = inlineid[8];
                            break;
                        } else {
                            var order0 = [0, 2, 6, 8];
                            while (true) {
                                index = Math.floor((Math.random() * order0.length));
                                computerid = inlineid[order0[index]];
                                if (typeof(computerid) != 'undefined') {
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    } else if (count < 9) {
        for (i = 0; i < win_arr.length; i++) {
            var ele1 = win_arr[i][0];
            var ele2 = win_arr[i][1];
            var ele3 = win_arr[i][2];
            if (statusArray[ele1] === statusArray[ele2] && statusArray[ele1] === computer && typeof(inlineid[ele3]) != 'undefined') {
                computerid = inlineid[ele3];
                break;
            } else if (statusArray[ele2] === statusArray[ele3] && statusArray[ele2] === computer && typeof(inlineid[ele1]) != 'undefined') {
                computerid = inlineid[ele1];
                break;
            } else if (statusArray[ele1] === statusArray[ele3] && statusArray[ele1] === computer && typeof(inlineid[ele2]) != 'undefined') {
                computerid = inlineid[ele2];
                break;
            } else {
                if (i < win_arr.length - 1) {
                    continue;
                } else if (i === win_arr.length - 1) {
                    for (i = 0; i < win_arr.length; i++) {
                        var ele1 = win_arr[i][0];
                        var ele2 = win_arr[i][1];
                        var ele3 = win_arr[i][2];
                        if (statusArray[ele1] === statusArray[ele2] && statusArray[ele1] === gamer && typeof(inlineid[ele3]) != 'undefined') {
                            computerid = inlineid[ele3];
                            break;
                        } else if (statusArray[ele2] === statusArray[ele3] && statusArray[ele2] === gamer && typeof(inlineid[ele1]) != 'undefined') {
                            computerid = inlineid[ele1];
                            break;
                        } else if (statusArray[ele1] === statusArray[ele3] && statusArray[ele1] === gamer && typeof(inlineid[ele2]) != 'undefined') {
                            computerid = inlineid[ele2];
                            break;
                        } else {
                            if (i < win_arr.length - 1) {
                                continue;
                            } else if (i === win_arr.length - 1) {
                                while (true) {
                                    index = Math.floor((Math.random() * inlineid.length));
                                    computerid = inlineid[index];
                                    if (typeof(computerid) != 'undefined') {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    break;
                }
            }
        }
    }
    return computerid;
}


for (i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
        if (clickStart === true && count > 0) {
            if (isautoplayer === false && this.className === 'inline') {
                this.className = "inline_ans";
                this.innerText = gamer;
                delete inlineid[this.id[5]];
                statusArray.splice(this.id[5], 1, gamer);
                console.log(elements, changeEle);
                document.getElementById("turn").innerText = "現在回合: 電腦";
                console.log(statusArray);
                if (count < 9) {
                    /*while (true) {
                        index = Math.floor((Math.random() * inlineid.length));
                        computerid = inlineid[index];
                        console.log(computerid);
                        if (typeof(computerid) != 'undefined') {
                            break;
                        } //if(判斷是否為undefined的方法),null不存在,undefined應該要有但沒有
                    }
                    console.log(count);*/
                    computerid = ComputerAI();
                    console.log(computerid);
                    setTimeout(function() {
                        var e = document.createEvent("MouseEvents");
                        e.initEvent("click", true, true);
                        document.getElementById(computerid).dispatchEvent(e);
                    }, 2000);
                    isautoplayer = !isautoplayer;
                    count += 1;
                } else if (count === 9) {
                    document.getElementById("turn").innerText = "遊戲回合結束!這場沒輸沒贏";
                }
            } else if (isautoplayer === true && this.className === 'inline' && this.id === computerid) {
                this.className = "inline_ans";
                this.innerText = computer;
                document.getElementById("turn").innerText = "現在回合: 玩家";
                delete inlineid[computerid[5]];
                statusArray.splice(this.id[5], 1, computer);
                isautoplayer = !isautoplayer;
                count += 1;
            } else if (isautoplayer === true) {
                alert("還沒輪到你啊~別著急");
            }
            //console.log(isautoplayer);
            winnerJudge();
        } else if (clickStart === false) {
            alert('請先點選開始遊戲!')
        }
    })
}