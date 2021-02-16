var links = {
  setColor: function (color) {
    var aList = document.querySelectorAll('a');
    var i = 0;

    while (i < aList.length) {
      aList[i].style.color = color;
      i = i + 1;
    }
  },
};

var body = {
  setColor: function (color) {
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector('body').style.backgroundColor = color;
  },
};

function nightDayHandler(self) {
  var target = document.querySelector('body');

  if (self.value === 'night') {
    body.setBackgroundColor('black');
    body.setColor('white');
    self.value = 'day';

    links.setColor('powderblue');
  } else {
    body.setBackgroundColor('white');
    body.setColor('black');
    self.value = 'night';

    links.setColor('blue');
  }
}
