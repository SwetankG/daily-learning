function getHistory() {
    var history_value = document.getElementById("historyvalue");
    //var history_value1 = document.getElementById("historyvalue").value;
    console.log(history_value);
    //console.log(history_value1);
    return history_value
}
alert(getHistory());
/*function printHistory(num) {
    document.getElementById("history-value").innerText=num;
}
printHistory("9*9+8");*/