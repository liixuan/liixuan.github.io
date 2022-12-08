/**
 * Functionality specific to Bushwick.
 *
 * Provides helper functions to enhance the theme experience.
 */

// 回到顶部
	jQuery.noConflict();
	jQuery(function(){
		jQuery(function () {
			//当点击跳转链接后，回到页面顶部位置
			jQuery(".go-top").click(function(){
				jQuery('body,html').animate({scrollTop:0},500);
				return false;
			});
		});
	}); 

// 顶栏固定
(function() {
	window.addEventListener("scroll", function (e) {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(t)
		if (t < 80) {
			document.getElementById("site-navigation").classList.remove("nav-fixed");
		}
		else {
			document.getElementById("site-navigation").classList.add("nav-fixed");
		}
	});
})();

// 顶栏固定
(function() {
	window.addEventListener("scroll", function (e) {
		var t = document.documentElement.scrollTop || document.body.scrollTop;
		console.log(t)
		if (t < 200) {
			document.getElementById("taxonomy-nav").classList.remove("taxonomy-nav-fixed");
		}
		else {
			document.getElementById("taxonomy-nav").classList.add("taxonomy-nav-fixed");
		}
	});
})();

// 页面百分比
(function() {
	window.onscroll = percent;// 执行函数
	function percent() {
		let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
			b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
			result = Math.round(a / b * 100), // 计算百分比
			up = document.querySelector("#go-button"), // 获取按钮
			down = document.querySelector("#go-down"); // 获取按钮
		if (result <= 95) {
			up.childNodes[0].style.display = 'none'
			up.childNodes[1].style.display = down.style.display = 'block'
			up.childNodes[1].innerHTML = result;
		} else {
			up.childNodes[1].style.display = down.style.display = 'none'
			up.childNodes[0].style.display = 'block'
		}
	}
})();

//夜间模式
(function(){
		if(document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") === ''){
			if(new Date().getHours() > 20 || new Date().getHours() < 6){
				document.body.classList.add('night');
				document.cookie = "night=1;path=/";
				console.log('夜间模式开启');
			}else{
				document.body.classList.remove('night');
				document.cookie = "night=0;path=/";
				console.log('夜间模式关闭');
			}
		}else{
			var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
			if(night == '0'){
				document.body.classList.remove('night');
			}else if(night == '1'){
				document.body.classList.add('night');
			}
		}
})();

//夜间模式切换
	function switchNightMode(){
		var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
		if(night == '0'){
			document.body.classList.add('night');
			document.cookie = "night=1;path=/"
			console.log('夜间模式开启');
		}else{
			document.body.classList.remove('night');
			document.cookie = "night=0;path=/"
			console.log('夜间模式关闭');
		}
	}

//全屏切换
(function(){
        //全屏 
        var viewFullScreen = document.getElementById("view-fullscreen");
        if (viewFullScreen) {
            viewFullScreen.addEventListener("click", function () {
                var docElm = document.documentElement;
                if (docElm.requestFullscreen) {//W3C
                    docElm.requestFullscreen();
                } else if (docElm.msRequestFullscreen) {//FireFox 
                    docElm = document.body; //overwrite the element (for IE)
                    docElm.msRequestFullscreen();
                } else if (docElm.mozRequestFullScreen) {//Chrome等
                    docElm.mozRequestFullScreen();
                } else if (docElm.webkitRequestFullScreen) {//IE11
                    docElm.webkitRequestFullScreen();
                }
            }, false);
        }
        //退出全屏 
        var cancelFullScreen = document.getElementById("cancel-fullscreen");
        if (cancelFullScreen) {
            cancelFullScreen.addEventListener("click", function () {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                }
            }, false);
        }
        // 事件监听
        var fullscreenState = document.getElementById("fullscreen-state");
        if (fullscreenState) {
            document.addEventListener("fullscreenchange", function () {
                fullscreenState.innerHTML = (document.fullscreenElement) ? "是" : "不是 ";
            }, false);
            document.addEventListener("msfullscreenchange", function () {
                fullscreenState.innerHTML = (document.msFullscreenElement) ? "是" : "不是 ";
            }, false);
            document.addEventListener("mozfullscreenchange", function () {
                fullscreenState.innerHTML = (document.mozFullScreen) ? "是" : "不是 ";
            }, false);
            document.addEventListener("webkitfullscreenchange", function () {
                fullscreenState.innerHTML = (document.webkitIsFullScreen) ? "是" : "不是 ";
            }, false);
        }
})();