$(document).ready(function() {

    (function() {
        var backToTop = $('a.backToTop');

        backToTop.on('click', function(event) {
            $('html, body').animate({
                scrollTop: 0
            }, 300);

            event.preventDefault();
        });

        $(window).on('scroll', function() {
            var self = $(this),
                height = self.height() / 8,
                top = self.scrollTop();

            if (top > height) {
                if (!backToTop.hasClass("show")) {
                    backToTop.addClass("show");
                }
            } else {
                backToTop.removeClass("show");
            }
        });
    })();
	//Back to top button
	
	(function() {
        if ($("a.toggle-mobile-nav").length) {
            $("a.toggle-mobile-nav").on("click", function(event) {
                event.preventDefault();
                event.stopPropagation();

                $("body").toggleClass("show-mobile-nav");
                $("html").toggleClass("show-mobile-nav");
            });
        }
    })();
    //toggle Mobile Nav

    (function() {
        if ($("div.videoButton").length) {
            $("div.videoButton a").magnificPopup({
                type: "iframe"
            });
        }
    })();
    //magnificPopup (iframe)

    (function() {
        if ($("div.photosGrid").length) {
            $("div.photosGrid a.galleryItem").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true
                }
            });
        }
    })();
    //magnificPopup (Photo Gallery)

    (function() {
        if ($("a.edit-company-logo, a.edit-company-cover, a.edit-user-avatar, a.edit-user-cover, a.edit-experience, a.add-new-experience, a.add-company").length) {
            $("a.edit-company-logo, a.edit-company-cover, a.edit-user-avatar, a.edit-user-cover, a.edit-experience, a.add-new-experience, a.add-company").magnificPopup({
                type: 'inline',
                preloader: false,
                focus: '#name',

                removalDelay: 500, //delay removal by X to allow out-animation

                // When elemened is focused, some mobile browsers in some cases zoom in
                // It looks not nice, so we disable it:
                callbacks: {
					open: function() {
						if(!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
							$('html').css('margin-right', 17);
						} else {
							$('html').css('margin-right', 0);
						}
					},
					close: function() {
						$('html').css('padding-right', 0);
					},
                    beforeOpen: function() {

                        if ($(window).width() < 700) {
                            this.st.focus = false;
                        } else {
                            this.st.focus = '#name';
                        }

                        this.st.mainClass = this.st.el.attr('data-effect');
                    }
                },

                midClick: true // allow opening popup on middle mouse click. Always set
            });
        }
    })();
    //magnificPopup (Form)

    (function() {
        if ($("div.accordion").length) {
            var d = document,
                accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
                setAria,
                setAccordionAria,
                switchAccordion,
                touchSupported = ('ontouchstart' in window),
                pointerSupported = ('pointerdown' in window);

            skipClickDelay = function(e) {
                e.preventDefault();
                e.target.click();
            }

            setAriaAttr = function(el, ariaType, newProperty) {
                el.setAttribute(ariaType, newProperty);
            };
            setAccordionAria = function(el1, el2, expanded) {
                switch (expanded) {
                    case "true":
                        setAriaAttr(el1, 'aria-expanded', 'true');
                        setAriaAttr(el2, 'aria-hidden', 'false');
                        break;
                    case "false":
                        setAriaAttr(el1, 'aria-expanded', 'false');
                        setAriaAttr(el2, 'aria-hidden', 'true');
                        break;
                    default:
                        break;
                }
            };
            //function
            switchAccordion = function(e) {
                e.preventDefault();
                var thisAnswer = e.target.parentNode.nextElementSibling;
                var thisQuestion = e.target;
                if (thisAnswer.classList.contains('is-collapsed')) {
                    setAccordionAria(thisQuestion, thisAnswer, 'true');
                } else {
                    setAccordionAria(thisQuestion, thisAnswer, 'false');
                }
                thisQuestion.classList.toggle('is-collapsed');
                thisQuestion.classList.toggle('is-expanded');
                thisAnswer.classList.toggle('is-collapsed');
                thisAnswer.classList.toggle('is-expanded');

                thisAnswer.classList.toggle('animateIn');
            };
            for (var i = 0, len = accordionToggles.length; i < len; i++) {
                if (touchSupported) {
                    accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
                }
                if (pointerSupported) {
                    accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
                }
                accordionToggles[i].addEventListener('click', switchAccordion, false);
            }
        }
    })();
    //FAQ Accordion

    (function() {
        if ($("div.buoysCount").length) {
            $(window).scroll(startCounter);

            function startCounter() {
                if ($(window).scrollTop() > $("section.featuredVideos").offset().top) {
                    $(window).off("scroll", startCounter);
                    var number = $("div.buoysCount h5 span");
                    jQuery({
                        Counter: 0
                    }).animate({
                        Counter: number.text()
                    }, {
                        duration: 3500,
                        easing: 'swing',
                        step: function() {
                            number.text(Math.ceil(this.Counter));
                        }
                    });
                }
            }
        }
    })();
    //Buoys Counter

    (function() {
        if ($("form.reportForm, form#organizeForm").length) {

            $("#datePicker").datetimepicker({
                timepicker: false,
                format: 'd/m/Y'
            });

            $("#timePicker").datetimepicker({
                datepicker: false,
                format: 'H:i'
            });
        }
    })();
    //Date Time Picker

    (function() {
        if ($("#ourLocation").length) {

            function initialize() {
                var mapCanvas = document.getElementById("ourLocation");
                var LatLng = {
                    lat: 27.281027,
                    lng: 33.773775
                };
                var mapOptions = {
                    center: new google.maps.LatLng(27.281027, 33.773775),
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.TERRAIN,
                    backgroundColor: "#DD4140",
                    scrollwheel: false
                }
                var map = new google.maps.Map(mapCanvas, mapOptions);

                var marker = new google.maps.Marker({
                    position: LatLng,
                    map: map,
                    title: "HEPCA",
                    icon: 'images/ui/Pin-Hepca.png'
                });

            }

            initialize();
        }
    })();
    //Contact Us map

    (function() {
        if ($("ul.timeLineTabs").length) {
            var owl = $("ul.timeLineTabs");

            owl.owlCarousel({
                items: 5,
                // mouseDrag: false,
                // pagination: false,
                autoWidth: false,
                loop: false,
                margin: 30,
                dots: false,
                nav: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                        loop: false
                    },
                    800: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    },
                    1200: {
                        items: 4
                    },
                    1700: {
                        items: 5
                    }
                }
            });

            $("a.scrollTabLeft").on("click", function(event) {
                event.preventDefault();
                owl.trigger("prev.owl.carousel");
            });

            $("a.scrollTabRight").on("click", function(event) {
                event.preventDefault();
                owl.trigger("next.owl.carousel");
            });

            $("ul.timeLineTabs a").on("click", function(event) {
                event.preventDefault();
                var contentDivId = $(this).data("item");
                activateTimelineTab(contentDivId);
            });
        }

        function activateTimelineTab(itemId) {
            $("ul.timeLineTabs a").parent().removeClass("active");
            $("ul.timeLineTabs a[data-item='" + itemId + "']").parent().addClass("active");

            $("article.timeLineContent").find("div.tab").addClass("hide");
            $("article.timeLineContent").find("div.tab[data-item='" + itemId + "']").removeClass("hide");
        }
    })();
    //historyTimeLine

    (function() {
        if ($("section.whoWeAreTabs").length != "") {

            $('#tab1').css("display", "block");

            $("section.whoWeAreTabs .tabsMenu a").click(function(event) {
                event.preventDefault();
                $(this).parent().addClass("current");
                $(this).parent().siblings().removeClass("current");
                var tab = $(this).attr("href");
                $("section.whoWeAreTabs .tabContent").not(tab).css("display", "none");
                $(tab).fadeIn();
            });
        }
    })();
    //whoWeAreTabs (Side Tabs)

    (function() {
        if ($("div.downloadsPageWrapper a.expand").length) {
            $("div.downloadsPageWrapper a.expand").on("click", function(event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).parent("caption").parent("table").removeClass("shrink");
                $(this).addClass("hide");
                $(this).siblings("a.shrink").removeClass("hide");
            });

            $("div.downloadsPageWrapper a.shrink").on("click", function(event) {
                event.preventDefault();
                event.stopPropagation();
                $(this).parent("caption").parent("table").addClass("shrink");
                $(this).addClass("hide");
                $(this).siblings("a.expand").removeClass("hide");
            });
        }
    })();
    //Expanding Downlods tables

    // (function() {
	//     $("a.delete").on("click", function(event) {
	//         event.preventDefault();
	//         swal({
	//             title: "Error!",
	//             text: "Here's my error message!",
	//             type: "error",
	//             confirmButtonText: "Cool"
	// 		});
			
	// 		swal({
	// 			title: "Are you sure?",
	// 			text: "Once deleted, you will not be able to recover this rule!",
	// 			buttons: true,
	// 			dangerMode: true
	// 		})
	//     });
    // })();
	//Sweet Alert Plugin

    (function() {
        if(window.location.hash != "") {
            var element = window.location.hash;

        	if (element.indexOf("#_=_") >= 0) {
        		return false;
        	} else {
        		if($(element).length && $(element).hasClass("mfp-with-anim")) {

	                openMagnificPopup(window.location.hash, false);
	            }
        	}
        }
    })();
	//Open the popup if the hashtag is not empty and the popup exist
	
	(function() {
        if ($(".language-dropdown").length) {
            $(".main-header .language-dropdown .dropdown-button").on("click", function(event) {
				event.preventDefault();
				event.stopPropagation();
				
				$(".main-header .language-dropdown .dropdown-content").toggleClass("show");
			});

			$(".main-footer .language-dropdown .dropdown-button").on("click", function(event) {
				event.preventDefault();
				event.stopPropagation();
				
				$(".main-footer .language-dropdown .dropdown-content").toggleClass("show");
			});
        }
    })();
	//Language Dropdown
	
	(function() {
        if ($(".user-dropdown").length) {
            $(".user-dropdown .dropdown-button").on("click", function(event) {
				event.preventDefault();
				event.stopPropagation();
				
				$(".user-dropdown .dropdown-content").toggleClass("show");
			});
        }
    })();
	//user Dropdown
	
	(function() {
		if ($(".sponsers-slider").length) {
			$('.sponsers-slider').slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 1500,
				// variableWidth: true,
				arrows: false,

				responsive: [{
						breakpoint: 1140,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 850,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 769,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 736,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1
						}
					},
					{
						breakpoint: 426,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		}
	})();
	//Sponsers Carousel

	(function() {
		if ($(".members-filter, .companies-filter, .forum-filter, .publications-filter, .newsfeed-filter").length) {

			$(".filter").find("label.checkbox-check:nth-of-type(7)").nextAll("label.checkbox-check").addClass("hide");

			$(".show-more a").on("click", function(event) {
				event.preventDefault();

				$(this).html() == "Show More" ? $(this).html('Show Less') : $(this).html('Show More');

				$(this).parent(".show-more").toggleClass("show-less");
				$(this).closest(".filter").find("label.checkbox-check:nth-of-type(7)").nextAll("label.checkbox-check").toggleClass("hide");
			});
		}
	})();
	//Show Hide More Options in filters

	(function() {
		$.fn.editable.defaults.mode = 'inline';

		if($(".edit-company-profile-page").length) {
			$('.edit-about, .edit-specialities, .edit-address-1, .edit-address-2, .edit-phone-number, .edit-fax-number, .edit-email, .edit-website, .edit-company-name').editable();

			$('.edit-company-category').editable({
				value: 2,    
				source: [
					  {value: 1, text: 'Category 1'},
					  {value: 2, text: 'Category 2'},
					  {value: 3, text: 'Category 3'}
				   ]
			});

			$('.edit-company-type').editable({
				value: 2,    
				source: [
					  {value: 1, text: 'Type 1'},
					  {value: 2, text: 'Type 2'},
					  {value: 3, text: 'Type 3'}
				   ]
			});

			$('.edit-employees-number').editable({
				value: 2,    
				source: [
					  {value: 1, text: '10+'},
					  {value: 2, text: '20+'},
					  {value: 3, text: '30+'}
				   ]
			});

			$('.edit-company-country, .edit-address-3').editable({
				value: 2,    
				source: [
					  {value: 1, text: 'USA'},
					  {value: 2, text: 'Egypt'},
					  {value: 3, text: 'Moroco'}
				   ]
			});

			$('.edit-company-city, .edit-address-4').editable({
				value: 2,    
				source: [
					  {value: 1, text: 'Giaz'},
					  {value: 2, text: 'Cairo'},
					  {value: 3, text: 'Mansora'}
				   ]
			});

			$(".add-another-phone-nubmer").on("click", function(event) {
				event.preventDefault();

				$("<p class='edit-phone-number' data-type='text' data-pk='1' data-url='/post' data-title='Put Title Here'>+2 11 1111 1111</p>").insertBefore($(this)).editable();
			});

			$(".add-another-fax-nubmer").on("click", function(event) {
				event.preventDefault();

				$("<p class='edit-fax-number' data-type='text' data-pk='1' data-url='/post' data-title='Put Title Here'>+2 11 1111 1111</p>").insertBefore($(this)).editable();
			});

			Dropzone.options.uploadCompanyLogo = {
				paramName: "file", // The name that will be used to transfer the file
				maxFilesize: 2, // MB
				uploadMultiple: false,
				maxFiles: 1,
				dictDefaultMessage: "Drop Logo Here To Upload",
				accept: function (file, done) {
					if (file.name == "justinbieber.jpg") {
						done("Naha, you don't.");
					}
					else { done(); }
				},
				init: function () {
					this.on("maxfilesexceeded", function (file) {
						alert("No more files please!");
					});
				}
			};

			Dropzone.options.uploadCompanyCover = {
				paramName: "file", // The name that will be used to transfer the file
				maxFilesize: 2, // MB
				uploadMultiple: false,
				maxFiles: 1,
				dictDefaultMessage: "Drop Cover Here To Upload",
				accept: function (file, done) {
					if (file.name == "justinbieber.jpg") {
						done("Naha, you don't.");
					}
					else { done(); }
				},
				init: function () {
					this.on("maxfilesexceeded", function (file) {
						alert("No more files please!");
					});
				}
			};
		}
	})();
	// Edits company profile using x-editable plugin

	(function() {
		if($(".edit-user-profile-page").length) {
			$('.edit-user-name, .edit-user-title, .edit-about, .edit-phone-number, .edit-fax-number, .edit-email, .edit-website').editable();

			$('.edit-user-country').editable({
				value: 2,    
				source: [
					  {value: 1, text: 'USA'},
					  {value: 2, text: 'Egypt'},
					  {value: 3, text: 'Moroco'}
				   ]
			});

			$('.edit-user-city').editable({
				value: 2,    
				source: [
					  {value: 1, text: 'Giaz'},
					  {value: 2, text: 'Cairo'},
					  {value: 3, text: 'Mansora'}
				   ]
			});

			$(".add-another-phone-nubmer").on("click", function(event) {
				event.preventDefault();

				$("<p class='edit-phone-number' data-type='text' data-pk='1' data-url='/post' data-title='Put Title Here'>+2 11 1111 1111</p>").insertBefore($(this)).editable();
			});

			$(".add-another-fax-nubmer").on("click", function(event) {
				event.preventDefault();

				$("<p class='edit-fax-number' data-type='text' data-pk='1' data-url='/post' data-title='Put Title Here'>+2 11 1111 1111</p>").insertBefore($(this)).editable();
			});

			Dropzone.options.uploadUserAvatar = {
				paramName: "file", // The name that will be used to transfer the file
				maxFilesize: 2, // MB
				uploadMultiple: false,
				maxFiles: 1,
				dictDefaultMessage: "Drop Photo Here To Upload",
				accept: function (file, done) {
					if (file.name == "justinbieber.jpg") {
						done("Naha, you don't.");
					}
					else { done(); }
				},
				init: function () {
					this.on("maxfilesexceeded", function (file) {
						alert("No more files please!");
					});
				}
			};

			Dropzone.options.uploadUserCover = {
				paramName: "file", // The name that will be used to transfer the file
				maxFilesize: 2, // MB
				uploadMultiple: false,
				maxFiles: 1,
				dictDefaultMessage: "Drop Cover Here To Upload",
				accept: function (file, done) {
					if (file.name == "justinbieber.jpg") {
						done("Naha, you don't.");
					}
					else { done(); }
				},
				init: function () {
					this.on("maxfilesexceeded", function (file) {
						alert("No more files please!");
					});
				}
			};
		}
	})();
	// Edits User profile using x-editable plugin

	(function() {
	    $("a.delete-rule").on("click", function(event) {
			event.preventDefault();
			
			$(this).closest("label").remove();
	    });
    })();
	//Delete Rule button
	
	(function() {
	    $("a.add-rule").on("click", function(event) {
			event.preventDefault();
			
			$("<label><input type='text' name='rule1' placeholder='Your Rule'><a href='#' class='delete-rule'><img src='images/delete-icon.svg' alt='Delete Icon'></a></label>").insertBefore($(this));
	    });
    })();
    //Add Rule button

	(function () {
		if($(".input-date").length) {
			$(".input-date input").datepicker({
				showAnim: "slideDown"
			});
		}
	})();
	//Date input using jQuery UI

	$(function () {
		if($(".autocomplete-company").length) {
			var availableCompanies = [
				"ActionScript",
				"AppleScript",
				"Asp",
				"BASIC",
				"C",
				"C++",
				"Clojure",
				"COBOL",
				"ColdFusion",
				"Erlang",
				"Fortran",
				"Groovy",
				"Haskell",
				"Java",
				"JavaScript",
				"Lisp",
				"Perl",
				"PHP",
				"Python",
				"Ruby",
				"Scala",
				"Scheme"
			];

			$(".autocomplete-company").autocomplete({
				source: availableCompanies
			});
		} // Company Autocomplete input

		if($(".sign-up-form").length) {

			var phoneNumCount = 2;
			var faxNumCount = 2;

			$(".sign-up-form .add-another-phone-nubmer").on("click", function(event) {
				event.preventDefault();

				$("<label><input type='text' name='phone" + phoneNumCount + "' placeholder='Another phone'></label>").insertBefore($(this));

				phoneNumCount++;
			});

			$(".sign-up-form .add-another-fax-nubmer").on("click", function(event) {
				event.preventDefault();

				$("<label><input type='text' name='fax" + faxNumCount + "' placeholder='Another fax'></label>").insertBefore($(this));

				faxNumCount++;
			});

			$(".upload-user-photo").dropzone({
				url: "/file/post",
				paramName: "file", // The name that will be used to transfer the file
				maxFilesize: 2, // MB
				uploadMultiple: false,
				maxFiles: 1,
				dictDefaultMessage: "Drop Cover Here To Upload",
				accept: function (file, done) {
					if (file.name == "justinbieber.jpg") {
						done("Naha, you don't.");
					}
					else { done(); }
				},
				init: function () {
					this.on("maxfilesexceeded", function (file) {
						alert("No more files please!");
					});
				}
			});

			$(".upload-company-logo").dropzone({
				url: "/file/post",
				paramName: "file", // The name that will be used to transfer the file
				maxFilesize: 2, // MB
				uploadMultiple: false,
				maxFiles: 1,
				dictDefaultMessage: "Drop Cover Here To Upload",
				accept: function (file, done) {
					if (file.name == "justinbieber.jpg") {
						done("Naha, you don't.");
					}
					else { done(); }
				},
				init: function () {
					this.on("maxfilesexceeded", function (file) {
						alert("No more files please!");
					});
				}
			});

			$(".choose-relation").change(function() {
				if($(this).val() == "Other") {
					$("<label class='custom-relation'><input type='text' name='customRelation' placeholder='Your Relation' required></label>").insertAfter($(this).closest("label"));
				} else {
					if($(".custom-relation").length) {
						$(".custom-relation").remove();
					}
				}
			});
		} // sign-up-form

		if($(".add-company-form").length) {

			var phoneNumCount = 2;
			var faxNumCount = 2;

			$(".add-company-form .add-another-phone-nubmer").on("click", function(event) {
				event.preventDefault();

				$("<label><input type='text' name='phone" + phoneNumCount + "' placeholder='Company phone'></label>").insertBefore($(this));

				phoneNumCount++;
			});

			$(".add-company-form .add-another-fax-nubmer").on("click", function(event) {
				event.preventDefault();

				$("<label><input type='text' name='fax" + faxNumCount + "' placeholder='Company fax'></label>").insertBefore($(this));

				faxNumCount++;
			});
		} // Add-Company-Form
	});
	// Sign Up JS

	$(function () {
		if($(".sign-up-form, .add-company-form, .sign-in-form").length) {
			$(".sign-up-form").validate({
				errorElement: "span",
				rules: {
					email: {
						email: true
					},
					phone: {
						number: true
					},
					fax: {
						number: true
					},
					website: {
						url: true
					}
				},
				submitHandler: function(form) {
				}
			});

			$(".sign-in-form").validate({
				errorElement: "span",
				rules: {
					email: {
						email: true
					}
				},
				submitHandler: function(form) {
				}
			});

			$(".add-company-form").validate({
				errorElement: "span",
				rules: {
					email: {
						email: true
					},
					phone: {
						number: true
					},
					fax: {
						number: true
					},
					website: {
						url: true
					}
				},
				submitHandler: function(form) {
				}
			});
		}
	});
	// Validate Forms
});

