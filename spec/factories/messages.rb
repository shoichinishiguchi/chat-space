FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/uploads/message/image/2019-03-31 23.43.20.png")}
    user
    group
  end
end
