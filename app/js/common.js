$(function() {
	var swiper = new Swiper('.swiper-container', {
		pagination: {
		  el: '.swiper-pagination',
		  clickable: true,
		  renderBullet: function (index, className) {
			return '<li class="' + className + '">' + (index + 1) + '</li>';
		  },
		},
	  });
});
