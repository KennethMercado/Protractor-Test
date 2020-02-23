# The @Feature1 tag will run all the scenarios below.
@Feature1
Feature: Calculator - Using Scenario
    As a user
    I want to use a calculator to add numbers
    So that I don't need to add myself

    # The @Test1 tag can be use to run specific scenario.
    @Test1
    Scenario: Add two numbers -2 & 3
        Postive Test
        Given I have a calculator
        When I add -2 and 3
        Then the result should be 1

    @Test2
    Scenario: Add two numbers 10 & 15
        Negative Test
        Given I have a calculator
        When I add 10 and 15
        Then the result should be 26

# @Test3
# Scenario: Using Table as parameters. Reference: https://github.com/cucumber/cucumber-js/blob/master/features/data_tables.feature
#     Given the below values.
#         | FirstNumber | SecondNumber |
#         | 1           | 2            |
#         | 5           | 2            |
#     When the following operations is performed.
#         | Operation |
#         | Add       |
#         | Add       |
#     Then the answer is correct.
#         | Answer |
#         | 3      |
#         | 7      |