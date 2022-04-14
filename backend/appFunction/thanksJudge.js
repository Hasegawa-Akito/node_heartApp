//メッセージにありがとうが含まれているか判別
exports.plusHeart = function (message) {
    let plusHeart = 0;

    if (message.indexOf("ありがとう") >= 0){
        plusHeart = 1;
    }
    else if (message.toLowerCase().indexOf("thanks") >= 0){
        plusHeart = 1;
    }
    else if (message.toLowerCase().indexOf("thank you") >= 0){
        plusHeart = 1;
    }

    return plusHeart;
}