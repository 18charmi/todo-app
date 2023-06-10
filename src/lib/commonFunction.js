export const getCurrentDateTime = () => {
    var now = new Date();
    
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2);  // Months are zero-based
    var day = ('0' + now.getDate()).slice(-2);
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var seconds = ('0' + now.getSeconds()).slice(-2);
    
    var dateTime = year + month + day + hours + minutes + seconds;
    return dateTime;
}

export const formatDate = (dateTimeString) => {
    var year = dateTimeString.slice(0, 4);
    var month = parseInt(dateTimeString.slice(4, 6), 10) - 1; // Months are zero-based
    var day = dateTimeString.slice(6, 8);
    var hours = dateTimeString.slice(8, 10);
    var minutes = dateTimeString.slice(10, 12);
    var seconds = dateTimeString.slice(12, 14);
  
    var months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    var dateObj = new Date(year, month, day, hours, minutes, seconds);
    var monthName = months[dateObj.getMonth()];
    
    var formattedDate = monthName + ' ' + day + ', ' + year + ', at ' + hours + ':' + minutes + ':' + seconds;
    return formattedDate;
  }
