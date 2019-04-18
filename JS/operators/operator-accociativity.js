w = x - y - z;
// is the same as
w = ((x - y) - z);

// yet
x = ~-y;
w = x = y = z;
q = a?b:c?d:e?f:g
// are the same as
x =~(-y); w = (x = (y = z)); q =
a?b:(c?d:(e?f:g));
// becauseunart assignment and ternary conditional operators have right to left associativity
const name = "Byron";
const age = 25;
let hello = `watup bitch ma name iz ${name} and im ${age}`;
