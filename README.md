# README



#Table

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false |
|name|string|null: false|
|email|string|null: false|

# Association
- has_many :users_groups
- has_many :groups, through: :users_groups
- has_many :messages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false |
|name|string|null: false|

# Association
- has_many :users_groups
- has_many :users, through: :users_groups
- has_many :messages


## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|reference|null: false, index: true, unique: true, foreign_key: true |
|group_id|reference|null: false, index: true, unique: true, foreign_key: true|

# Association
- belongs_to :user
- belongs_to :group


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false |
|text|text||
|img|string||
|users_id|reference|null: false, index: true, unique: true, foreign_key: true|
|groups_id|reference|null: false, index: true, unique: true, foreign_key: true|

# Association
- belongs_to :user
- belongs_to :group
