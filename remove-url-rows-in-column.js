// Removes ocpbug url in all rows in the selected colum (see variable)
function removeTextFromColumn() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var column = 4;  // Change this to the column number you want to modify (1 for A, 2 for B, etc.)
  
    var range = sheet.getRange(1, column, sheet.getLastRow(), 1);
  
    var values = range.getValues();
  
    for (var i = 0; i < values.length; i++) {
      if (values[i][0] && typeof values[i][0] === 'string') {
        values[i][0] = values[i][0].replace('https://issues.redhat.com/browse/', '');
      }
    }
  
    range.setValues(values);
  }