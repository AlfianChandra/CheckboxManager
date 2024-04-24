(function($) {
	$.fn.CBCreate = function(cbMenu,callback) {
		// Generate HTML structure
		this.each(function() {
			var $container = $(this);
			var html = `
                <div class="cb-wrap">
                    <input type="checkbox" class="checkall cb-all">
                    <div class="cb-options"></div>
                </div>
            `;
			$container.append(html);
			let el = $(".cb-wrap").children("div");
			Object.keys(cbMenu).forEach(function (key) {
				let icon = cbMenu[key].icon;
				let title = cbMenu[key].title;
				let neg = cbMenu[key].negative;
				if(neg)
				{
					el.append("<a href='javascript:;' style='color:red;' title='"+title+"' data-action='"+key+"' class='cb-opt-item "+key+"'><i class='"+icon+"'></i></a>")
				}
				else {
					el.append("<a href='javascript:;' title='"+title+"' data-action='"+key+"' class='cb-opt-item "+key+"'><i class='"+icon+"'></i></a>")
				}
			});
			$(document).on("click",".cb-opt-item",function () {
				let element = $(this);
				let action = $(this).attr("data-action");
				let result = {
					element:element,
					action:action
				}
				callback(result);
			});
		});

		// Function to toggle context menu
		$(document).on("click", ".cb-opencontext", function() {
			$(".cb-context").toggleClass("cb-context-show");
		});

		// Function to handle change event on "Check All" checkbox
		$(document).on("change", ".cb-all", function() {
			if (!$(this).prop("checked")) {
				$(".cb-options").css("display", "none");
				$(".cb-wrap").css("width", "fit-content");
			} else {
				$(".cb-options").css("display", "flex");
				$(".cb-wrap").css("width", "100%");
			}
		});

		// Return the jQuery object for chaining
		return this;
	};

	$.fn.CBOnChecked = function (callback) {
		$(document).on("change",".cb-all",function () {
			if($(this).prop("checked"))
			{
				callback();
			}
		});
	};

	$.fn.CBOnUnchecked = function (callback) {
		$(document).on("change",".cb-all",function () {
			if(!$(this).prop("checked"))
			{
				callback();
			}
		});
	};

	$.fn.CBSetCheck = function (trigger = false) {
		if(trigger)
		{
			$(".cb-all").prop("checked",true).trigger("change");
		}
		else {
			$(".cb-all").prop("checked",true);
		}
	}

	$.fn.CBSetUncheck = function (trigger = false) {
		if(trigger)
		{
			$(".cb-all").prop("checked",false).trigger("change");
		}
		else {
			$(".cb-all").prop("checked",false);
		}
	}

	$.fn.CBOpenOptions = function () {
		$(".cb-options").css("display", "flex");
		$(".cb-wrap").css("width", "100%");
	}

	$.fn.CBCloseOptions = function () {
		$(".cb-options").css("display", "none");
		$(".cb-wrap").css("width", "fit-content");
	}
})(jQuery);
