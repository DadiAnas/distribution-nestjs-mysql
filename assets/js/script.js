
const db = [
    ['37 °C', '12 Sep 2020 00:59:24 GMT'],
    ['40 °C', '12 Sep 2020 00:58:14 GMT'],
    ['41 °C', '12 Sep 2020 00:57:44 GMT'],
    ['41.3 °C', '12 Sep 2020 00:56:18 GMT'],
    ['41.2 °C', '12 Sep 2020 00:55:17 GMT'],
    ['41.3 °C', '12 Sep 2020 00:54:35 GMT'],
    ['37.3 °C', '12 Sep 2020 00:53:34 GMT'],
    ['37.1 °C', '12 Sep 2020 00:52:11 GMT'],
    ['42.8 °C', '12 Sep 2020 00:51:20 GMT'],
];

const fillData = data => {
    for (let i = 0; i <= 3; i++) {
        $('#m' + i).val(data[i][0]);
        $('#t' + i).val(data[i][1]);
    }
    $('#m4').val(data[data.length - 1][0]);
    $('#t4').val(data[data.length - 1][1]);
};

$('#viewButton').click(() => {
    fillData(db);
});
$('#historyButton').click(() => {
    alert(db.slice(1, db.length).join('\n'))
});
$('#criticalButton').click(() => {
    alert(db.slice(1, 5).join('\n'));
});