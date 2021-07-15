(function ($) {
 "use strict";
    
		//---------------------------------------------
		//Nivo slider
		//---------------------------------------------
			$('#ensign-nivoslider-3').nivoSlider({
				effect: 'boxRainGrowReverse',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 500,
				pauseTime: 3000,
				startSlide: 0,
				directionNav: true,
				controlNavThumbs: false,
				pauseOnHover: true,
				prevText: '<i class="fas fa-angle-left nivo-prev-icon"></i>',
				nextText: '<i class="fas fa-angle-right nivo-next-icon"></i>',
				manualAdvance: false
			 }); 
})(jQuery); 