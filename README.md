# README

## membersテーブル

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

## members_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|member_id|integer|null: false|
|group_id|integer|null: false|

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|text|text||
|img|string||
|members_groups_id|integer|null: false|






### Association
## membersテーブル
- has_many :members_groups
- has_many :groups, through: :members_groups
  has_many :messages

## groupsテーブル
- has_many :members_groups
- has_many :members, through: :members_groups
  has_many :messages

## members_groupsテーブル
- belongs_to :member
  belongs_to :group

## messagesテーブル
- belongs_to :members_groups
