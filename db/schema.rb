# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_12_02_175618) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "ages", force: :cascade do |t|
    t.integer "age"
    t.string "image_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ages_gifts", id: false, force: :cascade do |t|
    t.bigint "gift_id", null: false
    t.bigint "age_id", null: false
  end

  create_table "gifts", force: :cascade do |t|
    t.string "name"
    t.string "image_url"
    t.string "amazon_url"
    t.boolean "for_girls"
    t.boolean "for_boys"
    t.string "price_range"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "email"
    t.string "string"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
