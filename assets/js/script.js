// $(function() {
//     $(".dropdown-toggle").dropdown();
// });


$(function() {
    // var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    // var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    // return new bootstrap.Popover(popoverTriggerEl)
    // })
    $('[data-bs-toggle="dropdown"]').dropdown();
    $("[data-bs-toggle='tooltip']").tooltip();
    $('[data-toggle="popover"]').popover({sanitize: false});
});