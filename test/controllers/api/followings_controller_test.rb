require 'test_helper'

class Api::FollowingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_followings_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_followings_destroy_url
    assert_response :success
  end

end
