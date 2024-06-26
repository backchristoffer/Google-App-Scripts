# Example: Deletes duplicates in Column A and also the ROW
function removeDuplicateRows() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var seen = {};
  var rowsToDelete = [];
  
  for (var i = 0; i < data.length; i++) {
    var text = data[i][0];  // Assuming text is in Column A
    if (seen[text]) {
      rowsToDelete.push(i + 1); // Google Sheets is 1-indexed
    } else {
      seen[text] = true;
    }
  }
  
  // Delete rows from bottom to top to avoid index shifting
  for (var j = rowsToDelete.length - 1; j >= 0; j--) {
    sheet.deleteRow(rowsToDelete[j]);
  }
}
