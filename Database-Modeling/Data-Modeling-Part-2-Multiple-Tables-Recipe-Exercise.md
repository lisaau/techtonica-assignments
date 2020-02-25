# Data Modeling Part 2: Multiple Tables- Recipe Exercise

#### Exercise 1

Imagine you are creating a food website that will have recipes by top chefs from around the world. The following data will be required:

- recipe name
- number of ingredients
- ingredients
- difficulty level
- cook time
- chef (who wrote the recipe)
- country (where the chef lives)
- city (where the chef lives)
- restaurants where the chef has worked
- chef's favorite ingredient

Answer the following questions:

- What are the entities?
  - recipe, chef, restaurants, ingredients
- What are the attributes of each entity?
  - recipe
    - recipeID
    - recipe name
    - number of ingredients 
    - difficulty level
    - cook time
    - chefID
  - ingredients
    - ingredientID
    - ingredient name
  - chef
    - chefID
    - name
    - country of residence
    - city of residence
    - favorite ingredient
  - restaurants
    - restaurantID
    - restaurant name
- What are the data types of the attributes?
  - recipe
    - recipeID (integer)
    - recipe name (text)
    - number of ingredients (integer)
    - difficulty level (text)
    - cook time in minutes (integer)
    - chefID (integer)
  - ingredients
    - ingredientID (integer)
    - ingredient name (text)
  - chef
    - chefID (integer)
    - name (text)
    - country of residence (text)
    - city of residence (text)
    - favorite ingredient (text)
  - restaurants
    - restaurantID (integer)
    - restaurant name (text)
- What are the relationships between the entities?
  - chef - recipe (one to many)
  - recipe - ingredients (many to many)
  - chef - restaurants (many to many)
- Draw a diagram of your data model.

![image-20200224141253105](/Users/tpl619_2/Library/Application Support/typora-user-images/image-20200224141253105.png)

- Is your data model normalized? Why or why not? If not, can you change it to be normalized?
- Are there other ways you might model this data?

#### Exercise 2

- Select one of your most-used or favorite websites to click through.
- Pick one type of user flow, like buying an item.
- List the data that is required for this flow.
- Organize the data into entities and attributes of each entity.
- Draw a diagram of your data model.

#### Exercise 3

1. In your own words, define the following term:

- **Foreign key**: column/columns that relate records back to the primary key of another table

2. What are the 3 types of database relationships? Briefly explain each one. For each one, come up with an example schema that uses the relationship.

 - **one to one**: refers to the relationship between two entities in which one element of the first table can only be linked to one element in the second table. An example is in a school database where a studentID is assigned to only one student in the students table and studentID is a foreign key in the contact info table.

   ![image-20200224133059653](/Users/tpl619_2/Library/Application Support/typora-user-images/image-20200224133059653.png)

 - **one to many**: one record in a table can be associated with one or more records in another table. An example would be that a customer can have many sales orders. The primary key field in the Customers table, Customer ID, is designed to contain unique values. The foreign key field in the Orders table, Customer ID, is designed to allow multiple instances of the same value.

   ![image-20200224133314598](/Users/tpl619_2/Library/Application Support/typora-user-images/image-20200224133314598.png)

	- **many to many**:  occurs when multiple records in a table are associated with multiple records in another table. For example, a many-to-many relationship exists between customers and products: customers can purchase various products, and products can be purchased by many customers.

![image-20200224133531474](/Users/tpl619_2/Library/Application Support/typora-user-images/image-20200224133531474.png)