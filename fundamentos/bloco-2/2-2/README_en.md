# Git and Github

I learned the main git commands and how to use github together.

## commands:

### Clone a remote repository to your PC.

```sh
git clone <repository-url>
```

### Update the local repository with the branches that are on the remote without modifying the local files.

```sh
git fetch
```

### Lists all branches in your local repository.

```sh
git branch
```

### Create a new branch from the current branch and switch to it.

```sh
git checkout -b <branch-name>
```

### Switch from the current branch to another branch by specifying the name. Can switch between branches.

```sh
git checkout <branch-name>
```

### Provides information about the branch and modified files.

```sh
git status
```

### Create a message specifying the changes made and update the version history.

```sh
git commit -m "msg"
```

### Includes file changes in the next commit.

```sh
# add all modified files
git add .
# add a specified file
git add <file>
```

### Push and save your local branch to the remote repository

```sh
git push
```

### Updates and brings modifications from the remote repository to the local repository.

```sh
git pull
```
