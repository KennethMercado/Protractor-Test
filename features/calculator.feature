@Feature1
Feature: This is my calcultor
    This will test the calculator functionality.

    @Test1
    Scenario: Add two numbers
        This will open a site before test begins.
        Given Open the calcultor site
        When I add two numbers "1" and "2"
        Then the output is "3"


    @Test2
    Scenario: Add two numbers
        Given Open the calcultor site
        When I add two numbers "5" and "2"
        Then the output is "8"
