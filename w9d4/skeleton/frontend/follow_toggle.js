// const Twitter = require('./twitter.js')

class FollowToggle {
    constructor($el) {
        this.userId = $el.data("user-id");
        this.followState = $el.data("initial-follow-state");

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
            $.ajax({
                method: 'POST',
                url: '/user/:id/follow',
                dataType: 'JSON',
                success: function() {}
            })
        })
    }


}
const user1 = new FollowToggle($el);

module.exports = FollowToggle;