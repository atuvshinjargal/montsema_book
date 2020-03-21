
                        
                                        var activateMobileMenu = function()
                    {
                        if (jQuery(window).width() < 960)
                        {
                            jQuery('#mobnav').show();
                            jQuery('.vertnav-top').addClass('mobile');
                            jQuery('#nav').addClass('mobile');
                        }
                        else
                        {
                            jQuery('#nav').removeClass('mobile');
                            jQuery('.vertnav-top').removeClass('mobile');
                            jQuery('#mobnav').hide();
                        }
                    }
                    activateMobileMenu();
                    jQuery(window).resize(activateMobileMenu);
        
                
                                jQuery('#mobnav-trigger').toggle(function() {
                    jQuery('.vertnav-top').addClass('show');
                    jQuery(this).addClass('active');
                }, function() {
                    jQuery('.vertnav-top').removeClass('show');
                    jQuery(this).removeClass('active');
                });
                
        //]]>


    


   
            jQuery(function($) {
                $("#nav > li").hover(function() {
                    var el = $(this).find(".level0-wrapper");
                    el.hide();
                    el.css("left", "0");
                    el.stop(true, true).delay(150).fadeIn(300, "easeOutCubic");
                }, function() {
                    $(this).find(".level0-wrapper").stop(true, true).delay(300).fadeOut(300, "easeInCubic");
                });
            });

            jQuery(window).on("load", function() {

                if(/iPhone|iPad|iPod/i.test(navigator.userAgent))
                {
                    jQuery('#nav a.level-top').click(function(e) {
                        $t = jQuery(this);
                        $parent = $t.parent();
                        if ($parent.hasClass('parent'))
                        {
                            if ( !$t.hasClass('menu-ready'))
                            {                    
                                jQuery('#nav a.level-top').removeClass('menu-ready');
                                $t.addClass('menu-ready');
                                return false;
                            }
                            else
                            {
                                $t.removeClass('menu-ready');
                            }
                        }
                    });
                }

            }); //end: on load

            


    			jQuery(function($){	
    				jQuery('.the-slideshow').flexslider({
    					namespace:			"",
    					animation:			'slide',
    				
    								easing:				'easeInOutQuart',
    					useCSS:				false,
    								
    					animationLoop:		1,
    					smoothHeight:		0,
    					
    								slideshowSpeed:		7000,
    							
    								animationSpeed:		400,
    								
    					pauseOnHover:		1			});
    			});
  
    	        
    			jQuery(function($) {
    				
    				$('#itemslider-4298f8f85296b78d88095c61d9ca5922').flexslider({
    					namespace: "",
    					animation: "slide",
    					easing: "easeInOutCubic", //"easeInQuart",
    					useCSS: false,
    					
    									slideshow: false,
    						animationLoop: false,
    								
    								
    									animationSpeed: 400,
    								
    					pauseOnHover: true,
    					controlNav: false,			
    					controlsContainer: "#nav-wrapper-4298f8f85296b78d88095c61d9ca5922",
    					
    					itemWidth: 188,
    									minItems: 5,
    						maxItems: 5,
    					
    					move: 0		})
    							.data("breakpoints", [ [1280, 6], [960, 5], [768, 4], [480, 3], [320,2], [240,1] ] )
    						; //IMPORTANT: don't remove semicolon!
    				
    			});
    			
    			jQuery(function($) {

    				$('.new-itemslider-wrapper .itemslider').flexslider({
    					namespace: "",
    					animation: "slide",
    					easing: "easeInOutCubic", //"easeInQuart",
    					useCSS: false,
    					
    									slideshow: false,
    						animationLoop: false,
    								
    								
    									animationSpeed: 400,
    								
    					pauseOnHover: true,
    					controlNav: false,
    					controlsContainer: ".new-itemslider-wrapper .nav-wrapper",
    					
    					itemWidth: 188,
    									minItems: 5,
    						maxItems: 5,
    								
    					move: 0		})
    							.data("breakpoints", [ [1280, 6], [960, 5], [768, 4], [480, 3], [320,2], [240,1] ] )
    						; //IMPORTANT: don't remove semicolon!
    				
    			});
    			
    			jQuery(function($) {
    				
    				$('#itemslider-a24790f4eb1bfe5e9a29b70c5d335a8d').flexslider({
    					namespace: "",
    					animation: "slide",
    					easing: "easeInOutCubic", //"easeInQuart",
    					useCSS: false,
    					
    									slideshow: false,
    						animationLoop: false,
    								
    								
    									animationSpeed: 400,
    								
    					pauseOnHover: true,
    					controlNav: false,			
    					controlsContainer: "#nav-wrapper-a24790f4eb1bfe5e9a29b70c5d335a8d",
    					
    					itemWidth: 188,
    									minItems: 5,
    						maxItems: 5,
    					
    					move: 1		})
    							.data("breakpoints", [ [1280, 6], [960, 5], [768, 4], [480, 3], [320,2], [240,1] ] )
    						; //IMPORTANT: don't remove semicolon!
    				
    			});
    			
    			jQuery(function($) {

    				$('.brand-slider-wrapper .itemslider').flexslider({
    					namespace: "",
    					animation: "slide",
    					animationLoop: 1,
    					
    									easing: "easeInOutQuint",
    						useCSS: false,
    								
    									slideshowSpeed: 5000,
    								
    								
    									animationSpeed: 500,
    								
    					pauseOnHover: 1,
    					controlNav: false,
    					controlsContainer: ".brand-slider-wrapper .nav-wrapper",

    					itemWidth: 188,
    									minItems: 4,
    						maxItems: 4,
    					
    					move: 1		})
    							.data("showItems", 4 )
    						; //IMPORTANT: don't remove semicolon!

    			});
    			
    			
    			var newsletterSubscriberFormDetail = new VarienForm('newsletter-validate-detail');
    		    new Varien.searchForm('newsletter-validate-detail', 'newsletter', 'Enter your email address');


			var gridItemsEqualHeightApplied = false;
	function setGridItemsEqualHeight($)
	{
		var $list = $('.category-products-grid');
		var $listItems = $list.children();

		var centered = $list.hasClass('centered');
		var gridItemMaxHeight = 0;
		$listItems.each(function() {
			
			$(this).css("height", "auto"); 			var $object = $(this).find('.actions');

						if (centered)
			{
				var objectWidth = $object.width();
				var availableWidth = $(this).width();
				var space = availableWidth - objectWidth;
				var leftOffset = space / 2;
				$object.css("padding-left", leftOffset + "px"); 			}

						var bottomOffset = parseInt($(this).css("padding-top"));
			if (centered) bottomOffset += 10;
			$object.css("bottom", bottomOffset + "px");

						if ($object.is(":visible"))
			{
								var objectHeight = $object.height();
				$(this).css("padding-bottom", (objectHeight + bottomOffset) + "px");
			}

						
			gridItemMaxHeight = Math.max(gridItemMaxHeight, $(this).height());
		});

		//Apply max height
		$listItems.css("height", gridItemMaxHeight + "px");
		gridItemsEqualHeightApplied = true;

	}
	


	jQuery(function($) {

				$('.collapsible').each(function(index) {
			$(this).prepend('<span class="opener">&nbsp;</span>');
			if ($(this).hasClass('active'))
			{
				$(this).children('.block-content').css('display', 'block');
			}
			else
			{
				$(this).children('.block-content').css('display', 'none');
			}			
		});
				$('.collapsible .opener').click(function() {
			
			var parent = $(this).parent();
			if (parent.hasClass('active'))
			{
				$(this).siblings('.block-content').stop(true).slideUp(300, "easeOutCubic");
				parent.removeClass('active');
			}
			else
			{
				$(this).siblings('.block-content').stop(true).slideDown(300, "easeOutCubic");
				parent.addClass('active');
			}
			
		});
		
		
				var ddOpenTimeout;
		var dMenuPosTimeout;
		var DD_DELAY_IN = 200;
		var DD_DELAY_OUT = 0;
		var DD_ANIMATION_IN = 0;
		var DD_ANIMATION_OUT = 0;
		$(".clickable-dropdown > .dropdown-toggle").click(function() {
			$(this).parent().addClass('open');
			$(this).parent().trigger('mouseenter');
		});
		$(".dropdown").hover(function() {
			
			
			var ddToggle = $(this).children('.dropdown-toggle');
			var ddMenu = $(this).children('.dropdown-menu');
			var ddWrapper = ddMenu.parent(); 			
						ddMenu.css("left", "");
			ddMenu.css("right", "");
			
						if ($(this).hasClass('clickable-dropdown'))
			{
								if ($(this).hasClass('open'))
				{
					$(this).children('.dropdown-menu').stop(true, true).delay(DD_DELAY_IN).fadeIn(DD_ANIMATION_IN, "easeOutCubic");
				}
			}
			else
			{
								clearTimeout(ddOpenTimeout);
				ddOpenTimeout = setTimeout(function() {
					
					ddWrapper.addClass('open');
					
				}, DD_DELAY_IN);
				
				//$(this).addClass('open');
				$(this).children('.dropdown-menu').stop(true, true).delay(DD_DELAY_IN).fadeIn(DD_ANIMATION_IN, "easeOutCubic");
			}
			
						clearTimeout(dMenuPosTimeout);
			dMenuPosTimeout = setTimeout(function() {

				if (ddMenu.offset().left < 0)
				{
					var space = ddWrapper.offset().left; 					ddMenu.css("left", (-1)*space);
					ddMenu.css("right", "auto");
				}
			
			}, DD_DELAY_IN);
			
		}, function() {
			var ddMenu = $(this).children('.dropdown-menu');
			clearTimeout(ddOpenTimeout); 			ddMenu.stop(true, true).delay(DD_DELAY_OUT).fadeOut(DD_ANIMATION_OUT, "easeInCubic");
			if (ddMenu.is(":hidden"))
			{
				ddMenu.hide();
			}
			$(this).removeClass('open');
		});
		
		
		
						
		
		
				var windowScroll_t;
		$(window).scroll(function(){
			
			clearTimeout(windowScroll_t);
			windowScroll_t = setTimeout(function() {
										
				if ($(this).scrollTop() > 100)
				{
					$('#scroll-to-top').fadeIn();
				}
				else
				{
					$('#scroll-to-top').fadeOut();
				}
			
			}, 500);
			
		});
		
		$('#scroll-to-top').click(function(){
			$("html, body").animate({scrollTop: 0}, 600, "easeOutCubic");
			return false;
		});
		
		
		
				
			var startHeight;
			var bpad;
			$('.category-products-grid').on('mouseenter', '.item', function() {

														if ($(window).width() >= 320)
					{
				
											if (gridItemsEqualHeightApplied === false)
						{
							return false;
						}
					
					startHeight = $(this).height();
					$(this).css("height", "auto"); //Release height
					$(this).find(".display-onhover").fadeIn(400, "easeOutCubic"); //Show elements visible on hover
					var h2 = $(this).height();
					
										////////////////////////////////////////////////////////////////
					var addtocartHeight = 0;
					var addtolinksHeight = 0;
					
										
											var addtolinksEl = $(this).find('.add-to-links');
						if (addtolinksEl.hasClass("addto-onimage") == false)
							addtolinksHeight = addtolinksEl.innerHeight(); //.height();
										
											var h3 = h2 + addtocartHeight + addtolinksHeight;
						var diff = 0;
						if (h3 < startHeight)
						{
							$(this).height(startHeight);
						}
						else
						{
							$(this).height(h3); 							diff = h3 - startHeight;
						}
										////////////////////////////////////////////////////////////////

					$(this).css("margin-bottom", "-" + diff + "px"); 
									} 								
			}).on('mouseleave', '.item', function() {

													if ($(window).width() >= 320)
					{
				
					//Clean up
					$(this).find(".display-onhover").stop(true).hide();
					$(this).css("margin-bottom", "");

																$(this).height(startHeight);
					
									} 								
			});
		
		


				$('.products-grid, .products-list').on('mouseenter', '.item', function() {
			$(this).find(".alt-img").fadeIn(400, "easeOutCubic");
		}).on('mouseleave', '.item', function() {
			$(this).find(".alt-img").stop(true).fadeOut(400, "easeOutCubic");
		});



						var winWidth = $(window).width();
		var winHeight = $(window).height();
		$(window).resize(
			$.debounce(50, onEventResize)
		); //end: resize

				function onEventResize() {

						var winNewWidth = $(window).width();
			var winNewHeight = $(window).height();
			if (winWidth != winNewWidth || winHeight != winNewHeight)
			{
				afterResize(); 			}
			//Update window size variables
			winWidth = winNewWidth;
			winHeight = winNewHeight;

		} //end: onEventResize

				function afterResize() {

						$(document).trigger("themeResize");

										setGridItemsEqualHeight($);
									
						$('.itemslider').each(function(index) {
				var flex = $(this).data('flexslider');
				if (flex != null)
				{
					flex.flexAnimate(0);
					flex.resize();
				}
			});
							
						var slideshow = $('.the-slideshow').data('flexslider');
			if (slideshow != null)
			{
				slideshow.resize();
			}

		} //end: afterResize



	}); /* end: jQuery(){...} */
	
	

	jQuery(window).load(function(){
		
							setGridItemsEqualHeight(jQuery);
		
	}); /* end: jQuery(window).load(){...} */


