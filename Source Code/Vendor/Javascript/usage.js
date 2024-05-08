document.getElementById('search-button').addEventListener('click', function() {
    var startDate = document.getElementById('start-date').value;
    var endDate = document.getElementById('end-date').value;

    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);

    // Clear previous table rows
    document.getElementById('table-body').innerHTML = '';

    // Generate table rows for each day in the date range
    var currentDate = new Date(startDate);
    var endDateObj = new Date(endDate);
    while (currentDate <= endDateObj) {
        var row = document.createElement('tr');
        var dateCell = document.createElement('td');

        // Format date as "DD-MM-YYYY"
        var formattedDate = currentDate.getDate().toString().padStart(2, '0') + '-' +
            (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' +
            currentDate.getFullYear();
        dateCell.textContent = formattedDate;

        var column1Cell = document.createElement('td');
        // Placeholder values for column 1 and column 2
        column1Cell.textContent = 'Value 1';
        var column2Cell = document.createElement('td');
        column2Cell.textContent = 'Value 2';
        var column3Cell = document.createElement('td');
        column3Cell.textContent = 'Value 3';
        row.appendChild(dateCell);
        row.appendChild(column1Cell);
        row.appendChild(column2Cell);
        row.appendChild(column3Cell);
        document.getElementById('table-body').appendChild(row);
        // Increment currentDate to the next day
        currentDate.setDate(currentDate.getDate() + 1);
    }
});