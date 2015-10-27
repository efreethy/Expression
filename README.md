# Expression

[Heroku link][heroku]

[heroku]: http://serene-dawn-1315.herokuapp.com/

## Minimum Viable Product

Expression is a web application inspired by Medium built using Ruby on Rails
and React.js. Expression allows users to:


- [x] Create an account
- [x] Log in / Log out
- [x] Create, Read, Recommend stories
- [x] Tag Stories with multiple tags
- [x] Follow both Users and Tags

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Authentication and fleshing out core models: User / Story / Tag (1.5 days)

Phase one begins with setting up a basic user authentication system. This includes standard .html.erb views
for both sign in and sign up. The User / Story association should be established. A tag model will be created. Both the Story and Tag models should support a JSON api.

[Details][phase-one]

### Phase 2: React Router and Flux (2.5 days)

Phase two is concerned with setting up the React Router and Flux pattern within my application. This
means establishing the initial component hierarchy that the rest of the application will build off of. By the
end of this phase I should have a functioning routers that matches paths for the LandingPage and  UserPage  component-views. There should be a bare-bones functioning navbar for login / logout.

[Details][phase-two]

### Phase 3: StoryForm  Component / UserPage (1.5 day)
The landing page will feature a story form that will allow the user to publish stories (no tags yet). Users should be able to see a list of stories they have written via an option in the navbar.


[Details][phase-three]

### Phase 4: UserTagging / StoryTagging (2 days)

This phase is concerned with creating a feature for users to tag the stories they create, and also
follow tags of the topics that they enjoy. These will be used in drawing from a users tag subscriptions, and also in
generating their initial feed.

[Details][phase-four]

### Phase 5: Followings (1 day)

The goal of phase five is to implement a feature for users to follow other users. This means creating a Followings model, and adding follow-buttons to the user show page.
[Details][phase-five]

### Phase 6: Recommendations (1 day)

The Recommendations feature is much like 'favoriting' or 'liking' a post.  Users shoud be able to recommend stories that they enjoy, and this will appear in a recommendations list on their page. This list will appear in the UserPage's StoryFeed.

[Details][phase-six]

### Phase 7: Responses and SearchBar (1 day)

This phase is concerned with including a responses (comments) feature into the application - enabling users to provide feedback on stories.
[Details][phase-seven]

### Bonus Features (TBD)
- [ ] User Statistics
- [ ] Publications
- [ ] Bookmarks


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
