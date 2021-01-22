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
        this.$el = $($el);
        this.userId = this.$el.data("user-id");
        this.followState = this.$el.data("initial-follow-state");
        // debugger
        this.render();

        this.$el.on('click', this.handleClick.bind(this));
    }

    render() {
        if (this.followState === 'unfollowed') {
          this.$el.text("Follow!");
        } else if (this.followState === 'followed') {
        this.$el.text("Unfollow!");
        }
    } 

    handleClick(e) {
        e.preventDefault();

        debugger 
        if (this.followState === 'unfollowed'){ 
            $.ajax({
                method: 'POST',
                url: `/users/${this.userId}/follow`,
                dataType: 'JSON',
                success: () => {
                    // this.followState.bind(this) 
                    this.followState = 'followed';
                    this.render();
                }
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