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