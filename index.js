import './scss/main.scss';

$(document).foundation();

var isAllChecked = false;
var isListShown = false;

$("#select-all").click(function() {
  if(isAllChecked) {
    $(".selector").removeAttr("checked");
  }else {
    $(".selector").attr("checked", "checked");
  }
  
  isAllChecked = !isAllChecked;
});

$(".accordion").click(function() {
  if(isListShown) {
    $(".list-item-sub").removeClass('is-active');
  }else {
    $(".list-item-sub").addClass('is-active');
  }

  isListShown = !isListShown;
});