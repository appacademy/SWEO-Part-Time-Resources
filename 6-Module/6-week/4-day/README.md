# Git Workflow

When a team member completes their feature and merges it into 'dev', the other team members do not necessarily need to stop their work and update their branches immediately. However, they should be aware that 'dev' has been updated.

The general rule of thumb is to update (merge or rebase from 'dev') their feature branches in the following scenarios:

1. **Before they start working on their feature for the day**: If there have been any changes to 'dev' since the last time they worked on their feature, they should update their branch. This ensures that they're always working with the most recent version of the code.

2. **Before they create a pull request**: Before they merge their feature into 'dev', they should ensure that their branch is up-to-date with 'dev'. This can help to minimize merge conflicts.

Regarding how to update their branch, there are two common methods: merging and rebasing.

**Merging** is the process of taking the contents of 'dev' and combining it with their feature branch. This will create a new "merge commit" in their feature branch.

**Rebasing** is the process of moving or combining a sequence of commits to a new base commit. Essentially, it's like saying "I want to base my changes on what is in 'dev', incorporating the changes that have been made since I started working on my feature".

The choice between merging and rebasing depends on the team's preferences. Some teams prefer the commit history of merging, while others prefer the linear commit history created by rebasing.

Remember, it's not necessary to update every single time a change is made to 'dev'. The goal is to minimize the complexity of integrating your feature branch with 'dev', and to ensure that your feature works with the current state of 'dev' when it's time to merge. Frequent communication within the team is key to managing these updates efficiently.



# Merging vs Rebasing:

When you **merge** two branches, Git will tie together your histories with a new commit. The commit has two parents, preserving the chronological order of the commits.

For example, let's assume you have the following commits on your 'dev' and 'feature' branches:

- `dev`: A -> B -> C -> D
- `feature`: A -> B -> E -> F

If you merge 'dev' into 'feature', you would get:

- `feature`: A -> B -> E -> F -> M (Merge commit, with 'F' and 'D' as parents)

The history of both branches is preserved, and you can clearly see when the merge happened.

On the other hand, **rebasing** takes all the changes that were committed on one branch and applies them onto another branch. In essence, you're changing the base of your branch from one commit to another, making it appear as if you'd created your branch from a different commit.

Using the same example, if you rebase 'feature' onto 'dev', you would get:

- `feature`: A -> B -> C -> D -> E' -> F'

Here, E' and F' are new commits with the same changes as E and F, but based on 'D'. Notice that the history appears linear. It's as if you checked out 'dev' at 'D' and made commits 'E' and 'F' on top of it.

In short, **merge** preserves the exact historical record and keeps the context of the branch, whereas **rebase** makes the history more streamlined and linear but alters the commit history.

**Fetching vs Pulling:**

`git fetch` and `git pull` are both used to update your local repository with changes from the remote repository.

- **`git fetch`** updates your local repository with the latest commits from the remote repository, but it does not integrate any of these new commits into your local branches. After fetching, you would manually merge the fetched commits into your branch using `git merge`.

- **`git pull`** is essentially a two-step process that includes `git fetch` and `git merge`. It updates your local repository with the latest commits and automatically attempts to merge these new commits into your current working branch.

In summary, **fetch** allows you more control to review changes before merging them, whereas **pull** is more convenient when you know you want to immediately incorporate the changes from the remote branch into your current working branch.


# Fetch vs Pull

Fetching is particularly useful when you want to see what's been updated in the remote repository before integrating these changes into your local branch. It gives you an opportunity to examine and test the changes before affecting your own work.

**Example 1: Code Review and Testing**

Suppose your teammate has made some changes in the `dev` branch that you're also working on, and you want to examine those changes before merging them into your local `dev` branch. You can fetch the remote changes, compare differences, run tests to ensure nothing is broken, and then decide to merge the changes:

```bash
git fetch origin
git diff dev origin/dev
```
The `git diff dev origin/dev` command will show you what changes have been made in the remote `dev` branch compared to your local `dev` branch. If everything looks good, you can merge those changes:

```bash
git merge origin/dev
```

**Example 2: Working with Multiple Branches**

If you're working with multiple branches and you want to get the updates for all branches without affecting your current working branch, you could use `git fetch`.

```bash
git fetch origin
```
This command will fetch all updates from the remote repository, but it won't modify your working directory. This can be useful if you're in the middle of some work on your branch and don't want to switch contexts yet or deal with potential merge conflicts.

On the other hand, `git pull` is handy when you know that the remote changes won't affect your current work negatively, and you want to incorporate those updates immediately:

```bash
git pull origin dev
```

This command will fetch the updates from the remote `dev` branch and immediately merge them into your local `dev` branch (assuming you're currently checked out to `dev`). This is useful when you're sure that the remote changes are necessary for your current work and you want to integrate those changes right away.

# Ready to Merge your feature branch into dev?

Here are some steps:

1. **Pull Latest Changes from `dev`**: Before pushing new changes, always make sure to have the most recent version of `dev`. This reduces the likelihood of conflicts.

    ```bash
    git checkout dev
    git pull origin dev
    ```

2. **Merge Feature Branch into `dev`**: Next, merge your feature branch into `dev`.

    ```bash
    git merge feature_branch
    ```

3. **Test**: It's very important to thoroughly test the code after merging, to ensure that the merge didn't break anything.

4. **Commit and Push**: If everything is working as expected, you can commit (if there were any new changes made) and then push to `dev`.

    ```bash
    git add .
    git commit -m "merged feature_branch into dev"
    git push origin dev
    ```

The `git push origin dev` command is used to push the local `dev` branch, which now includes the changes from the feature branch, to the remote `dev` branch on the origin server.

# Git Push Origin Dev vs Git Push

The commands `git push` and `git push origin dev` are similar, but they operate a little differently based on the current branch and the remote branch being pushed:

1. **`git push`**: Without specifying a remote or branch, this command will push the commits from your currently checked out branch to the corresponding branch on the remote repository that's been set as the "upstream" branch. If there isn't an upstream branch set, or if the current local branch does not have a corresponding branch in the remote repository, Git will throw an error.

2. **`git push origin dev`**: This command specifically pushes the commits from your local `dev` branch to the `dev` branch on the `origin` remote repository. This command is explicit about where the commits are being pushed to, regardless of the currently checked out branch.

If you are currently working on the `dev` branch and want to push your commits to the remote `dev` branch, you can use either command. However, if you are currently on another branch (say, `feature_branch`), you'd need to either switch to the `dev` branch and then use `git push`, or use `git push origin dev` directly. It's can be good to practice being explicit about which branch you're pushing to, which helps prevent potential mistakes.


# Merging Dev with Main

Here's a simple workflow you can follow when you're ready to push your `dev` branch to the `main` branch:

At this point, the feature has been successfully merged into `dev`. Depending on your workflow, features might be merged into `main` immediately, or you might gather several features in `dev` and merge them all to `main` at once (often referred to as a "release").

Before pushing to `main`, it's good practice to have additional checks:

1. **Pull `dev` to `main`**: First, ensure `main` is up to date with `dev`. This should be done locally. Handle any merge conflicts, test thoroughly.

    ```bash
    git checkout main
    git pull origin dev
    ```

2. **Test**: Perform final tests to ensure the code works as expected.

3. **Push `main` to `origin/main`**: If everything is okay, push the main branch to `origin/main`.

    ```bash
    git push origin main
    ```

Remember, `main` should always be deployable. It's often used as the branch that gets deployed to production, so thorough testing is essential before pushing to `main`. By following this workflow, you can help ensure that your are pushing code to `main` in a controlled and structured manner.
