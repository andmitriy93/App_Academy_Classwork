/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

// const Twitter = require('./twitter.js')

class FollowToggle {
    constructor($el) {
        this.userId = $($el).data("user-id");
        this.followState = $($el).data("initial-follow-state");
        // debugger
        this.render();
        this.handleClick();
    }

    render() {
        if (this.followState === 'unfollowed') {
          console.log("Follow!");
        } else if (this.followState === 'followed') {
          console.log("Unfollow!");
        }
    } 

    handleClick() {
        $(".follow-toggle").on('click', e => {
            e.preventDefault();
            // $el.on('click', e => {
            //     $(e.target).toggleClass('unfollowed');
            // })
            debugger 
            if (this.followState === 'followed'){ 
                return  $.ajax({
                    method: 'POST',
                    url: '/users/:id/follow',
                    dataType: 'JSON',
                    success: function() {
                        $el.on('click', e => {
                            $(e.target).toggleClass('unfollowed');

                        })
                    }
                    // failure: function() {}
                    
                    // $bucketList.on('click', 'li', (e) => { // on bucketlist put click listener on only li elements
                    //     $(e.target).toggleClass('complete') // toggles complete class
                    // })
                });
                
            } else {
                return $.ajax({
                    method: 'DELETE',
                    url: '/users/:id/follow',
                    // data:  ????
                    dataType: 'JSON',
                    success: function () {
                        console.log('hello!')

                        // $('.toggle-class').html($el);
                        // re-render ??
                        // console.log(e)
                    },
                    
                })
            }
        });
    }


}


module.exports = FollowToggle;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js")


    $( () => {
        // debugger
        $('.follow-toggle').each(function(index, el) {
            new FollowToggle(el);
    
        })
    })





// <% if current_user.follows?(user) %>
//   <form action="<%= user_follow_url(user) %>" method="post">
//     <input
//         type="hidden"
//         name="authenticity_token"
//         value="<%= form_authenticity_token %>">
//     <input type="hidden" name="_method" value="delete">
//     <input type="submit" value="Unfollow">
//   </form>
// <% else %>
//   <form action="<%= user_follow_url(user) %>" method="post">
//     <input
//         type="hidden"
//         name="authenticity_token"
//         value="<%= form_authenticity_token %>">
//     <input type="submit" value="Follow">
//   </form>
// <% end %></input>
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map