function findMaxEachLevel(root) {
    const queue = [root];

    const maxes = [];

    root.level = 0;

    while (queue.length > 0) {
        const curr = queue.shift();

        if (maxes[curr.level]) {
            maxes[curr.level] = Math.max(curr.value, maxes[curr.level]);
        } else {
            maxes.push(curr.value);
        }

        if (curr.left) {
            curr.left.level = curr.level + 1;
            queue.push(curr.left);
        }
        if (curr.right) {
            curr.right.level = curr.level + 1;
            queue.push(curr.right);
        }
    }

    return maxes;
  }

