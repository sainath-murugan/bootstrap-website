let points = [ // An array with 2 elements.
    {
        x: 0,
        y: 0
    }, // Each element is an object.
    {
        x: 1,
        y: 1
    }
    ];

points.dist =  function() { // Define a method to compute
       
        let p1 = this[0]; // First element of array we're
    
        let p2 = this[1]; // Second element of the "this"
        
        let a = p2.x - p1.x; // Difference in x coordinates
        let b = p2.y - p1.y; // Difference in y coordinates
        return Math.sqrt(a * a + // The Pythagorean theorem
            b * b); // Math.sqrt() computes the square
        
    };
console.log(points.dist()) // => Math.sqrt(2): distance
