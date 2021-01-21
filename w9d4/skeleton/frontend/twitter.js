const FollowToggle = require('./follow_toggle.js')


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