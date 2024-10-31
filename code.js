function convertToAdjList(adjMatrix) {
    // For an empty matrix
    if(adjMatrix == []) {
        // console.log("Reached Empty\n" );
        return ;
    }

    // Initialize the new Adjacency List, Ali suggested the use of var instead of let
    var list = [];

    // First loop for the length (rows)
    for (let i = 0; i < adjMatrix.length; i++) { // Loop iterates through the number of Vertices
        list[i] = [];
        // Second loop for the columns, adjMatrix[i].length goes down the length of the row
        for(let j = 0; j < adjMatrix.length; j++) { // Another loop through the Vertices
            if(adjMatrix[i][j] > 0) { // Make sure that there is an edge by checking if it's weight is > 0
                                      // I had gotten stuck with some weird behavior and Ali mentioned how I was missing 
                                      // a check that there was an edge to begin with
                // Push the current value in the row and col into the list
                list[i].push(j);
            }
        }
    }

    return list;
}

// let mat = [[0,6,11],
//            [3,0,4],
//            [8,12,0]];
// let mat = []
// console.log(convertToAdjList(mat)); 
// console.log(mat[0][2]);
// console.log(mat.length);
