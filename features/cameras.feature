Feature: Index cameras
  In order to display cameras
  As an admin
  I want to be able to access admin section and index cameras

  Scenario: Index camers
    Given I am logged in as admin
    When I am on cameras section
    Then I should see all cameras