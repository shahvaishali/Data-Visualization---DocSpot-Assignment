function addTableCell(tr, strValue) {
    var td = document.createElement('td');
    td.appendChild(document.createTextNode(strValue));
    tr.appendChild(td);
}
      
function renderTable() {
    var tableBody = document.getElementById("table-body");
    for (var i = 0; i < fruitSales.length; i++) {
        var purchase = fruitSales[i];
        var tr = document.createElement('tr');
        addTableCell(tr, purchase["store"]);
        addTableCell(tr, new Date(purchase["date"]).toLocaleDateString());
        addTableCell(tr, purchase["invoiceId"]);
        addTableCell(tr, purchase["item"]);
        addTableCell(tr, "$ " + purchase["price"]);
        addTableCell(tr, purchase["units"]);
        addTableCell(tr, "$ " + Math.round(purchase["units"]*purchase["price"]*100)/100);
        tableBody.appendChild(tr);
    }
}

$(document).ready(function() {
    $('#example').DataTable();
} );