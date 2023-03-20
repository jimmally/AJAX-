var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4 && xhr.status === 200) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i += 1) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
xhr.open('GET', '../data/employees.json');
xhr.send();



var xhs = new XMLHttpRequest();
xhs.onreadystatechange = function () {
  if(xhs.readyState === 4 && xhs.status === 200) {
    var rooms = JSON.parse(xhs.responseText);
    var roomStatus = '<ul class = "rooms">';
    
    for ( var i = 0; i < rooms.length; i++) {
      if (rooms[i].available === true) {
        roomStatus += '<li class = "empty">' 
      }
      
      else if (rooms[i].available === false) {
        roomStatus += '<li class = "full">';
      }
      roomStatus += rooms[i].room;
      roomStatus +=  '</li>'
      
      
    }
    roomStatus += '</ul>'
    document.getElementById("roomList").innerHTML = roomStatus;
}
}

  xhs.open('GET', '../data/rooms.json');
  xhs.send();