function openMagnificPopup(element, checker) {

    var source,
        hasEffect;

    // console.log(element);

    if (checker === true) {
        // console.log("link");
        source = element.attr('href');
        hasEffect = true;
    } else {
        // console.log("not alink");
        source = element;
        hasEffect = false;
    }

    $.magnificPopup.open({
        items: {
            src: source
        },
        type: 'inline',
        preloader: false,
        focus: '#name',

        removalDelay: 500, //delay removal by X to allow out-animation

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
			open: function() {
				if(!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
					$('html').css('margin-right', 17);
				} else {
					$('html').css('margin-right', 0);
				}
			},
			close: function() {
				$('html').css('padding-right', 0);
			},
            beforeOpen: function() {

                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }

                if (hasEffect) {
                    this.st.mainClass = element.attr('data-effect');
                }
            }
        },

        midClick: true // allow opening popup on middle mouse click. Always set
    });
}
//openMagnificPopup


// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	event.stopPropagation();
	
	if (!event.target.matches(".language-dropdown .dropdown-button")) {

		var dropdownContent = $(".language-dropdown .dropdown-content");
		var i;

		for (i = 0; i < dropdownContent.length; i++) {
			var openDropdown = dropdownContent[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}

	if (!event.target.matches(".user-dropdown .dropdown-button")) {

		var dropdownContent = $(".user-dropdown .dropdown-content");
		var i;

		for (i = 0; i < dropdownContent.length; i++) {
			var openDropdown = dropdownContent[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}

$( window ).load(function() {
	(function() {
		if ($(".members-filter").length) {

			// init Isotope
			var $membersGrid = $('.members-list').isotope({
				itemSelector: '.members-list > li',
				layoutMode: 'fitRows'
			});

			$('.members-list > li').matchHeight();

			// filter with selects and checkboxes
			var $checkboxes = $('.members-filter input');

			$checkboxes.change(function () {
				// map input values to an array
				var inclusives = [];
				// inclusive filters from checkboxes
				$checkboxes.each(function (i, elem) {
					// if checkbox, use value if checked
					if (elem.checked) {
						inclusives.push(elem.value);
					}
				});

				// combine inclusive filters
				var filterValue = inclusives.length ? inclusives.join(', ') : '*';

				$membersGrid.isotope({
					filter: filterValue
				});
			});
		}
	})();
	//Members filter

	(function() {
		if ($(".companies-filter").length) {

			// init Isotope
			var $companiesGrid = $('.companies-list').isotope({
				itemSelector: '.companies-list > li',
				layoutMode: 'fitRows'
			});

			$('.companies-list > li').matchHeight();

			// filter with selects and checkboxes
			var $checkboxes = $('.companies-filter input');

			$checkboxes.change(function () {
				// map input values to an array
				var inclusives = [];
				// inclusive filters from checkboxes
				$checkboxes.each(function (i, elem) {
					// if checkbox, use value if checked
					if (elem.checked) {
						inclusives.push(elem.value);
					}
				});

				// combine inclusive filters
				var filterValue = inclusives.length ? inclusives.join(', ') : '*';

				$companiesGrid.isotope({
					filter: filterValue
				});
			});
		}
	})();
	//Companies filter

	(function() {
		if ($(".forum-filter").length) {

			// init Isotope
			var $discussionsGrid = $('.discussions-list').isotope({
				itemSelector: '.discussions-list > li',
				layoutMode: 'vertical'
			});

			// filter with selects and checkboxes
			var $checkboxes = $('.forum-filter input');

			$checkboxes.change(function () {
				// map input values to an array
				var inclusives = [];
				// inclusive filters from checkboxes
				$checkboxes.each(function (i, elem) {
					// if checkbox, use value if checked
					if (elem.checked) {
						inclusives.push(elem.value);
					}
				});

				// combine inclusive filters
				var filterValue = inclusives.length ? inclusives.join(', ') : '*';

				$discussionsGrid.isotope({
					filter: filterValue
				});
			});
		}
	})();
	//Forum filter

	(function() {
		if ($(".publications-filter").length) {

			// init Isotope
			var $publicationsGrid = $('.publications-list').isotope({
				itemSelector: '.publications-list > li',
				layoutMode: 'vertical'
			});

			// filter with selects and checkboxes
			var $checkboxes = $('.publications-filter input');

			$checkboxes.change(function () {
				// map input values to an array
				var inclusives = [];
				// inclusive filters from checkboxes
				$checkboxes.each(function (i, elem) {
					// if checkbox, use value if checked
					if (elem.checked) {
						inclusives.push(elem.value);
					}
				});

				// combine inclusive filters
				var filterValue = inclusives.length ? inclusives.join(', ') : '*';

				$publicationsGrid.isotope({
					filter: filterValue
				});
			});
		}
	})();
	//Publications filter

	(function() {
		if ($(".newsfeed-filter").length) {

			// init Isotope
			var $newsfeedGrid = $('.newsfeed-page main').isotope({
				itemSelector: '.newsfeed-page main > section',
				layoutMode: 'vertical'
			});

			// filter with selects and checkboxes
			var $checkboxes = $('.newsfeed-filter input');

			$checkboxes.change(function () {
				// map input values to an array
				var inclusives = [];
				// inclusive filters from checkboxes
				$checkboxes.each(function (i, elem) {
					// if checkbox, use value if checked
					if (elem.checked) {
						inclusives.push(elem.value);
					}
				});

				// combine inclusive filters
				var filterValue = inclusives.length ? inclusives.join(', ') : '*';

				$newsfeedGrid.isotope({
					filter: filterValue
				});
			});
		}
	})();
	//Newsfeed filter
});