# Phase 4: UserTagging / StoryTagging (2 days)

## Rails
### Models
Usertagging, Storytagging

### Controllers
* Api::UserTaggingsController (create, destroy, index, show, update)
* Api::StoryTaggingsController (create, destroy, index, show

### Views

## Flux
### Views (React Components)
* StoryFeed
* TagsIndex

### Stores
UserTaggingStore, StoryTaggingStore

### Actions
* ApiActions.receiveUserTaggings
* ApiActions.receiveSingleUserTagging
* ApiActions.deleteUserTagging

### ApiUtil
* ApiUtil.fetchAllUserTaggings
* ApiUtil.fetchSingleUserTagging
* ApiUtil.createUserTagging
* ApiUtil.destroyUserTagging


* ApiUtil.fetchAllStoryTaggings
* ApiUtil.fetchSingleStoryTagging
* ApiUtil.createStoryTagging
* ApiUtil.destroyStoryTagging

## Gems/Libraries
