# Week 24 asssessment, what to expect.

- Understand what user role and permissions are and what the difference in responbilities are.
- Sequelize model scopes
- Understanding of git branches, know how basic github workflow looks like (things like creating/switching branches and merging them)
- Hashing, salting, rainbow table attacks.
- Know the difference between encryption, encoding, and hashing.
- Kanban


## Hashing (but with the salt)

### What is the salt?

- A RANDOM string of characters inserted into the plaintext password, can be inserted before, in the middle or after the plaintext password.

### Why do we need a salt?

- If two users have the exact same password, and no salt is used in the hashing process, this means that the hash result will be the exact same!
- Hashing passwords without a salt makes them very vulnerable to a rainbow table attack!


