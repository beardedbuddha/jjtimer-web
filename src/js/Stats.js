var format_time = require('./TimeFormatter');
var $ = document.getElementById.bind(document);
function show(id) {
  $(id).style.display = 'inline';
}
function hide(id) {
  $(id).style.display = 'none';
}

var Stats = (function(Session) {
  function render() {
    $('session-count').textContent = Session.length();
    if (Session.length() < 3) {
      hide('session-avg-outer');
      hide('current-avg-all-outer');
      hide('best-avg-all-outer');
      hide('current-avg-12-outer');
      hide('best-avg-12-outer');
    } else {
      show('session-avg-outer');
      $('session-avg').textContent = format_time(Session.average().avg);
    }
    if (Session.length() >= 5) {
      $('current-avg-5').textContent = format_time(Session.current_average(5).avg);
      $('best-avg-5').textContent = format_time(Session.best_average(5).avg);
      show('current-avg-all-outer');
      show('best-avg-all-outer');
    }
    if (Session.length() >= 12) {
      $('current-avg-12').textContent = format_time(Session.current_average(12).avg);
      $('best-avg-12').textContent = format_time(Session.best_average(12).avg);
      show('current-avg-12-outer');
      show('best-avg-12-outer');
    }
  }
  return {
    render: render
  };
});

module.exports = Stats;