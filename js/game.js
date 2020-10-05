const numDivs = 36;
const maxHits = 10;

let hits = 0;
let pressing = 0; //Считаем общее количество нажатий
let firstHitTime = 0;

function round() {
  $(".game-field").removeClass("target");

  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(divSelector).text(hits+1);

  if (pressing == 1) {
    firstHitTime = getTimestamp();
  }
  
  if (hits === maxHits) {
    endGame();
  }
}

function endGame() {
  $(".game-board").addClass('d-none');
  
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");

}

function handleClick(event) {
  pressing = pressing + 1;

  $(".game-field").text("");
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    round();
  }
  // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
}

function init() {
  $("#button-reload").addClass("d-none");

  $("#button-start").click(function() {
    round();
    $("#button-start").addClass("d-none");
    $("#button-reload").removeClass("d-none");
  });

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
  });
}

$(document).ready(init);