jQuery(function($) {

var islider={config:{elements:".itemslider-responsive",columnCount:5,maxBreakpoint:960,breakpoints:[[1680,3],[1440,2],[1360,1],[1280,1],[960,0],[768,-1],[640,-2],[480,-3],[320,-5]]},init:function(a){$.extend(islider.config,a)},onResize_recalculateAllSliders:function(){return islider.recalculateAllSliders(),!1},recalculateAllSliders:function(){$(islider.config.elements).each(function(){null!=$(this).data("flexslider")&&islider.recalcElement($(this))})},recalcElement:function(a){var b,c=a.data("breakpoints");if(c)b=islider.getMaxItems_CustomBreakpoints(c);else{var d=a.data("showItems");void 0===d&&(d=islider.config.columnCount),b=islider.getMaxItems(d)}a.data("flexslider").setOpts({minItems:b,maxItems:b})},getMaxItems_CustomBreakpoints:function(a){if(infortisTheme.viewportW)var b=infortisTheme.viewportW;else var b=$(window).width();var c=islider.config.maxBreakpoint;"undefined"!=typeof infortisTheme&&infortisTheme.maxBreak&&(c=infortisTheme.maxBreak);for(var d,e=0;a.length>e;e++){var f=parseInt(a[e][0],10),g=parseInt(a[e][1],10);if(d=g,c>=f&&b>=f)return d}return d},getMaxItems:function(a){var b=islider.config.breakpoints;if(infortisTheme.viewportW)var c=infortisTheme.viewportW;else var c=$(window).width();var d=islider.config.maxBreakpoint;"undefined"!=typeof infortisTheme&&infortisTheme.maxBreak&&(d=infortisTheme.maxBreak);for(var e,f=0;b.length>f;f++){var g=parseInt(b[f][0],10),h=parseInt(b[f][1],10);if(e=a+h,0>=e&&(e=1),d>=g&&c>=g)return e}return e}};
	
	if (typeof infortisTheme !== 'undefined' && infortisTheme.responsive)
	{
		islider.init( {elements: '.itemslider-responsive'} );
		islider.recalculateAllSliders();
		$(document).on("themeResize", islider.onResize_recalculateAllSliders );
	}

});
