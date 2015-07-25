function documentReady() {
  var leftArrow = document.querySelector('#leftArrow');
  var rightArrow = document.querySelector('#rightArrow');
  var upArrow = document.querySelector('#upArrow');
  var downArrow = document.querySelector('#downArrow');
  var stop = document.querySelector('#stop');

  leftArrow.addEventListener('click', function() {
    console.log('mouse down');
    fetch('/left', {
      method: 'post'
    }).then(function() {
      console.log('left acknoledge received');
    });
  });

  rightArrow.addEventListener('click', function() {
    fetch('/right', {
      method: 'post'
    }).then(function() {
      console.log('left acknoledge received');
    });
  });

  upArrow.addEventListener('click', function() {
    fetch('/forward', {
      method: 'post'
    }).then(function() {
      console.log('left acknoledge received');
    });
  });

  downArrow.addEventListener('click', function() {
    fetch('/backward', {
      method: 'post'
    }).then(function() {
      console.log('left acknoledge received');
    });
  });


  stop.addEventListener('click', function() {
    fetch('/stop', {
      method: 'post'
    }).then(function() {
      console.log('stop acknoledge received');
    })
  })
}

document.addEventListener('DOMContentLoaded', documentReady, false);