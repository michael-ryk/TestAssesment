$(document).ready(function () {
  $('.btn-showmore').on('click', toggleContent);
});

function toggleContent() {
  $(this).parents('div.container_item-header').next().slideToggle(500);

  if ($(this).html() !== "Show less") {
    $(this).html("Show less");
  } else {
    $(this).html("Show more");
  }

}