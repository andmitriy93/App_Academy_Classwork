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