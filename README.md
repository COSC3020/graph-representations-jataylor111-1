# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

-----------------------------------------------------------------------------------------------

The runtime complexity should be $O(V^2)$ because it is looking at the vertices and not the edges

First it enters a for loop that runs the length of the matrix which would be V time.

Then it enters a second for loop that also runs the length of the matrix, which is another V time.

so the final complexity is $O(V*V) = O(V^2)$


I used this link for building matrices in javascript so I could test it with specific matrices. (https://github.com/bradtraversy/traversy-js-challenges/blob/main/08-binary-trees-graphs/11-adjacency-matrix-adjacency-list/readme.md)

I was getting a weird error with my program and Ali was a good help in figuring out just what was wrong, the fixes are marked in the code

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
