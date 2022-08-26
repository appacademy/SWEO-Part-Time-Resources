# BONUS Practice: Benchmark and Add Index

In this practice, you will be using Sequelize's benchmarking functionality
to analyze the efficiency of the provided query. You will then try to make the
query more efficient by adding an index.

Examine the `GET /reviews` route handler. This route handler displays all of the
reviews in the `Reviews` table, while also allowing you to filter reviews by a
specific reviewer. For example, you can add query parameters to filter results
by a reviewer's `firstName` and/or `lastName`.

Navigate to `/reviews?firstName=Daisy&lastName=Herzog` to get all of the reviews
written by "Daisy Herzog".

Benchmark the original query, and examine the executed SQL commands. Then try to
add an index to increase the efficiency of the query. Compare the new benchmark
time to the original baseline.

If the index has caused Sequelize to adjust the executed SQL commands and the
benchmark time has improved, then keep the index. However, if the index has not
changed the executed SQL commands or the benchmark time has not improved, then
drop the index.