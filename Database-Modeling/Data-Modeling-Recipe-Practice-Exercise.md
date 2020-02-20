# Data Modeling Part 1: Single Tables- Recipe Pair Exercise

Pair exercise from [Techtonica's data modeling topic outline](https://github.com/Techtonica/curriculum/blob/master/databases/data-modeling-1.md#independent-practice).

### Exercise 1:

##### Imagine you are creating a website to organize your personal recipe collection. You want to be able to:

- See the ```recipe name``` and ```description```
- Filter by vegetarian or non-vegetarian recipes
- Sort by ```date``` added to your collection
- Filter by which ```meal``` of the day the recipe is for
- Track how many ```times``` you've made each recipe
- Find out which ```friend``` gave you this recipe (if any)

##### Make a data model for this app, and answer the following questions:

- What is the entity?

  - Recipe

- What are the attributes of the entity?

  - Recipe name
  - Recipe description
  - Vegetarian 
  - Date added
  - Meal of the day
  - Number of times prepared
  - ~~Friend~~ Homie who gave the recommendation

- What is the primary key of the entity?

  - Recipe ID

- What are the data types of the attributes?

  - Recipe name (text)
  - Recipe description (text)
  - Vegetarian (boolean)
  - Date added (date/datetime)
  - Meal of the day (text)
  - Number of times prepared (number/integer)
  - Friend who gave recommendation (text)

- Are there other ways you might model this data?

  - Friend- split first and last name into separate attributes OR creating a separate entity for friends and assigning friend ID for that primary key

  - Meal can be a separate entity 

    

### Exercise 2:

Definitions:

- Entity
  - This is the table (usually represents a person, thing, or event)
- Attribute
  - These are the columns that a table will have. They are the details about an entity.
- Data type
  - Type of the input for respective attribute. Examples include:
    - Boolean
    - Integer
    - Float
    - Text (equivalent to String in JS)
    - Varchar (equivalent to String in JS, but limited to a certain number of characters)
    - Date/Datetime
- Primary key
  - A unique identifier for a given row in our table. It points to a specific instance of our entity. 
- Schema
  - It is the blueprint of how a database is constructed and how entities relate to each other.



##### Example:

![Example table](/Users/tpl619_2/Library/Application Support/typora-user-images/image-20200220115433918.png)