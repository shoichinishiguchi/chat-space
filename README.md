# README



#Table

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|email|string|null: false|

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false|
|group_id|integer|null: false|

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|text|text||
|img|string||
|users_groups_id|integer|null: false|






# Association
## usersテーブル
- has_many :users_groups
- has_many :groups, through: :users_groups
  has_many :messages

## groupsテーブル
- has_many :users_groups
- has_many :users, through: :users_groups
  has_many :messages

## users_groupsテーブル
- belongs_to :user
  belongs_to :group

## messagesテーブル
- belongs_to :users_groups
