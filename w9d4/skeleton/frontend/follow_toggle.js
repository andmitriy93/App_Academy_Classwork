const Twitter = require('./twitter.js')

class FollowToggle {
    constructor($el) {
        this.userId = $el.data("user-id");
        this.followState = $el.data("initial-follow-state");

        render();
    }

}
const user1 = new FollowToggle($el);

module.exports = FollowToggle;