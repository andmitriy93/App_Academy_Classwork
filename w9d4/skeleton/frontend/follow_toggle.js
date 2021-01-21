// const Twitter = require('./twitter.js')

class FollowToggle {
    constructor(el) {
        this.userId = $(el).data("user-id");
        this.followState = $(el).data("initial-follow-state");
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
            debugger
            e.preventDefault();
            $.ajax({
                method: 'POST',
                url: '/user/:id/follow',
                dataType: 'JSON',
                success: function() {},
                // failure: function() {}
            })
        })
    }


}


module.exports = FollowToggle;