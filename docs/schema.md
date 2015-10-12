# Schema Information

## stories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

## storytaggings 
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
story_id    | integer   | not null, foreign key (references stories), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## usertaggings (users can  subscribe to tags)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

##bookmarks
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
story_id     | string    | not null, foreign key (references stories), indexed

##recommendations
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
story_id     | string    | not null, foreign key (references stories), indexed

## comments
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id      | integer   | not null, foreign key (references users), indexed
story_id     | string    | not null, foreign key (references stories), indexed
body         | string    | not null

##followings
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
followed_id  | integer   | not null, foreign key (references users), indexed
follower_id  | integer   | not null, foreign key (references users), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
