function highlightDuplicateRows() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var range = sheet.getDataRange();
    var values = range.getValues();
    // Define the columns to check for duplicates (e.g., [1, 2] means column A and B)
    var columnsToCheck = [1, 2]; // Adjust this array to include the columns you want to check for duplicates
    var occurrences = {};
    
    for (var j = 0; j < columnsToCheck.length; j++) {
      var columnIndex = columnsToCheck[j] - 1; 
  
      for (var i = 1; i < values.length; i++) {
        var value = values[i][columnIndex];
        if (value !== "") {
          if (!occurrences[columnIndex]) {
            occurrences[columnIndex] = {};
          }
          if (occurrences[columnIndex][value]) {
            occurrences[columnIndex][value].push(i + 1); 
          } else {
            occurrences[columnIndex][value] = [i + 1];
          }
        }
      }
    }

    range.setBackground(null);

    for (var colIndex in occurrences) {
      var colData = occurrences[colIndex];
      for (var key in colData) {
        if (colData[key].length > 1) {
          colData[key].forEach(function(row) {
            sheet.getRange(row, 1, 1, sheet.getLastColumn()).setBackground("yellow"); // Set background colour
          });
        }
      }
    }
  }
  