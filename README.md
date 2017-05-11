# Step 1: Global variables
- global scope pollution
- maintain correct order of scripts

# Step 2: IIFE
+ reduce global scope pollution

# Step 3: Revealing module pattern
+ reveal only public methods
+ only the module name is a global variable
- still need to maintain correct order of scripts

# Step 4: CommonJS
+ Module format used by NodeJS
+ can be used in the browsers using tools like browserify and webpack
- needs a build step

# Step 5: AMD
- more verbose / less elegant than commonjs  

# Step 6: AMD with requireJS
+ no need for a build step
- only supports AMD

# Step 7: Dynamic script loading
+ Edge case only supported by RequireJS and SystemJS

# Step 8: SystemJS
+ can support multiple module formats

# Step 9: ES6 Modules
+ less verbose than AMD
+ does not need a build step
+ is an ecmascript standard 
