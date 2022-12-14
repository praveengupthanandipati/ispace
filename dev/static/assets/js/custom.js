function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('bi-plus-lg bi-dash-lg');
}
$('.accordion').on('.collapse', toggleIcon);
$('.accordion').on('.collapse .show', toggleIcon);



