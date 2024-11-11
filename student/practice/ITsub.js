const subjects = {
  c: "C Programming",
  cpp: "C++ Programming",
  python: "Python",
  java: "Java",
};

let selectedSubject = "";
let questionsForCurrentQuiz = [];

const questions = {
  PPSUC: [
    {
      question: "Who is the father of C language?",
      answers: [
        { text: "Steve Jobs", correct: false },
        { text: "James Gosling", correct: false },
        { text: "Dennis Ritchie", correct: true },
        { text: "Rasmus Lerdorf", correct: false },
      ],
    },
    {
      question: "What is the primary purpose of the `main` function?",
      answers: [
        { text: "Define global variables", correct: false },
        { text: "Hold all code executed at runtime", correct: true },
        { text: "Act as end of code", correct: false },
        { text: "Print a welcome message", correct: false },
      ],
    },
    {
      question: "What data type stores whole numbers without decimals?",
      answers: [
        { text: "float", correct: false },
        { text: "char", correct: false },
        { text: "int", correct: true },
        { text: "double", correct: false },
      ],
    },
    {
      question: "What operator calculates the remainder after division?",
      answers: [
        { text: "/", correct: false },
        { text: "*", correct: false },
        { text: "%", correct: true },
        { text: "+", correct: false },
      ],
    },
    {
      question: "Which loop iterates based on a condition?",
      answers: [
        { text: "if statement", correct: false },
        { text: "for loop and while loop", correct: true },
        { text: "nested if", correct: false },
        { text: "switch statement", correct: false },
      ],
    },
    {
      question: "What is the correct syntax for declaring a variable of type integer?",
      answers: [
        { text: "int <variable_name>;", correct: true },
        { text: "integer <variable_name> = 0;", correct: false },
        { text: "var <variable_name> := 10;", correct: false },
        { text: "declare int <variable_name>;", correct: false },
      ],
    },
    {
      question: "What does the `printf` function do?",
      answers: [
        { text: "Reads input from the user", correct: false },
        { text: "Prints formatted output to the console", correct: true },
        { text: "Defines a new function", correct: false },
        { text: "Checks if a condition is true", correct: false },
      ],
    },
    {
      question: "What is the difference between `==` and `=` operators?",
      answers: [
        { text: "Both are the same for comparing values", correct: false },
        { text: "`=` assigns a value, `==` checks for equality", correct: true },
        { text: "`=` increments a value, `==` decrements", correct: false },
        { text: "`=` stores data, `==` calculates area", correct: false },
      ],
    },
    {
      question: "What is the use of the `#include` directive?",
      answers: [
        { text: "Adds comments to your code", correct: false },
        { text: "Includes standard libraries for functions", correct: true },
        { text: "Defines variables globally", correct: false },
        { text: "Prints a welcome message", correct: false },
      ],
    },
    {
      question: "What is a `pointer` in C?",
      answers: [
        { text: "A reference to a memory location", correct: true },
        { text: "A new data type for storing complex values", correct: false },
        { text: "A special keyword for loops", correct: false },
        { text: "A way to format output more precisely", correct: false },
      ],
    },
    {
      question: "How do you comment out a single line of code in C?",
      answers: [
        { text: "// Your comment here", correct: true },
        { text: "/* Your comment here */", correct: false },
        { text: "# Your comment here", correct: false },
        { text: "; Your comment here", correct: false },
      ],
    },
    {
      question: "What is the difference between pre-increment (++x) and post-increment (x++)?",
      answers: [
        { text: "No difference, both increment x by 1", correct: false },
        { text: "Pre-increment modifies x before use, post-increment after", correct: true },
        { text: "Pre-increment adds 2 to x, post-increment adds 1", correct: false },
        { text: "Pre-increment decrements, post-increment increments", correct: false },
      ],
    },
    {
      question: "What is the `break` statement used for?",
      answers: [
        { text: "Continues the loop iteration", correct: false },
        { text: "Exits the current loop immediately", correct: true },
        { text: "Skips to the next line of code", correct: false },
        { text: "Checks if a condition is true", correct: false },
      ],
    },
    {
      question: "What is the use of the `sizeof` operator?",
      answers: [
        { text: "Calculates the sum of two numbers", correct: false },
        { text: "Gets the remainder after division", correct: false },
        { text: "Returns the size of a variable in bytes", correct: true },
        { text: "Compares two strings for equality", correct: false },
      ],
    },
    {
      question: "What is a structure in C?",
      answers: [
        { text: "A sequence of characters", correct: false },
        { text: "A collection of variables of different types", correct: true },
        { text: "A loop that repeats until a condition is met", correct: false },
        { text: "A function that takes no arguments", correct: false },
      ],
    },
    {
      question: "What is the escape sequence for displaying a newline character?",
      answers: [
        { text: "\\n", correct: true },
        { text: "\\t", correct: false },
        { text: "\\\\", correct: false },
        { text: "\\\"", correct: false },
      ],
    },
    {
      question: "What is #include <stdio.h>?",
      answers: [
        { text: "Preprocessor directive", correct: true },
        { text: "Inclusion directive", correct: false },
        { text: "File inclusion directive", correct: false },
        { text: "None of the mentioned", correct: false },
      ],
    },
    {
      question: "The C-preprocessors are specified with _________ symbol?",
      answers: [
        { text: "#", correct: true },
        { text: "$", correct: false },
        { text: "*", correct: false },
        { text: "& ", correct: false },
      ],
    },
      {
        question: "What does the 'sizeof' operator in C return?",
        answers: [
          { text: "Memory address", correct: false },
          { text: "Size of variable in bytes", correct: true },
          { text: "Data type", correct: false },
          { text: "Length of a string", correct: false },
        ],
      },
      {
        question: "Which of the following is not a valid C data type?",
        answers: [
          { text: "int", correct: false },
          { text: "float", correct: false },
          { text: "boolean", correct: true },
          { text: "char", correct: false },
        ],
      },
      {
        question: "In C, what is the result of the expression '5 + 3 * 2'?",
        answers: [
          { text: "16", correct: false },
          { text: "11", correct: true },
          { text: "26", correct: false },
          { text: "13", correct: false },
        ],
      },
      {
        question: "What is the purpose of the 'break' statement in a switch statement?",
        answers: [
          { text: "Terminate the program", correct: false },
          { text: "Skip the current iteration of a loop", correct: false },
          { text: "Exit the switch statement", correct: true },
          { text: "Print a message to the console", correct: false },
        ],
      },
      {
        question: "Which function is used to allocate memory in C?",
        answers: [
          { text: "calloc", correct: true },
          { text: "malloc", correct: false },
          { text: "free", correct: false },
          { text: "realloc", correct: false },
        ],
      },
      {
        question: "What is the output of the following code snippet? \n\n```c\n#include <stdio.h>\nint main() { printf(\"%d\", sizeof(char)); return 0; }```",
        answers: [
          { text: "1", correct: true },
          { text: "2", correct: false },
          { text: "4", correct: false },
          { text: "8", correct: false },
        ],
      },
      {
        question: "What is the correct way to declare a pointer variable in C?",
        answers: [
          { text: "int *ptr;", correct: true },
          { text: "pointer ptr;", correct: false },
          { text: "ptr *int;", correct: false },
          { text: "int ptr;", correct: false },
        ],
      },
      {
        question: "What is the purpose of the 'typedef' keyword in C?",
        answers: [
          { text: "Declare a new variable", correct: false },
          { text: "Define a new data type", correct: true },
          { text: "Allocate memory", correct: false },
          { text: "Initialize a variable", correct: false },
        ],
      },
      {
        question: "In C, what is the significance of the 'volatile' keyword?",
        answers: [
          { text: "Make a variable read-only", correct: false },
          { text: "Indicate a constant value", correct: false },
          { text: "Prevent optimization by the compiler", correct: true },
          { text: "Specify a variable as a constant", correct: false },
        ],
      },
      {
        question: "Which header file is needed for using functions like 'printf' and 'scanf' in C?",
        answers: [
          { text: " stdlib.h ", correct: false },
          { text: " string.h ", correct: false },
          { text: " stdio.h ", correct: true },
          { text: " math.h ", correct: false },
        ],
      },
      {
        question: "What is the correct syntax for a 'for' loop in C?",
        answers: [
          { text: "for (i = 0; i < 10; i++)", correct: true },
          { text: "for i = 0; i < 10; i++", correct: false },
          { text: "for (int i = 0; i < 10)", correct: false },
          { text: "for (i < 10; i++)", correct: false },
        ],
      },
      {
        question: "Which of the following is a valid way to comment out multiple lines in C?",
        answers: [
          { text: "// This is a comment", correct: false },
          { text: "# This is a comment", correct: false },
          { text: "/* This is a comment */", correct: true },
          { text: "' This is a comment", correct: false },
        ],
      },
      {
        question: "What will be the output of the following code snippet? \n\n```c\nint x = 5;\nint y = x++;\nprintf(\"%d\", y);```",
        answers: [
          { text: "5", correct: false },
          { text: "6", correct: true },
          { text: "4", correct: false },
          { text: "10", correct: false },
        ],
      },
      {
        question: "Which function is used to compare two strings in C?",
        answers: [
          { text: "strcat", correct: false },
          { text: "strcmp", correct: true },
          { text: "strlen", correct: false },
          { text: "strcpy", correct: false },
        ],
      },
      {
        question: "What is the purpose of the 'continue' statement in a loop?",
        answers: [
          { text: "Exit the loop", correct: false },
          { text: "Skip the rest of the code in the loop and move to the next iteration", correct: true },
          { text: "Restart the loop from the beginning", correct: false },
          { text: "Print a message to the console", correct: false },
        ],
      },
      {
        question: "Which operator is used to access the value at the address stored in a pointer in C?",
        answers: [
          { text: "->", correct: false },
          { text: "*", correct: true },
          { text: "&", correct: false },
          { text: ">>", correct: false },
        ],
      },
      {
        question: "What is the output of the following code snippet? \n\n```c\nint arr[5] = {1, 2, 3, 4, 5};\nprintf(\"%d\", arr[3]);```",
        answers: [
          { text: "1", correct: false },
          { text: "2", correct: false },
          { text: "4", correct: true },
          { text: "5", correct: false },
        ],
      },
      {
        question: "Which function is used to open a file in C for writing?",
        answers: [
          { text: "fopen", correct: true },
          { text: "fclose", correct: false },
          { text: "fread", correct: false },
          { text: "fwrite", correct: false },
        ],
      },
      {
        question: "What is the purpose of the 'static' keyword in C?",
        answers: [
          { text: "Allocate memory dynamically", correct: false },
          { text: "Specify a constant value", correct: false },
          { text: "Limit the scope of a variable to the current file", correct: true },
          { text: "Make a variable read-only", correct: false },
        ],
      },
      {
        question: "In C, how do you initialize a character array with a string?",
        answers: [
          { text: "char arr[] = {'H', 'e', 'l', 'l', 'o'};", correct: false },
          { text: "char arr[] = \"Hello\";", correct: true },
          { text: "char arr[5] = \"Hello\";", correct: false },
          { text: "char arr[6] = {'H', 'e', 'l', 'l', 'o'};", correct: false },
        ],
      },
      {
        question: "What is the purpose of the 'const' keyword in C?",
        answers: [
          { text: "Declare a constant variable", correct: true },
          { text: "Define a constant value", correct: false },
          { text: "Allocate constant memory", correct: false },
          { text: "Make a variable read-only", correct: false },
        ],
      },
      {
        question: "Which header file is required for dynamic memory allocation in C?",
        answers: [
          { text: " stdlib.h ", correct: true },
          { text: " string.h ", correct: false },
          { text: " include.h ", correct: false },
          { text: " math.h ", correct: false },
        ],
      },
      {
        question: "What is the correct syntax for a switch statement in C?",
        answers: [
          { text: " switch { case 1: break; } ", correct: false },
          { text: " switch (1) { case 1: break; } ", correct: true },
          { text: " switch (1) { break; case 1: } ", correct: false },
          { text: " switch (case 1) { break; } ", correct: false },
        ],
      },
      {
        question: "What will be the output of the following code snippet? \n\n```c\nint x = 10;\nint *ptr = &x;\nprintf(\"%d\", *ptr);```",
        answers: [
          { text: "10", correct: true },
          { text: "0", correct: false },
          { text: "Error", correct: false },
          { text: "Address of x", correct: false },
        ],
      },
      {
        question: "Which of the following is a bitwise left shift operator in C?",
        answers: [
          { text: "<<<", correct: false },
          { text: ">>", correct: false },
          { text: "<<", correct: true },
          { text: "&", correct: false },
        ],
      },
      {
        question: "What is the purpose of the 'do-while' loop in C?",
        answers: [
          { text: "Repeat a block of code while a condition is true", correct: false },
          { text: "Execute a block of code at least once, and then repeat it while a condition is true", correct: true },
          { text: "Skip the rest of the loop and move to the next iteration", correct: false },
          { text: "Terminate the loop", correct: false },
        ],
      },
      {
        question: "Which function is used to read a character from the standard input in C?",
        answers: [
          { text: "gets", correct: false },
          { text: "getchar", correct: true },
          { text: "scanf", correct: false },
          { text: "read", correct: false },
        ],
      },
      {
        question: "What is the purpose of the 'union' in C?",
        answers: [
          { text: "Combine multiple variables into a single variable", correct: false },
          { text: "Define a new data type", correct: false },
          { text: "Store different data types in the same memory location", correct: true },
          { text: "Allocate memory for an array", correct: false },
        ],
      },
      {
        question: "What is the purpose of the 'strncpy' function in C?",
        answers: [
          { text: "Concatenate two strings", correct: false },
          { text: "Copy a specified number of characters from one string to another", correct: true },
          { text: "Compare two strings", correct: false },
          { text: "Calculate the length of a string", correct: false },
        ],
      },
      {
        question: "Which of the following is true about the 'goto' statement in C?",
        answers: [
          { text: "It is always recommended to use 'goto' in C programming", correct: false },
          { text: "It can be used to create infinite loops", correct: true },
          { text: "'goto' should be used for all control flow operations", correct: false },
          { text: "It is not supported in C", correct: false },
        ],
      },
      {
        question: "What does the 'volatile' keyword indicate in the context of a variable in C?",
        answers: [
          { text: "The variable is a constant", correct: false },
          { text: "The variable is read-only", correct: false },
          { text: "The variable may be modified externally, so it should not be optimized by the compiler", correct: true },
          { text: "The variable is a pointer", correct: false },
        ],
      },
      {
        question: "What is the purpose of the 'fwrite' function in C?",
        answers: [
          { text: "Read data from a file", correct: false },
          { text: "Write data to a file", correct: true },
          { text: "Allocate memory for a file", correct: false },
          { text: "Close a file", correct: false },
        ],
      },
      {
        question: "Which of the following is not a valid variable name in C?",
        answers: [
          {"text": "myVar", "correct": false},
          {"text": "123Var", "correct": true},
          {"text": "_var", "correct": false},
          {"text": "Var123", "correct": false}
        ]
      },
      {
        question: "What is the output of the following code snippet? \n\n```c\nint x = 5;\nprintf(\"%f\", x);```",
        answers: [
          {"text": "5.0", "correct": true},
          {"text": "5", "correct": false},
          {"text": "Error", "correct": false},
          {"text": "0", "correct": false}
        ]
      },
      {
        question: "In C, what is the purpose of the 'const' pointer?",
        answers: [
          {"text": "Pointer to a constant variable", "correct": true},
          {"text": "Constant pointer", "correct": false},
          {"text": "Pointer with a constant value", "correct": false},
          {"text": "Constant pointer to a constant variable", "correct": false}
        ]
      },
      {
        question: "Which of the following is used to represent a single-line comment in C?",
        answers: [
          {"text": "//", "correct": true},
          {"text": "/*", "correct": false},
          {"text": "#", "correct": false},
          {"text": "--", "correct": false}
        ]
      },
      {
        question: "What does the 'sizeof' operator return for the 'double' data type?",
        answers: [
          {"text": "2", "correct": false},
          {"text": "4", "correct": false},
          {"text": "8", "correct": true},
          {"text": "16", "correct": false}
        ]
      },
      {
        question: "In C, what is the purpose of the 'fgets' function?",
        answers: [
          {"text": "Read a single character from the console", "correct": false},
          {"text": "Read a line of text from a file", "correct": true},
          {"text": "Write a line of text to the console", "correct": false},
          {"text": "Write a character to a file", "correct": false}
        ]
      },
      {
        question: "What is the output of the following code snippet? \n\n```c\nint i = 10;\nwhile (i > 0) { printf(\"%d \", i--); }```",
        answers: [
          {"text": "10 9 8 7 6 5 4 3 2 1", "correct": true},
          {"text": "1 2 3 4 5 6 7 8 9 10", "correct": false},
          {"text": "0 1 2 3 4 5 6 7 8 9", "correct": false},
          {"text": "Error", "correct": false}
        ]
      },
      {
        question: "What is the purpose of the 'rand' function in C?",
        answers: [
          {"text": "Generate a random number", "correct": true},
          {"text": "Round a floating-point number", "correct": false},
          {"text": "Read a number from the console", "correct": false},
          {"text": "Compute the remainder of a division", "correct": false}
        ]
      },
      {
        question: "Which of the following is a correct syntax for a structure declaration in C?",
        answers: [
          {"text": "struct MyStruct { int x; float y; };", "correct": true},
          {"text": "structure MyStruct { int x; float y; };", "correct": false},
          {"text": "MyStruct { int x; float y; };", "correct": false},
          {"text": "struct { int x; float y; } MyStruct;", "correct": false}
        ]
      },
      {
        question: "What is the purpose of the 'calloc' function in C?",
        answers: [
          {"text": "Allocate memory for a variable", "correct": false},
          {"text": "Allocate and zero-initialize memory for multiple variables", "correct": true},
          {"text": "Free allocated memory", "correct": false},
          {"text": "Reallocate memory", "correct": false}
        ]
      },
      {
        question: "What is the output of the following code snippet? \n\n```c\nint a = 5, b = 2;\nprintf(\"%d\", a / b);```",
        answers: [
          {"text": "2", "correct": true},
          {"text": "2.5", "correct": false},
          {"text": "2.0", "correct": false},
          {"text": "Error", "correct": false}
        ]
      },
      {
        question: "In C, what is the purpose of the 'strcmp' function?",
        answers: [
          {"text": "Concatenate two strings", "correct": false},
          {"text": "Compare two strings", "correct": true},
          {"text": "Copy a string", "correct": false},
          {"text": "Find the length of a string", "correct": false}
        ]
      },
      {
        question: "What is the correct syntax for defining a macro in C?",
        answers: [
          {"text": "#define MY_MACRO 10", "correct": true},
          {"text": "macro MY_MACRO { 10 }", "correct": false},
          {"text": "macro MY_MACRO = 10", "correct": false},
          {"text": "define MY_MACRO 10", "correct": false}
        ]
      },
      {
        question: "What does the 'break' statement do in a loop in C?",
        answers: [
          {"text": "Ends the loop and transfers control to the next iteration", "correct": false},
          {"text": "Ends the loop and transfers control to the statement following the loop", "correct": true},
          {"text": "Skips the current iteration and continues with the next one", "correct": false},
          {"text": "Terminates the program", "correct": false}
        ]
      },
      {
        "question": "Which of the following is used to define a constant in C?",
        "answers": [
          {"text": "const", "correct": true},
          {"text": "constant", "correct": false},
          {"text": "define", "correct": false},
          {"text": "const int", "correct": false}
        ]
      },
      {
        "question": "What is the output of the following code snippet? \n\n```c\nint x = 3, y = 7;\nprintf(\"%d\", x++ + ++y);```",
        "answers": [
          {"text": "11", "correct": true},
          {"text": "12", "correct": false},
          {"text": "10", "correct": false},
          {"text": "13", "correct": false}
        ]
      },
      {
        "question": "What does the 'const' qualifier mean in the context of function parameters in C?",
        "answers": [
          {"text": "The function cannot modify the parameter value", "correct": true},
          {"text": "The function must return a constant value", "correct": false},
          {"text": "The function is constant and cannot be modified", "correct": false},
          {"text": "The function takes a constant parameter", "correct": false}
        ]
      },
      {
        "question": "Which of the following is a bitwise XOR operator in C?",
        "answers": [
          {"text": "&", "correct": false},
          {"text": "|", "correct": false},
          {"text": "^", "correct": true},
          {"text": "~", "correct": false}
        ]
      },
      {
        "question": "What is the purpose of the 'const' keyword in a pointer declaration in C?",
        "answers": [
          {"text": "Indicate a constant memory address", "correct": false},
          {"text": "Declare a constant pointer", "correct": true},
          {"text": "Allocate constant memory", "correct": false},
          {"text": "Make the pointer read-only", "correct": false}
        ]
      },
      {
        "question": "What is the output of the following code snippet? \n\n```c\nint arr[] = {1, 2, 3, 4, 5};\nprintf(\"%d\", arr[5]);```",
        "answers": [
          {"text": "1", "correct": false},
          {"text": "2", "correct": false},
          {"text": "Undefined behavior", "correct": true},
          {"text": "Error", "correct": false}
        ]
      },
      {
        "question": "In C, what is the role of the 'enum' keyword?",
        "answers": [
          {"text": "Declare a constant variable", "correct": false},
          {"text": "Define a new data type with a set of named integer constants", "correct": true},
          {"text": "Allocate memory for an array", "correct": false},
          {"text": "Specify a constant value", "correct": false}
        ]
      },
      {
        "question": "What is the purpose of the 'strcat' function in C?",
        "answers": [
          {"text": "Copy a string", "correct": false},
          {"text": "Compare two strings", "correct": false},
          {"text": "Concatenate two strings", "correct": true},
          {"text": "Find the length of a string", "correct": false}
        ]
      },
      {
        "question": "Which of the following is used to include a header file in C?",
        "answers": [
          {"text": "#include", "correct": true},
          {"text": "#define", "correct": false},
          {"text": "#import", "correct": false},
          {"text": "#ifdef", "correct": false}
        ]
      },
      {
        "question": "What is the purpose of the 'union' in C?",
        "answers": [
          {"text": "Combine multiple variables into a single variable", "correct": false},
          {"text": "Define a new data type", "correct": false},
          {"text": "Store different data types in the same memory location", "correct": true},
          {"text": "Allocate memory for an array", "correct": false}
        ]
      },
      {
        "question": "What is the correct syntax for a function declaration in C?",
        "answers": [
          {"text": "int functionName();", "correct": true},
          {"text": "functionName() int;", "correct": false},
          {"text": "functionName(int);", "correct": false},
          {"text": "int functionName(int);", "correct": false}
        ]
      },
      {
        "question": "What does the 'exit' function do in C?",
        "answers": [
          {"text": "Terminate the program and return a value to the operating system", "correct": true},
          {"text": "Close a file", "correct": false},
          {"text": "End the current loop iteration", "correct": false},
          {"text": "Print a message to the console", "correct": false}
        ]
      },
      {
        "question": "What is the output of the following code snippet? \n\n```c\nint x = 10;\nint *ptr = &x;\nprintf(\"%p\", ptr);```",
        "answers": [
          {"text": "10", "correct": false},
          {"text": "0", "correct": false},
          {"text": "The memory address of x", "correct": true},
          {"text": "Error", "correct": false}
        ]
      },
      {
        "question": "In C, what is the purpose of the 'do-while' loop?",
        "answers": [
          {"text": "Repeat a block of code while a condition is true", "correct": false},
          {"text": "Execute a block of code at least once, and then repeat it while a condition is true", "correct": true},
          {"text": "Skip the rest of the loop and move to the next iteration", "correct": false},
          {"text": "Terminate the loop", "correct": false}
        ]
      },
      {
        "question": "What is the purpose of the 'getchar' function in C?",
        "answers": [
          {"text": "Get the character code of a key press", "correct": false},
          {"text": "Get a character from the standard input", "correct": true},
          {"text": "Get the character at a specific position in a string", "correct": false},
          {"text": "Get the next character from a file", "correct": false}
        ]
      },
      {
        "question": "What is the purpose of the 'malloc' function in C?",
        "answers": [
          {"text": "Free allocated memory", "correct": false},
          {"text": "Allocate memory for a variable", "correct": true},
          {"text": "Reallocate memory", "correct": false},
          {"text": "Copy a string", "correct": false}
        ]
      },
    
    // Add more questions for C Programming
  ],
  OOPTCPP: [
    {
      "question": "Who is known as the father of C++ programming language?",
      "answers": [
        {"text": "Steve Jobs", "correct": false},
        {"text": "Bjarne Stroustrup", "correct": true},
        {"text": "Dennis Ritchie", "correct": false},
        {"text": "Rasmus Lerdorf", "correct": false}
      ]
    }, 
    {
      "question": "What is the correct syntax for declaring a class in C++?",
      "answers": [
        {"text": "class MyClass;", "correct": true},
        {"text": "MyClass = class();", "correct": false},
        {"text": "new class MyClass;", "correct": false},
        {"text": "declare class MyClass;", "correct": false}
      ]
    },
    {
      "question": "Which of the following operators is used to allocate memory for an object in C++?",
      "answers": [
        {"text": "malloc", "correct": false},
        {"text": "alloc", "correct": false},
        {"text": "new", "correct": true},
        {"text": "allocate", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() { cout << \"Hello, World!\"; return 0; }```",
      "answers": [
        {"text": "Hello, World!", "correct": true},
        {"text": "0", "correct": false},
        {"text": "Error", "correct": false},
        {"text": "1", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the keyword used to inherit the properties of a base class into a derived class?",
      "answers": [
        {"text": "extend", "correct": false},
        {"text": "inherits", "correct": false},
        {"text": "derives", "correct": false},
        {"text": "public", "correct": true}
      ]
    },
    {
      "question": "What is the purpose of the 'virtual' keyword in C++?",
      "answers": [
        {"text": "Define a variable", "correct": false},
        {"text": "Allocate memory dynamically", "correct": false},
        {"text": "Declare a pure virtual function", "correct": false},
        {"text": "Enable dynamic polymorphism by allowing function overriding", "correct": true}
      ]
    },
    {
      "question": "Which header file is needed to use the 'cin' and 'cout' objects in C++?",
      "answers": [
        {"text": "<iomanip>", "correct": false},
        {"text": "<cstdlib>", "correct": false},
        {"text": "<iostream>", "correct": true},
        {"text": "<fstream>", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'friend' keyword?",
      "answers": [
        {"text": "Declare a function outside a class", "correct": false},
        {"text": "Allow a function or class to access private and protected members of another class", "correct": true},
        {"text": "Create a friend class", "correct": false},
        {"text": "Define a friend function", "correct": false}
      ]
    },
    {
      "question": "What is the correct way to declare a constant variable in C++?",
      "answers": [
        {"text": "const int x = 5;", "correct": true},
        {"text": "constant int x = 5;", "correct": false},
        {"text": "int constant x = 5;", "correct": false},
        {"text": "int x constant = 5;", "correct": false}
      ]
    },
    {
      "question": "Which of the following is true about the 'this' pointer in C++?",
      "answers": [
        {"text": "It points to the base class object", "correct": false},
        {"text": "It points to the derived class object", "correct": false},
        {"text": "It points to the current object being operated upon", "correct": true},
        {"text": "It points to the global object", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of the 'const' keyword in a member function declaration in C++?",
      "answers": [
        {"text": "Declare a constant variable", "correct": false},
        {"text": "Indicate that the function is constant and cannot modify the object", "correct": true},
        {"text": "Specify a constant value", "correct": false},
        {"text": "Make the function read-only", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\nint x = 5;\nint& ref = x;\nref = 10;\nstd::cout << x;```",
      "answers": [
        {"text": "5", "correct": false},
        {"text": "10", "correct": true},
        {"text": "Error", "correct": false},
        {"text": "15", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'typeid' operator?",
      "answers": [
        {"text": "Determine the type of a variable", "correct": true},
        {"text": "Define a new data type", "correct": false},
        {"text": "Allocate memory for an array", "correct": false},
        {"text": "Find the length of a string", "correct": false}
      ]
    },
    {
      "question": "What is the correct syntax for a conditional statement in C++?",
      "answers": [
        {"text": "if (condition) { // code }", "correct": true},
        {"text": "condition ? // code : ;", "correct": false},
        {"text": "switch (condition) { // code }", "correct": false},
        {"text": "while (condition) { // code }", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of the 'explicit' keyword in C++?",
      "answers": [
        {"text": "Specify a constant value", "correct": false},
        {"text": "Make a function read-only", "correct": false},
        {"text": "Prevent implicit type conversions for a constructor", "correct": true},
        {"text": "Define an explicit constructor", "correct": false}
      ]
    },
    {
      "question": "Which of the following correctly defines a template function in C++?",
      "answers": [
        {"text": "template <typename T> void myFunction(T parameter) { // code }", "correct": true},
        {"text": "void template myFunction(T parameter) { // code }", "correct": false},
        {"text": "void myFunction<T>(T parameter) { // code }", "correct": false},
        {"text": "template void myFunction(T parameter) { // code }", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the role of the 'try', 'catch', and 'throw' keywords?",
      "answers": [
        {"text": "Define a block of code", "correct": false},
        {"text": "Handle exceptions in a program", "correct": true},
        {"text": "Declare a new variable", "correct": false},
        {"text": "Create a custom exception", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of the 'static' keyword in the context of a member variable in C++?",
      "answers": [
        {"text": "Specify a constant value", "correct": false},
        {"text": "Allocate memory dynamically", "correct": false},
        {"text": "Make the variable read-only", "correct": false},
        {"text": "Ensure only one copy of the variable is shared among all instances of the class", "correct": true}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\nint arr[] = {1, 2, 3, 4, 5};\nstd::cout << arr[2];```",
      "answers": [
        {"text": "3", "correct": true},
        {"text": "4", "correct": false},
        {"text": "2", "correct": false},
        {"text": "Error", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'auto' keyword?",
      "answers": [
        {"text": "Define a constant variable", "correct": false},
        {"text": "Declare a variable with automatic storage duration", "correct": true},
        {"text": "Allocate memory for an array", "correct": false},
        {"text": "Create an automatic constructor", "correct": false}
      ]
    },
    {
      "question": "What is the correct way to declare and initialize a string variable in C++?",
      "answers": [
        {"text": "string str = 'Hello';", "correct": false},
        {"text": "string str = \"Hello\";", "correct": true},
        {"text": "str Hello = string;", "correct": false},
        {"text": "char str[] = \"Hello\";", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'override' specifier in a derived class?",
      "answers": [
        {"text": "Indicate that a function is explicitly defined in a derived class", "correct": true},
        {"text": "Override the base class constructor", "correct": false},
        {"text": "Override the base class destructor", "correct": false},
        {"text": "Specify a constant value", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\nclass MyClass {\npublic:\n  MyClass() { cout << \"Constructor\"; }\n};\n\nint main() {\n  MyClass obj;\n  return 0;\n}```",
      "answers": [
        {"text": "Constructor", "correct": true},
        {"text": "Destructor", "correct": false},
        {"text": "Error", "correct": false},
        {"text": "No output", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'const' qualifier in a member function?",
      "answers": [
        {"text": "Indicate a constant value", "correct": false},
        {"text": "Make the function read-only", "correct": true},
        {"text": "Declare a constant variable", "correct": false},
        {"text": "Allow modification of the object", "correct": false}
      ]
    },
    {
      "question": "What is the correct way to create an array of integers with size 5 in C++?",
      "answers": [
        {"text": "int arr[5];", "correct": true},
        {"text": "array<int, 5> arr;", "correct": false},
        {"text": "int arr{} = 5;", "correct": false},
        {"text": "arr<int> = 5;", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'typeid' operator?",
      "answers": [
        {"text": "Determine the type of a variable", "correct": true},
        {"text": "Define a new data type", "correct": false},
        {"text": "Allocate memory for an array", "correct": false},
        {"text": "Find the length of a string", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\n#include <iostream>\nusing namespace std;\nvoid printMessage() { cout << \"Hello, World!\"; }\nint main() { printMessage(); return 0; }```",
      "answers": [
        {"text": "Hello, World!", "correct": true},
        {"text": "0", "correct": false},
        {"text": "Error", "correct": false},
        {"text": "1", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'const' keyword in a member variable declaration?",
      "answers": [
        {"text": "Indicate a constant value", "correct": false},
        {"text": "Make the variable read-only", "correct": true},
        {"text": "Allocate constant memory", "correct": false},
        {"text": "Define a constant variable", "correct": false}
      ]
    },
    {
      "question": "What is the correct syntax for defining a template class in C++?",
      "answers": [
        {"text": "template <typename T> class MyClass { /* code */ };", "correct": true},
        {"text": "class template <typename T> MyClass { /* code */ };", "correct": false},
        {"text": "class MyClass template <typename T> { /* code */ };", "correct": false},
        {"text": "MyClass { template <typename T> /* code */ };", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'reinterpret_cast' operator?",
      "answers": [
        {"text": "Perform a dynamic cast", "correct": false},
        {"text": "Perform a static cast", "correct": false},
        {"text": "Perform a type-safe cast", "correct": false},
        {"text": "Perform a low-level cast between pointer types", "correct": true}
      ]
    },
    {
      "question": "What is the correct syntax for a lambda function in C++?",
      "answers": [
        {"text": "[ ] (parameters) -> return_type { /* code */ }", "correct": true},
        {"text": "{ [parameters] -> return_type /* code */ }", "correct": false},
        {"text": "[parameters] { -> return_type /* code */ }", "correct": false},
        {"text": "{ [parameters] return_type /* code */ }", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'explicit' keyword in a constructor?",
      "answers": [
        {"text": "Declare an explicit constructor", "correct": true},
        {"text": "Define a constant constructor", "correct": false},
        {"text": "Prevent implicit type conversions for a constructor", "correct": false},
        {"text": "Specify a constant value", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\nint x = 5, y = 2;\nstd::cout << x / y;```",
      "answers": [
        {"text": "2", "correct": true},
        {"text": "2.5", "correct": false},
        {"text": "2.0", "correct": false},
        {"text": "Error", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'emplace_back' function in a vector?",
      "answers": [
        {"text": "Insert an element at the beginning of the vector", "correct": false},
        {"text": "Insert an element at a specific position in the vector", "correct": false},
        {"text": "Insert a new element at the end of the vector without unnecessary copies", "correct": true},
        {"text": "Remove the last element from the vector", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of the 'const_cast' operator in C++?",
      "answers": [
        {"text": "Perform a dynamic cast", "correct": false},
        {"text": "Perform a type-safe cast", "correct": false},
        {"text": "Remove the 'const' qualifier from a variable", "correct": true},
        {"text": "Perform a low-level cast between pointer types", "correct": false}
      ]
    },
    {
      "question": "What is the correct syntax for a copy constructor in C++?",
      "answers": [
        {"text": "MyClass(MyClass& obj) { /* code */ }", "correct": false},
        {"text": "MyClass(const MyClass& obj) { /* code */ }", "correct": true},
        {"text": "MyClass(MyClass obj) { /* code */ }", "correct": false},
        {"text": "MyClass(copy MyClass obj) { /* code */ }", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::move' function?",
      "answers": [
        {"text": "Move the entire content of an object to another object", "correct": true},
        {"text": "Move the object to the end of a container", "correct": false},
        {"text": "Move the object to a different memory location", "correct": false},
        {"text": "Move the object to the beginning of a container", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\nint arr[] = {1, 2, 3, 4, 5};\nstd::cout << arr[5];```",
      "answers": [
        {"text": "1", "correct": false},
        {"text": "2", "correct": false},
        {"text": "Undefined behavior", "correct": true},
        {"text": "Error", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::thread' class?",
      "answers": [
        {"text": "Define a new data type", "correct": false},
        {"text": "Create a new thread", "correct": true},
        {"text": "Allocate memory for an array", "correct": false},
        {"text": "Synchronize multiple threads", "correct": false}
      ]
    },
    {
      "question": "What is the correct syntax for defining a static member variable in a C++ class?",
      "answers": [
        {"text": "static int myVar;", "correct": true},
        {"text": "int static myVar;", "correct": false},
        {"text": "int myVar static;", "correct": false},
        {"text": "myVar static int;", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::vector' class?",
      "answers": [
        {"text": "Define a new data type", "correct": false},
        {"text": "Create a dynamic array", "correct": false},
        {"text": "Implement a resizable array or dynamic array", "correct": true},
        {"text": "Allocate memory for a vector", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() { cout << sizeof(int); return 0; }```",
      "answers": [
        {"text": "2", "correct": false},
        {"text": "4", "correct": true},
        {"text": "8", "correct": false},
        {"text": "16", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::unique_ptr' class?",
      "answers": [
        {"text": "Define a unique data type", "correct": false},
        {"text": "Create a unique pointer to dynamically allocated memory", "correct": true},
        {"text": "Implement a unique identifier", "correct": false},
        {"text": "Allocate memory for a unique variable", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of the 'inline' keyword in C++?",
      "answers": [
        {"text": "Declare a function", "correct": false},
        {"text": "Specify a constant value", "correct": false},
        {"text": "Allow the compiler to inline the function code", "correct": true},
        {"text": "Create an inline constructor", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of the 'std::map' class in C++?",
      "answers": [
        {"text": "Create a map of integers", "correct": false},
        {"text": "Define a new data type", "correct": false},
        {"text": "Implement an associative container with key-value pairs", "correct": true},
        {"text": "Allocate memory for a map", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\nint x = 5;\nint *ptr = &x;\nstd::cout << *ptr;```",
      "answers": [
        {"text": "5", "correct": true},
        {"text": "0", "correct": false},
        {"text": "The memory address of x", "correct": false},
        {"text": "Error", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'operator overloading'?",
      "answers": [
        {"text": "Define a new operator", "correct": false},
        {"text": "Overload existing operators to work with user-defined types", "correct": true},
        {"text": "Implement custom operators", "correct": false},
        {"text": "Create new operators for dynamic memory allocation", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of the 'std::set' class in C++?",
      "answers": [
        {"text": "Create a set of integers", "correct": false},
        {"text": "Define a new data type", "correct": false},
        {"text": "Implement an ordered container of unique elements", "correct": true},
        {"text": "Allocate memory for a set", "correct": false}
      ]
    },
    {
      "question": "What is the correct syntax for a range-based for loop in C++?",
      "answers": [
        {"text": "for (int i = 0; i < size; ++i) { /* code */ }", "correct": false},
        {"text": "for (auto i : container) { /* code */ }", "correct": true},
        {"text": "for (int i : array) { /* code */ }", "correct": false},
        {"text": "for (auto i = begin(container); i != end(container); ++i) { /* code */ }", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'static_cast' operator?",
      "answers": [
        {"text": "Perform a dynamic cast", "correct": false},
        {"text": "Perform a type-safe cast", "correct": false},
        {"text": "Perform a static cast between related types", "correct": true},
        {"text": "Perform a low-level cast between pointer types", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of the 'std::deque' class in C++?",
      "answers": [
        {"text": "Define a new data type", "correct": false},
        {"text": "Implement a double-ended queue", "correct": true},
        {"text": "Allocate memory for a deque", "correct": false},
        {"text": "Create a dynamic array", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() { cout << true << false; return 0; }```",
      "answers": [
        {"text": "truefalse", "correct": true},
        {"text": "1", "correct": false},
        {"text": "Error", "correct": false},
        {"text": "0", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::forward' function?",
      "answers": [
        {"text": "Move an object to a different memory location", "correct": false},
        {"text": "Forward an lvalue as an rvalue", "correct": true},
        {"text": "Forward an rvalue as an lvalue", "correct": false},
        {"text": "Forward a function call", "correct": false}
      ]
    },
    {
      "question": "What is the correct syntax for defining a destructor in C++?",
      "answers": [
        {"text": "~MyClass() { /* code */ }", "correct": true},
        {"text": "MyClass::~MyClass() { /* code */ }", "correct": false},
        {"text": "MyClass() ~ { /* code */ }", "correct": false},
        {"text": "void ~MyClass() { /* code */ }", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'decltype' keyword?",
      "answers": [
        {"text": "Declare a variable", "correct": false},
        {"text": "Define a constant variable", "correct": false},
        {"text": "Deduce the type of an expression at compile time", "correct": true},
        {"text": "Specify a constant value", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\n#include <iostream>\nusing namespace std;\nvoid myFunction(int x) { cout << x; }\nint main() { myFunction(); return 0; }```",
      "answers": [
        {"text": "0", "correct": true},
        {"text": "Error", "correct": false},
        {"text": "Undefined behavior", "correct": false},
        {"text": "No output", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::chrono' library?",
      "answers": [
        {"text": "Define a new data type", "correct": false},
        {"text": "Manipulate strings", "correct": false},
        {"text": "Perform date and time operations", "correct": true},
        {"text": "Allocate memory for a chrono variable", "correct": false}
      ]
    },
    {
      "question": "What is the correct syntax for a C++ lambda function capturing variables by reference?",
      "answers": [
        {"text": "[&](int x) -> int { /* code */ }", "correct": true},
        {"text": "[=](int x) -> int { /* code */ }", "correct": false},
        {"text": "[&](int x) { /* code */ }", "correct": false},
        {"text": "[=](int x) { /* code */ }", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::istream' class?",
      "answers": [
        {"text": "Implement output stream operations", "correct": false},
        {"text": "Implement input stream operations", "correct": true},
        {"text": "Implement file stream operations", "correct": false},
        {"text": "Define a new data type", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of the 'std::accumulate' function in C++?",
      "answers": [
        {"text": "Perform arithmetic operations on a range", "correct": true},
        {"text": "Find the maximum element in a range", "correct": false},
        {"text": "Sort elements in a range", "correct": false},
        {"text": "Count the number of elements in a range", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() { cout << sizeof(double); return 0; }```",
      "answers": [
        {"text": "2", "correct": false},
        {"text": "4", "correct": false},
        {"text": "8", "correct": true},
        {"text": "16", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::shared_ptr' class?",
      "answers": [
        {"text": "Create a shared pointer to dynamically allocated memory", "correct": true},
        {"text": "Implement a shared data type", "correct": false},
        {"text": "Define a new data type", "correct": false},
        {"text": "Allocate memory for a shared variable", "correct": false}
      ]
    },
    {
      "question": "What is the correct syntax for a C++ lambda function with no parameters and no return type?",
      "answers": [
        {"text": "[ ] { /* code */ }", "correct": true},
        {"text": "[&] { /* code */ }", "correct": false},
        {"text": "[=] { /* code */ }", "correct": false},
        {"text": "[ ] -> void { /* code */ }", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::unordered_map' class?",
      "answers": [
        {"text": "Create an ordered map of key-value pairs", "correct": false},
        {"text": "Define a new data type", "correct": false},
        {"text": "Implement an unordered associative container with key-value pairs", "correct": true},
        {"text": "Allocate memory for an unordered map", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\n#include <iostream>\nusing namespace std;\nvoid myFunction(int x, int y = 5) { cout << x + y; }\nint main() { myFunction(3); return 0; }```",
      "answers": [
        {"text": "8", "correct": true},
        {"text": "15", "correct": false},
        {"text": "Error", "correct": false},
        {"text": "3", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::condition_variable' class?",
      "answers": [
        {"text": "Define a new data type", "correct": false},
        {"text": "Create a conditional variable", "correct": true},
        {"text": "Implement condition-based operations", "correct": false},
        {"text": "Allocate memory for a condition variable", "correct": false}
      ]
    },
    {
      "question": "What is the correct way to open a file named 'example.txt' for writing in C++?",
      "answers": [
        {"text": "ifstream file('example.txt');", "correct": false},
        {"text": "file.open('example.txt', ios::write);", "correct": false},
        {"text": "ofstream file('example.txt');", "correct": true},
        {"text": "file.open('example.txt', ios::out);", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::thread::join' method?",
      "answers": [
        {"text": "Terminate a thread", "correct": false},
        {"text": "Join two threads together", "correct": false},
        {"text": "Wait for a thread to finish its execution", "correct": true},
        {"text": "Create a new thread", "correct": false}
      ]
    },
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() { cout << 'A' + 1; return 0; }```",
      "answers": [
        {"text": "B", "correct": true},
        {"text": "66", "correct": false},
        {"text": "Error", "correct": false},
        {"text": "A1", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::async' function?",
      "answers": [
        {"text": "Create an asynchronous function", "correct": true},
        {"text": "Implement asynchronous file operations", "correct": false},
        {"text": "Define a new data type", "correct": false},
        {"text": "Allocate memory for an asynchronous variable", "correct": false}
      ]
    },
    {
      "question": "What is the correct syntax for a C++ lambda function capturing variables by value?",
      "answers": [
        {"text": "[=](int x) -> int { /* code */ }", "correct": true},
        {"text": "[&](int x) -> int { /* code */ }", "correct": false},
        {"text": "[=](int x) { /* code */ }", "correct": false},
        {"text": "[&](int x) { /* code */ }", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::priority_queue' class?",
      "answers": [
        {"text": "Create a priority queue of integers", "correct": false},
        {"text": "Define a new data type", "correct": false},
        {"text": "Implement a priority queue with a heap-based container", "correct": true},
        {"text": "Allocate memory for a priority queue", "correct": false}
      ]
    },
    {
      "question": "What is the correct way to declare a constant pointer to an integer in C++?",
      "answers": [
        {"text": "const int* ptr;", "correct": true},
        {"text": "int const* ptr;", "correct": true},
        {"text": "const int *ptr;", "correct": true},
        {"text": "int* const ptr;", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::bitset' class?",
      "answers": [
      {"text": "Define a new data type", "correct": false},
      {"text": "Create a bitset of integers", "correct": false},
      {"text": "Implement a fixed-size sequence of bits", "correct": true},
      {"text": "Allocate memory for a bitset", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of the 'std::make_pair' function in C++?",
      "answers": [
        {"text": "Create a pair of integers", "correct": false},
        {"text": "Define a new data type", "correct": false},
        {"text": "Make a pair of two values", "correct": true},
        {"text": "Allocate memory for a pair", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'try', 'catch', and 'throw' keywords?",
      "answers": [
        {"text": "Allocate dynamic memory", "correct": false},
        {"text": "Define a new data type", "correct": false},
        {"text": "Implement exception handling", "correct": true},
        {"text": "Create a new thread", "correct": false}
      ]
    },
    {
      "question": "What is the correct syntax for a C++ lambda function capturing variables by move?",
      "answers": [
        {"text": "[=](int&& x) -> int { /* code */ }", "correct": true},
        {"text": "[&](int&& x) -> int { /* code */ }", "correct": false},
        {"text": "[=](int&& x) { /* code */ }", "correct": false},
        {"text": "[&](int&& x) { /* code */ }", "correct": false}
      ]
    },
    {
      "question": "In C++, what is the purpose of the 'std::fstream' class?",
      "answers": [
        {"text": "Implement file stream operations", "correct": true},
        {"text": "Define a new data type", "correct": false},
        {"text": "Create a dynamic array", "correct": false},
        {"text": "Allocate memory for a file stream", "correct": false}
      ]
    },
    {
      "question": "What is the purpose of the 'std::vector' class in C++?",
      "answers": [
        {"text": "Define a new data type", "correct": false},
        {"text": "Create a dynamic array", "correct": false},
        {"text": "Implement a resizable array or dynamic array", "correct": true},
        {"text": "Allocate memory for a vector", "correct": false}
      ]
    },    
    {
      "question": "What is the output of the following code snippet? \n\n```cpp\n#include <iostream>\nusing namespace std;\nint main() { int x = 5; int y = 2; cout << x / y; return 0; }```",
      "answers": [
        {"text": "2", "correct": true},
        {"text": "2.5", "correct": false},
        {"text": "2.0", "correct": false},
        {"text": "Error", "correct": false}
      ]
    },
    // Add more questions for C++ Programming
  ],
  Python: [
    {
      "question": "Who developed the Python programming language?",
      "answers": [
        { "text": "Guido van Rossum", "correct": true },
        { "text": "Larry Page", "correct": false },
        { "text": "Mark Zuckerberg", "correct": false },
        { "text": "Elon Musk", "correct": false }
      ]
    },
    {
      "question": "How do you create a function in Python?",
      "answers": [
        { "text": "function myFunction():", "correct": false },
        { "text": "def myFunction():", "correct": true },
        { "text": "create myFunction():", "correct": false },
        { "text": "define myFunction():", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to comment out multiple lines in Python?",
      "answers": [
        { "text": "// This is a comment", "correct": false },
        { "text": "# This is a comment", "correct": true },
        { "text": "/* This is a comment */", "correct": false },
        { "text": " !-- This is a comment --!", "correct": false }
      ]
    },
    {
      "question": "Which data type is used to represent a single character in Python?",
      "answers": [
        { "text": "char", "correct": false },
        { "text": "str", "correct": true },
        { "text": "int", "correct": false },
        { "text": "float", "correct": false }
      ]
    },
    {
      "question": "How do you print the type of a variable in Python?",
      "answers": [
        { "text": "printType(variable)", "correct": false },
        { "text": "echo variable.type", "correct": false },
        { "text": "print(type(variable))", "correct": true },
        { "text": "display variable.type", "correct": false }
      ]
    },
    {
      "question": "What is the output of the following code snippet?\n\n```python\nx = 5\ny = 2\nprint(x / y)\n```",
      "answers": [
        { "text": "2", "correct": true },
        { "text": "2.5", "correct": false },
        { "text": "2.0", "correct": false },
        { "text": "Error", "correct": false }
      ]
    },
    {
      "question": "How do you check if a key is present in a dictionary in Python?",
      "answers": [
        { "text": "key in dictionary", "correct": true },
        { "text": "contains(key, dictionary)", "correct": false },
        { "text": "isKeyPresent(key, dictionary)", "correct": false },
        { "text": "exists(key, dictionary)", "correct": false }
      ]
    },
    {
      "question": "Which statement is used for making decisions in Python?",
      "answers": [
        { "text": "for", "correct": false },
        { "text": "do-while", "correct": false },
        { "text": "if-else", "correct": true },
        { "text": "switch", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'elif' keyword in Python?",
      "answers": [
        { "text": "To define a new variable", "correct": false },
        { "text": "To create an alias for a function", "correct": false },
        { "text": "To handle multiple conditions in a chain", "correct": true },
        { "text": "To declare a class method", "correct": false }
      ]
    },
    {
      "question": "What does the 'range()' function in Python generate?",
      "answers": [
        { "text": "A list of integers", "correct": false },
        { "text": "A range object", "correct": true },
        { "text": "A dictionary", "correct": false },
        { "text": "A tuple of numbers", "correct": false }
      ]
    },
    {
      "question": "In Python, how do you open a file named 'example.txt' for writing?",
      "answers": [
        { "text": "file = open('example.txt', 'r')", "correct": false },
        { "text": "file = open('example.txt', 'w')", "correct": true },
        { "text": "file = open('example.txt', 'a')", "correct": false },
        { "text": "file = open('example.txt', 'x')", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'pass' statement in Python?",
      "answers": [
        { "text": "To execute a block of code", "correct": false },
        { "text": "To skip the current block of code", "correct": true },
        { "text": "To break out of a loop", "correct": false },
        { "text": "To return a value from a function", "correct": false }
      ]
    },
    {
      "question": "How do you remove an item from a list in Python?",
      "answers": [
        { "text": "removeItem(list, item)", "correct": false },
        { "text": "list.remove(item)", "correct": true },
        { "text": "deleteItem(list, item)", "correct": false },
        { "text": "list.delete(item)", "correct": false }
      ]
    },
    {
      "question": "What is the correct syntax for a 'while' loop in Python?",
      "answers": [
        { "text": "while (condition):", "correct": false },
        { "text": "while condition:", "correct": true },
        { "text": "do while condition:", "correct": false },
        { "text": "do: while condition", "correct": false }
      ]
    },
    {
      "question": "Which of the following is a correct way to create a tuple in Python?",
      "answers": [
        { "text": "myTuple = (1, 2, 3)", "correct": true },
        { "text": "myTuple = [1, 2, 3]", "correct": false },
        { "text": "myTuple = {1, 2, 3}", "correct": false },
        { "text": "myTuple = 1, 2, 3", "correct": false }
      ]
    },
    {
      "question": "What does the 'self' keyword refer to in a class method in Python?",
      "answers": [
        { "text": "The class itself", "correct": false },
        { "text": "The instance of the class", "correct": true },
        { "text": "A reserved keyword", "correct": false },
        { "text": "A global variable", "correct": false }
      ]
    },
    {
      "question": "How do you concatenate two lists in Python?",
      "answers": [
        { "text": "list1 + list2", "correct": true },
        { "text": "list1.concatenate(list2)", "correct": false },
        { "text": "concat(list1, list2)", "correct": false },
        { "text": "list1.concat(list2)", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'break' statement in Python?",
      "answers": [
        { "text": "To skip the current iteration of a loop", "correct": true },
        { "text": "To exit the program", "correct": false },
        { "text": "To break out of a function", "correct": false },
        { "text": "To terminate a loop entirely", "correct": false }
      ]
    },
    {
      "question": "In Python, how do you check the length of a list?",
      "answers": [
        { "text": "length(list)", "correct": false },
        { "text": "len(list)", "correct": true },
        { "text": "count(list)", "correct": false },
        { "text": "size(list)", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'try', 'except' block in Python?",
      "answers": [
        { "text": "To declare a new variable", "correct": false },
        { "text": "To implement exception handling", "correct": true },
        { "text": "To define a class method", "correct": false },
        { "text": "To create a loop", "correct": false }
      ]
    },
    {
      "question": "What does the '__init__' method do in a Python class?",
      "answers": [
        { "text": "It initializes the class itself", "correct": false },
        { "text": "It is the constructor method called when an object is created", "correct": true },
        { "text": "It is a reserved keyword", "correct": false },
        { "text": "It creates an instance of the class", "correct": false }
      ]
    },
    {
      "question": "Which of the following is used for creating a set in Python?",
      "answers": [
        { "text": "{1, 2, 3}", "correct": true },
        { "text": "[1, 2, 3]", "correct": false },
        { "text": "(1, 2, 3)", "correct": false },
        { "text": "set(1, 2, 3)", "correct": false }
      ]
    },
    {
      "question": "What is the output of the following code snippet?\n\n```python\nx = 'Hello'\nprint(x[1:])\n```",
      "answers": [
        { "text": "H", "correct": false },
        { "text": "e", "correct": true },
        { "text": "ello", "correct": false },
        { "text": "H e l l o", "correct": false }
      ]
    },
    {
      "question": "In Python, what is the purpose of the 'lambda' function?",
      "answers": [
        { "text": "To create anonymous functions", "correct": true },
        { "text": "To declare a new variable", "correct": false },
        { "text": "To define a class method", "correct": false },
        { "text": "To create a loop", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to import a module named 'example' in Python?",
      "answers": [
        { "text": "import example", "correct": true },
        { "text": "use example", "correct": false },
        { "text": "include example", "correct": false },
        { "text": "require example", "correct": false }
      ]
    },
    {
      "question": "Which of the following is a mutable data type in Python?",
      "answers": [
        { "text": "int", "correct": false },
        { "text": "float", "correct": false },
        { "text": "list", "correct": true },
        { "text": "tuple", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'super()' function in Python?",
      "answers": [
        { "text": "To call the superclass constructor", "correct": true },
        { "text": "To create an instance of the class", "correct": false },
        { "text": "To define a class method", "correct": false },
        { "text": "To declare a new variable", "correct": false }
      ]
    },
    {
      "question": "How do you round a floating-point number to the nearest integer in Python?",
      "answers": [
        { "text": "round(number)", "correct": true },
        { "text": "floor(number)", "correct": false },
        { "text": "ceil(number)", "correct": false },
        { "text": "truncate(number)", "correct": false }
      ]
    },
    {
      "question": "What is the output of the following code snippet?\n\n```python\nx = 5\ny = '2'\nprint(x + y)\n```",
      "answers": [
        { "text": "7", "correct": false },
        { "text": "52", "correct": true },
        { "text": "Error", "correct": false },
        { "text": "TypeError", "correct": false }
      ]
    },
    {
      "question": "In Python, what is the purpose of the 'with' statement?",
      "answers": [
        { "text": "To create a loop", "correct": false },
        { "text": "To handle exceptions", "correct": false },
        { "text": "To open and close files automatically", "correct": true },
        { "text": "To define a class method", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to check if a variable is of a certain type in Python?",
      "answers": [
        { "text": "variable.type() == 'type'", "correct": false },
        { "text": "type(variable) == 'type'", "correct": false },
        { "text": "isinstance(variable, type)", "correct": true },
        { "text": "typeof(variable) == 'type'", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'enumerate()' function in Python?",
      "answers": [
        { "text": "To iterate over a sequence while keeping track of the index", "correct": true },
        { "text": "To filter elements in a list", "correct": false },
        { "text": "To concatenate two lists", "correct": false },
        { "text": "To reverse a list", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to concatenate two strings in Python?",
      "answers": [
        { "text": "string1 + string2", "correct": true },
        { "text": "concat(string1, string2)", "correct": false },
        { "text": "join(string1, string2)", "correct": false },
        { "text": "merge(string1, string2)", "correct": false }
      ]
    },
    {
      "question": "Which of the following is a correct way to create a dictionary in Python?",
      "answers": [
        { "text": "{1: 'one', 2: 'two', 3: 'three'}", "correct": true },
        { "text": "[1: 'one', 2: 'two', 3: 'three']", "correct": false },
        { "text": "(1: 'one', 2: 'two', 3: 'three')", "correct": false },
        { "text": "{'one': 1, 'two': 2, 'three': 3}", "correct": false }
      ]
    },
    {
      "question": "What is the output of the following code snippet?\n\n```python\nx = 10\nif x > 5 and x < 15:\n    print('True')\nelse:\n    print('False')\n```",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false },
        { "text": "Error", "correct": false },
        { "text": "No output", "correct": false }
      ]
    },
    {
      "question": "In Python, what is the purpose of the 'map()' function?",
      "answers": [
        { "text": "To filter elements in a list", "correct": false },
        { "text": "To apply a function to every item in an iterable", "correct": true },
        { "text": "To sort a list", "correct": false },
        { "text": "To concatenate two lists", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to define a constant in Python?",
      "answers": [
        { "text": "const MY_CONSTANT = 10", "correct": false },
        { "text": "constant MY_CONSTANT = 10", "correct": false },
        { "text": "MY_CONSTANT = 10", "correct": true },
        { "text": "define MY_CONSTANT 10", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'len()' function in Python?",
      "answers": [
        { "text": "To get the length of a string", "correct": true },
        { "text": "To reverse a string", "correct": false },
        { "text": "To convert a string to uppercase", "correct": false },
        { "text": "To concatenate two strings", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to create a set in Python?",
      "answers": [
        { "text": "{1, 2, 3}", "correct": true },
        { "text": "[1, 2, 3]", "correct": false },
        { "text": "(1, 2, 3)", "correct": false },
        { "text": "set(1, 2, 3)", "correct": false }
      ]
    },
    {
      "question": "What does the 'ord()' function in Python do?",
      "answers": [
        { "text": "Converts a character to its ASCII value", "correct": true },
        { "text": "Returns the length of a string", "correct": false },
        { "text": "Converts a string to lowercase", "correct": false },
        { "text": "Returns the square root of a number", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'list()' function in Python?",
      "answers": [
        { "text": "To create a new list", "correct": true },
        { "text": "To convert a list to a string", "correct": false },
        { "text": "To sort a list", "correct": false },
        { "text": "To filter elements in a list", "correct": false }
      ]
    },
    {
      "question": "In Python, what is the purpose of the 'else' clause in a 'try', 'except' block?",
      "answers": [
        { "text": "To execute code if the 'try' block raises an exception", "correct": true },
        { "text": "To handle the exception", "correct": false },
        { "text": "To re-raise the exception", "correct": false },
        { "text": "To terminate the program", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to format a string in Python?",
      "answers": [
        { "text": "formatString('Hello {}', 'World')", "correct": false },
        { "text": "'Hello {}'.format('World')", "correct": true },
        { "text": "stringFormat('Hello {}', 'World')", "correct": false },
        { "text": "'Hello %s' % 'World'", "correct": false }
      ]
    },
    {
      "question": "In Python, what is the purpose of the 'break' statement?",
      "answers": [
        { "text": "To skip the current iteration of a loop", "correct": true },
        { "text": "To exit the program", "correct": false },
        { "text": "To break out of a function", "correct": false },
        { "text": "To terminate a loop entirely", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'filter()' function in Python?",
      "answers": [
        { "text": "To remove elements from a list", "correct": false },
        { "text": "To filter elements based on a function's result", "correct": true },
        { "text": "To concatenate two lists", "correct": false },
        { "text": "To reverse a list", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to check if a variable is a list in Python?",
      "answers": [
        { "text": "variable.type() == 'list'", "correct": false },
        { "text": "type(variable) == 'list'", "correct": false },
        { "text": "isinstance(variable, list)", "correct": true },
        { "text": "typeof(variable) == 'list'", "correct": false }
      ]
    },
    {
      "question": "How do you define a class in Python?",
      "answers": [
        { "text": "class MyClass:", "correct": true },
        { "text": "define MyClass:", "correct": false },
        { "text": "new class MyClass:", "correct": false },
        { "text": "declare class MyClass:", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to create a tuple in Python?",
      "answers": [
        { "text": "myTuple = (1, 2, 3)", "correct": true },
        { "text": "myTuple = [1, 2, 3]", "correct": false },
        { "text": "myTuple = {1, 2, 3}", "correct": false },
        { "text": "myTuple = 1, 2, 3", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'del' statement in Python?",
      "answers": [
        { "text": "To delete a file", "correct": false },
        { "text": "To remove an item from a list or delete a variable", "correct": true },
        { "text": "To exit a loop", "correct": false },
        { "text": "To break out of a function", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to open a file named 'example.txt' for reading in Python?",
      "answers": [
        { "text": "file = open('example.txt', 'r')", "correct": true },
        { "text": "file = open('example.txt', 'w')", "correct": false },
        { "text": "file = open('example.txt', 'a')", "correct": false },
        { "text": "file = open('example.txt', 'x')", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'pop()' method in Python?",
      "answers": [
        { "text": "To push an element onto a stack", "correct": false },
        { "text": "To remove and return the last element from a list", "correct": true },
        { "text": "To pop up a message box", "correct": false },
        { "text": "To pop out of a loop", "correct": false }
      ]
    },
    {
      "question": "What is the output of the following code snippet?\n\n```python\nx = [1, 2, 3]\ny = x\ny[0] = 99\nprint(x[0])\n```",
      "answers": [
        { "text": "1", "correct": false },
        { "text": "2", "correct": false },
        { "text": "99", "correct": true },
        { "text": "Error", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'join()' method in Python?",
      "answers": [
        { "text": "To join two strings", "correct": true },
        { "text": "To concatenate two lists", "correct": false },
        { "text": "To merge two dictionaries", "correct": false },
        { "text": "To connect to a database", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to define a function with a default argument in Python?",
      "answers": [
        { "text": "def myFunction(defaultArg = 10):", "correct": true },
        { "text": "function myFunction(defaultArg = 10):", "correct": false },
        { "text": "def myFunction: defaultArg = 10", "correct": false },
        { "text": "function myFunction: defaultArg = 10", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'clear()' method in Python?",
      "answers": [
        { "text": "To delete a file", "correct": false },
        { "text": "To clear the contents of a list or dictionary", "correct": true },
        { "text": "To remove an item from a list", "correct": false },
        { "text": "To clear the console screen", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to iterate over a list in Python using a 'for' loop?",
      "answers": [
        { "text": "for i in range(len(myList)):", "correct": false },
        { "text": "for i in myList:", "correct": true },
        { "text": "for i = 0; i < len(myList); i++:", "correct": false },
        { "text": "for i = 0 to len(myList):", "correct": false }
      ]
    },
    {
      "question": "In Python, what is the purpose of the 'zip()' function?",
      "answers": [
        { "text": "To compress a file", "correct": false },
        { "text": "To create a zip file", "correct": false },
        { "text": "To combine two or more iterables element-wise", "correct": true },
        { "text": "To extract files from a zip archive", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to check if a number is even in Python?",
      "answers": [
        { "text": "isEven(number)", "correct": false },
        { "text": "number.isEven()", "correct": false },
        { "text": "number % 2 == 0", "correct": true },
        { "text": "even(number)", "correct": false }
      ]
    },
    {
      "question": "What is the output of the following code snippet?\n\n```python\nx = [1, 2, 3]\ny = x.copy()\ny[0] = 99\nprint(x[0])\n```",
      "answers": [
        { "text": "1", "correct": true },
        { "text": "2", "correct": false },
        { "text": "99", "correct": false },
        { "text": "Error", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'min()' function in Python?",
      "answers": [
        { "text": "To find the minimum value in a list or iterable", "correct": true },
        { "text": "To minimize a window", "correct": false },
        { "text": "To get the minimum between two numbers", "correct": false },
        { "text": "To find the smallest element in a dictionary", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to handle exceptions in Python?",
      "answers": [
        { "text": "try { /* code */ } catch (Exception e) { /* handle exception */ }", "correct": false },
        { "text": "try: \n  # code \nexcept Exception as e: \n  # handle exception", "correct": true },
        { "text": "try { // code } except (Exception e) { // handle exception }", "correct": false },
        { "text": "try - code - except Exception as e - handle exception", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'max()' function in Python?",
      "answers": [
        { "text": "To find the maximum value in a list or iterable", "correct": true },
        { "text": "To maximize a window", "correct": false },
        { "text": "To get the maximum between two numbers", "correct": false },
        { "text": "To find the largest element in a dictionary", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to define a class method in Python?",
      "answers": [
        { "text": "def myMethod(self):", "correct": false },
        { "text": "method def myMethod(self):", "correct": false },
        { "text": "@classmethod \ndef myMethod(cls):", "correct": true },
        { "text": "class method myMethod(self):", "correct": false }
      ]
    },
    {
      "question": "What is the output of the following code snippet?\n\n```python\nx = True\ny = False\nprint(not x or y)\n```",
      "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true },
        { "text": "Error", "correct": false },
        { "text": "Undefined", "correct": false }
      ]
    },
    {
      "question": "In Python, what is the purpose of the 'os' module?",
      "answers": [
        { "text": "To create a new operating system", "correct": false },
        { "text": "To handle operating system-related tasks", "correct": true },
        { "text": "To optimize system performance", "correct": false },
        { "text": "To open and save files", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'sorted()' function in Python?",
      "answers": [
        { "text": "To sort a list in ascending order", "correct": true },
        { "text": "To reverse the order of a list", "correct": false },
        { "text": "To shuffle the elements of a list", "correct": false },
        { "text": "To filter elements in a list", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to check if a key is present in a dictionary in Python?",
      "answers": [
        { "text": "key in dictionary", "correct": true },
        { "text": "contains(key, dictionary)", "correct": false },
        { "text": "isKeyPresent(key, dictionary)", "correct": false },
        { "text": "exists(key, dictionary)", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 're' module in Python?",
      "answers": [
        { "text": "To read files", "correct": false },
        { "text": "To rename files", "correct": false },
        { "text": "To work with regular expressions", "correct": true },
        { "text": "To remove files", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to format a string with placeholders in Python?",
      "answers": [
        { "text": "stringFormat('Hello %s', 'World')", "correct": false },
        { "text": "'Hello %s' % 'World'", "correct": true },
        { "text": "formatString('Hello %s', 'World')", "correct": false },
        { "text": "mergeString('Hello %s', 'World')", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'zip()' function in Python?",
      "answers": [
        { "text": "To compress a file", "correct": false },
        { "text": "To create a zip file", "correct": false },
        { "text": "To combine two or more iterables element-wise", "correct": true },
        { "text": "To extract files from a zip archive", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to check if a number is even in Python?",
      "answers": [
        { "text": "isEven(number)", "correct": false },
        { "text": "number.isEven()", "correct": false },
        { "text": "number % 2 == 0", "correct": true },
        { "text": "even(number)", "correct": false }
      ]
    },
    {
      "question": "What is the output of the following code snippet?\n\n```python\nx = [1, 2, 3]\ny = x.copy()\ny[0] = 99\nprint(x[0])\n```",
      "answers": [
        { "text": "1", "correct": true },
        { "text": "2", "correct": false },
        { "text": "99", "correct": false },
        { "text": "Error", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'join()' method in Python?",
      "answers": [
        { "text": "To join two strings", "correct": true },
        { "text": "To concatenate two lists", "correct": false },
        { "text": "To merge two dictionaries", "correct": false },
        { "text": "To connect to a database", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to define a function with a default argument in Python?",
      "answers": [
        { "text": "def myFunction(defaultArg = 10):", "correct": true },
        { "text": "function myFunction(defaultArg = 10):", "correct": false },
        { "text": "def myFunction: defaultArg = 10", "correct": false },
        { "text": "function myFunction: defaultArg = 10", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'clear()' method in Python?",
      "answers": [
        { "text": "To delete a file", "correct": false },
        { "text": "To clear the contents of a list or dictionary", "correct": true },
        { "text": "To remove an item from a list", "correct": false },
        { "text": "To clear the console screen", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to iterate over a list in Python using a 'for' loop?",
      "answers": [
        { "text": "for i in range(len(myList)):", "correct": false },
        { "text": "for i in myList:", "correct": true },
        { "text": "for i = 0; i < len(myList); i++:", "correct": false },
        { "text": "for i = 0 to len(myList):", "correct": false }
      ]
    },
    {
      "question": "In Python, what is the purpose of the 'os' module?",
      "answers": [
        { "text": "To create a new operating system", "correct": false },
        { "text": "To handle operating system-related tasks", "correct": true },
        { "text": "To optimize system performance", "correct": false },
        { "text": "To open and save files", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'sorted()' function in Python?",
      "answers": [
        { "text": "To sort a list in ascending order", "correct": true },
        { "text": "To reverse the order of a list", "correct": false },
        { "text": "To shuffle the elements of a list", "correct": false },
        { "text": "To filter elements in a list", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to check if a key is present in a dictionary in Python?",
      "answers": [
        { "text": "key in dictionary", "correct": true },
        { "text": "contains(key, dictionary)", "correct": false },
        { "text": "isKeyPresent(key, dictionary)", "correct": false },
        { "text": "exists(key, dictionary)", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 're' module in Python?",
      "answers": [
        { "text": "To read files", "correct": false },
        { "text": "To rename files", "correct": false },
        { "text": "To work with regular expressions", "correct": true },
        { "text": "To remove files", "correct": false }
      ]
    },
    // Add more questions for Python
  ],
  Java: [
    {
      question: "Who developed the Java programming language?",
      answers: [
        { text: "James Gosling", correct: true },
        { text: "Bill Gates", correct: false },
        { text: "Linus Torvalds", correct: false },
        { text: "Mark Zuckerberg", correct: false },
      ],
    },
    {
      question: "In which year was the Java programming language first released?",
      answers: [
        { text: "1995", correct: true },
        { text: "2000", correct: false },
        { text: "1985", correct: false },
        { text: "2010", correct: false },
      ],
    },
    {
      "question": "Which keyword is used to define a constant in Java?",
      "answers": [
        { "text": "const", "correct": false },
        { "text": "final", "correct": true },
        { "text": "static", "correct": false },
        { "text": "constant", "correct": false }
      ]
    },
    {
      "question": "What is the default value of a local variable in Java?",
      "answers": [
        { "text": "0", "correct": false },
        { "text": "null", "correct": false },
        { "text": "Depends on the variable type", "correct": true },
        { "text": "1", "correct": false }
      ]
    },
    {
      "question": "Which of the following is not a valid data type in Java?",
      "answers": [
        { "text": "int", "correct": false },
        { "text": "char", "correct": false },
        { "text": "double", "correct": false },
        { "text": "void", "correct": true }
      ]
    },
    {
      "question": "What does the 'super' keyword refer to in Java?",
      "answers": [
        { "text": "The superclass of a class", "correct": true },
        { "text": "A keyword to call static methods", "correct": false },
        { "text": "A reference to the current instance of a class", "correct": false },
        { "text": "A keyword to create an object", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'break' statement in Java?",
      "answers": [
        { "text": "To exit a loop or switch statement", "correct": true },
        { "text": "To skip the current iteration of a loop", "correct": false },
        { "text": "To terminate the program", "correct": false },
        { "text": "To break out of a function", "correct": false }
      ]
    },
    {
      "question": "How is a thread started in Java?",
      "answers": [
        { "text": "Using the 'execute()' method", "correct": false },
        { "text": "By calling the 'start()' method of a thread object", "correct": true },
        { "text": "By using the 'run()' method", "correct": false },
        { "text": "Threads start automatically", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'static' keyword in Java?",
      "answers": [
        { "text": "To make a variable local to a method", "correct": false },
        { "text": "To create an instance of a class", "correct": false },
        { "text": "To declare a constant", "correct": false },
        { "text": "To create a class-level variable or method", "correct": true }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'interface' keyword?",
      "answers": [
        { "text": "To declare a new class", "correct": false },
        { "text": "To define an abstract class", "correct": false },
        { "text": "To declare an interface", "correct": true },
        { "text": "To implement a class", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to declare a method that does not return any value in Java?",
      "answers": [
        { "text": "void myMethod()", "correct": true },
        { "text": "int myMethod()", "correct": false },
        { "text": "string myMethod()", "correct": false },
        { "text": "myMethod()", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'finally' block in a try-catch-finally statement?",
      "answers": [
        { "text": "To execute code if the 'try' block raises an exception", "correct": false },
        { "text": "To handle the exception", "correct": false },
        { "text": "To re-raise the exception", "correct": false },
        { "text": "To execute code whether an exception is thrown or not", "correct": true }
      ]
    },
    {
      "question": "What is the correct way to create an array in Java?",
      "answers": [
        { "text": "array = [1, 2, 3]", "correct": false },
        { "text": "array = {1, 2, 3}", "correct": false },
        { "text": "int[] array = new int[3]", "correct": true },
        { "text": "int array[3] = {1, 2, 3}", "correct": false }
      ]
    },
    {
      "question": "Which of the following is not a valid access modifier in Java?",
      "answers": [
        { "text": "private", "correct": false },
        { "text": "protected", "correct": false },
        { "text": "package-private", "correct": false },
        { "text": "friend", "correct": true }
      ]
    },
    {
      "question": "What is the purpose of the 'this' keyword in Java?",
      "answers": [
        { "text": "To refer to the superclass of a class", "correct": false },
        { "text": "A keyword to call static methods", "correct": false },
        { "text": "To refer to the current instance of a class", "correct": true },
        { "text": "A keyword to create an object", "correct": false }
      ]
    },
    {
      "question": "In Java, what does the 'extends' keyword indicate in a class declaration?",
      "answers": [
        { "text": "To create an instance of a class", "correct": false },
        { "text": "To implement an interface", "correct": false },
        { "text": "To define an abstract class", "correct": false },
        { "text": "To specify the superclass of a class", "correct": true }
      ]
    },
    {
      "question": "What is the correct way to define a constructor in Java?",
      "answers": [
        { "text": "void constructor()", "correct": false },
        { "text": "int constructor()", "correct": false },
        { "text": "constructor myConstructor()", "correct": false },
        { "text": "public MyClass()", "correct": true }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'throw' keyword?",
      "answers": [
        { "text": "To catch an exception", "correct": false },
        { "text": "To specify a variable type", "correct": false },
        { "text": "To declare a method", "correct": false },
        { "text": "To explicitly throw an exception", "correct": true }
      ]
    },
    {
      "question": "What is the correct syntax for a 'switch' statement in Java?",
      "answers": [
        { "text": "switch (condition) { case 1: /* code */ break; }", "correct": true },
        { "text": "switch (case 1) { /* code */ }", "correct": false },
        { "text": "case 1: switch (condition) { /* code */ }", "correct": false },
        { "text": "if (condition) { /* code */ } else { /* code */ }", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'instanceof' operator in Java?",
      "answers": [
        { "text": "To check if an object is an instance of a specific class or interface", "correct": true },
        { "text": "To compare two objects for equality", "correct": false },
        { "text": "To convert a variable to an instance of a class", "correct": false },
        { "text": "To create a new instance of a class", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'try' block in a try-catch statement?",
      "answers": [
        { "text": "To handle the exception", "correct": false },
        { "text": "To execute code if no exception is thrown", "correct": false },
        { "text": "To catch and handle an exception", "correct": false },
        { "text": "To enclose the code that might throw an exception", "correct": true }
      ]
    },
    {
      "question": "What is the correct way to create a new thread in Java?",
      "answers": [
        { "text": "new Thread(myRunnable)", "correct": true },
        { "text": "Thread.start(myRunnable)", "correct": false },
        { "text": "Thread.run(myRunnable)", "correct": false },
        { "text": "run new Thread(myRunnable)", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'enum' keyword?",
      "answers": [
        { "text": "To declare a new variable", "correct": false },
        { "text": "To declare a constant", "correct": false },
        { "text": "To define an enumeration type", "correct": true },
        { "text": "To create a new instance of a class", "correct": false }
      ]
    },
    {
      "question": "What is the correct syntax for a 'for-each' loop in Java?",
      "answers": [
        { "text": "for (i = 0; i < array.length; i++) { /* code */ }", "correct": false },
        { "text": "for (int i : array) { /* code */ }", "correct": true },
        { "text": "foreach (int i in array) { /* code */ }", "correct": false },
        { "text": "for-each (int i : array) { /* code */ }", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'synchronized' keyword in Java?",
      "answers": [
        { "text": "To make a method static", "correct": false },
        { "text": "To synchronize threads and control access to an object or method", "correct": true },
        { "text": "To declare a variable", "correct": false },
        { "text": "To create a singleton class", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'super()' call in a constructor?",
      "answers": [
        { "text": "To call a method from the superclass", "correct": false },
        { "text": "To create a new instance of the superclass", "correct": false },
        { "text": "To call the constructor of the superclass", "correct": true },
        { "text": "To access a static variable of the superclass", "correct": false }
      ]
    },
    {
      "question": "What is the correct syntax for a multi-line comment in Java?",
      "answers": [
        { "text": "// This is a comment", "correct": false },
        { "text": "/* This is a comment */", "correct": true },
        { "text": "# This is a comment", "correct": false },
        { "text": "-- This is a comment", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'throws' keyword in a method signature?",
      "answers": [
        { "text": "To declare a variable", "correct": false },
        { "text": "To indicate that the method can throw an exception", "correct": true },
        { "text": "To specify a return type", "correct": false },
        { "text": "To define a new exception class", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to check if two strings are equal in Java?",
      "answers": [
        { "text": "str1 == str2", "correct": false },
        { "text": "str1.equals(str2)", "correct": true },
        { "text": "str1 = str2", "correct": false },
        { "text": "str1.compare(str2)", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'abstract' keyword in a class declaration?",
      "answers": [
        { "text": "To create an instance of a class", "correct": false },
        { "text": "To specify the superclass of a class", "correct": false },
        { "text": "To define an abstract class", "correct": true },
        { "text": "To declare a constant", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to close a file in Java?",
      "answers": [
        { "text": "file.close()", "correct": false },
        { "text": "file.exit()", "correct": false },
        { "text": "file.shutdown()", "correct": false },
        { "text": "file.close() or use try-with-resources", "correct": true }
      ]
    },
    {
      "question": "What is the purpose of the 'package' keyword in Java?",
      "answers": [
        { "text": "To declare a new package", "correct": false },
        { "text": "To define a class", "correct": false },
        { "text": "To import a package", "correct": false },
        { "text": "To specify the package of a class", "correct": true }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'volatile' keyword?",
      "answers": [
        { "text": "To declare a variable as a constant", "correct": false },
        { "text": "To indicate that a variable's value may be changed by multiple threads simultaneously", "correct": true },
        { "text": "To specify a method as a static method", "correct": false },
        { "text": "To create a new instance of a class", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to declare an array in Java?",
      "answers": [
        { "text": "array = [1, 2, 3]", "correct": false },
        { "text": "array = {1, 2, 3}", "correct": false },
        { "text": "int[] array = new int[3]", "correct": true },
        { "text": "int array[3] = {1, 2, 3}", "correct": false }
      ]
    },
    {
      "question": "Which of the following is not a valid exception handling keyword in Java?",
      "answers": [
        { "text": "try", "correct": false },
        { "text": "catch", "correct": false },
        { "text": "finally", "correct": false },
        { "text": "else", "correct": true }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'this' keyword?",
      "answers": [
        { "text": "To refer to the superclass of a class", "correct": false },
        { "text": "A keyword to call static methods", "correct": false },
        { "text": "To refer to the current instance of a class", "correct": true },
        { "text": "A keyword to create an object", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'new' keyword?",
      "answers": [
        { "text": "To create a new object", "correct": true },
        { "text": "To instantiate a class", "correct": false },
        { "text": "To declare a variable", "correct": false },
        { "text": "To call a method", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'instanceof' operator in Java?",
      "answers": [
        { "text": "To check if an object is an instance of a specific class or interface", "correct": true },
        { "text": "To compare two objects for equality", "correct": false },
        { "text": "To convert a variable to an instance of a class", "correct": false },
        { "text": "To create a new instance of a class", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'continue' statement in a loop?",
      "answers": [
        { "text": "To exit the loop", "correct": false },
        { "text": "To skip the current iteration and continue to the next one", "correct": true },
        { "text": "To terminate the loop", "correct": false },
        { "text": "To restart the loop from the beginning", "correct": false }
      ]
    },
    {
      "question": "What is the correct syntax for a 'while' loop in Java?",
      "answers": [
        { "text": "while (condition) { /* code */ }", "correct": true },
        { "text": "for (int i = 0; i < 5; i++) { /* code */ }", "correct": false },
        { "text": "do { /* code */ } while (condition);", "correct": false },
        { "text": "repeat { /* code */ } until (condition);", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'default' case in a 'switch' statement?",
      "answers": [
        { "text": "To specify the default value of a variable", "correct": false },
        { "text": "To execute code if no other case matches", "correct": true },
        { "text": "To define a default method for an interface", "correct": false },
        { "text": "To provide a default constructor for a class", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to declare a constant in Java?",
      "answers": [
        { "text": "const int MY_CONSTANT = 10;", "correct": false },
        { "text": "final int MY_CONSTANT = 10;", "correct": true },
        { "text": "static int MY_CONSTANT = 10;", "correct": false },
        { "text": "constant int MY_CONSTANT = 10;", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'instanceof' operator?",
      "answers": [
        { "text": "To check if an object is an instance of a specific class or interface", "correct": true },
        { "text": "To compare two objects for equality", "correct": false },
        { "text": "To convert a variable to an instance of a class", "correct": false },
        { "text": "To create a new instance of a class", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to create an object in Java?",
      "answers": [
        { "text": "new Object(myObject)", "correct": false },
        { "text": "create Object(myObject)", "correct": false },
        { "text": "Object obj = new Object();", "correct": true },
        { "text": "Object.create(myObject)", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'break' statement in a 'for' loop?",
      "answers": [
        { "text": "To exit the loop", "correct": true },
        { "text": "To skip the current iteration and continue to the next one", "correct": false },
        { "text": "To terminate the loop", "correct": false },
        { "text": "To restart the loop from the beginning", "correct": false }
      ]
    },
    {
      "question": "What is the correct syntax for declaring an array in Java?",
      "answers": [
        { "text": "int[] myArray = new int[5];", "correct": true },
        { "text": "myArray = [1, 2, 3, 4, 5];", "correct": false },
        { "text": "int[5] myArray = {1, 2, 3, 4, 5};", "correct": false },
        { "text": "myArray = new int[]{1, 2, 3, 4, 5};", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'do-while' loop?",
      "answers": [
        { "text": "To repeat a block of code while a condition is true", "correct": true },
        { "text": "To iterate over elements of an array", "correct": false },
        { "text": "To create an infinite loop", "correct": false },
        { "text": "To execute code at least once before checking the condition", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'throws' clause in a method signature in Java?",
      "answers": [
        { "text": "To declare a variable", "correct": false },
        { "text": "To indicate that the method can throw an exception", "correct": true },
        { "text": "To specify a return type", "correct": false },
        { "text": "To define a new exception class", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'protected' access modifier?",
      "answers": [
        { "text": "To make a variable accessible only within the same class", "correct": false },
        { "text": "To make a variable accessible within the same package and subclasses", "correct": true },
        { "text": "To make a variable accessible within the same package", "correct": false },
        { "text": "To make a variable accessible from any class", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to define a method in an interface in Java?",
      "answers": [
        { "text": "method void myMethod();", "correct": false },
        { "text": "def myMethod():", "correct": false },
        { "text": "void myMethod();", "correct": true },
        { "text": "function myMethod() { /* code */ }", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'public' access modifier?",
      "answers": [
        { "text": "To make a variable accessible only within the same class", "correct": false },
        { "text": "To make a variable accessible within the same package", "correct": false },
        { "text": "To make a variable accessible within the same package and subclasses", "correct": false },
        { "text": "To make a variable accessible from any class", "correct": true }
      ]
    },
    {
      "question": "What is the correct way to declare an interface in Java?",
      "answers": [
        { "text": "interface MyInterface { /* code */ }", "correct": true },
        { "text": "class MyInterface { /* code */ }", "correct": false },
        { "text": "interface = MyInterface { /* code */ }", "correct": false },
        { "text": "new interface MyInterface { /* code */ }", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'final' keyword in a method declaration?",
      "answers": [
        { "text": "To make the method static", "correct": false },
        { "text": "To indicate that the method cannot be overridden in a subclass", "correct": true },
        { "text": "To specify a return type", "correct": false },
        { "text": "To declare a variable", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'super()' call in a constructor in Java?",
      "answers": [
        { "text": "To call a method from the superclass", "correct": false },
        { "text": "To create a new instance of the superclass", "correct": false },
        { "text": "To call the constructor of the superclass", "correct": true },
        { "text": "To access a static variable of the superclass", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'catch' block in a try-catch statement?",
      "answers": [
        { "text": "To execute code if no exception is thrown", "correct": false },
        { "text": "To handle the exception", "correct": true },
        { "text": "To enclose the code that might throw an exception", "correct": false },
        { "text": "To re-raise the exception", "correct": false }
      ]
    },
    {
      "question": "What is the correct syntax for a 'do-while' loop in Java?",
      "answers": [
        { "text": "do { /* code */ } until (condition);", "correct": false },
        { "text": "while (condition) { /* code */ }", "correct": false },
        { "text": "do { /* code */ } while (condition);", "correct": true },
        { "text": "for (int i = 0; i < 5; i++) { /* code */ }", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'interface' keyword?",
      "answers": [
        { "text": "To declare a new class", "correct": false },
        { "text": "To define an abstract class", "correct": false },
        { "text": "To declare an interface", "correct": true },
        { "text": "To implement a class", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to declare a variable in Java?",
      "answers": [
        { "text": "var myVar;", "correct": false },
        { "text": "variable myVar;", "correct": false },
        { "text": "int myVar;", "correct": true },
        { "text": "declare myVar;", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'switch' statement?",
      "answers": [
        { "text": "To execute code if a condition is true", "correct": false },
        { "text": "To handle exceptions", "correct": false },
        { "text": "To select one of many code blocks to be executed", "correct": true },
        { "text": "To create a new object", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to define a class in Java?",
      "answers": [
        { "text": "new class MyClass { /* code */ }", "correct": false },
        { "text": "MyClass = class();", "correct": false },
        { "text": "declare class MyClass { /* code */ }", "correct": false },
        { "text": "class MyClass { /* code */ }", "correct": true }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'else' statement?",
      "answers": [
        { "text": "To execute code if a condition is true", "correct": false },
        { "text": "To specify the default case in a switch statement", "correct": false },
        { "text": "To execute code if no other case in an 'if' statement is true", "correct": true },
        { "text": "To handle exceptions", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'return' statement in Java?",
      "answers": [
        { "text": "To exit a loop or switch statement", "correct": false },
        { "text": "To specify the return type of a method", "correct": false },
        { "text": "To return a value from a method", "correct": true },
        { "text": "To create a new instance of a class", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'break' statement?",
      "answers": [
        { "text": "To exit a loop or switch statement", "correct": true },
        { "text": "To skip the current iteration of a loop", "correct": false },
        { "text": "To terminate the program", "correct": false },
        { "text": "To break out of a function", "correct": false }
      ]
    },
    {
      "question": "What is the correct syntax for declaring a method in Java?",
      "answers": [
        { "text": "method void myMethod() { /* code */ }", "correct": false },
        { "text": "def myMethod():", "correct": false },
        { "text": "void myMethod() { /* code */ }", "correct": true },
        { "text": "function myMethod() { /* code */ }", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'for' loop?",
      "answers": [
        { "text": "To repeat a block of code while a condition is true", "correct": false },
        { "text": "To iterate over elements of an array", "correct": false },
        { "text": "To execute code a specific number of times", "correct": true },
        { "text": "To create an infinite loop", "correct": false }
      ]
    },
    {
      "question": "What is the correct syntax for a 'try-catch' statement in Java?",
      "answers": [
        { "text": "try { /* code */ } catch (Exception e) { /* code */ }", "correct": true },
        { "text": "try (/* code */) { /* code */ } catch (Exception e) { /* code */ }", "correct": false },
        { "text": "try { /* code */ } finally { /* code */ }", "correct": false },
        { "text": "try (/* code */) { /* code */ }", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'catch' clause in a try-catch statement?",
      "answers": [
        { "text": "To execute code if no exception is thrown", "correct": false },
        { "text": "To handle the exception", "correct": true },
        { "text": "To enclose the code that might throw an exception", "correct": false },
        { "text": "To re-raise the exception", "correct": false }
      ]
    },
    {
      "question": "What is the correct way to check if an object is null in Java?",
      "answers": [
        { "text": "object == null", "correct": true },
        { "text": "object.isNull()", "correct": false },
        { "text": "isNull(object)", "correct": false },
        { "text": "object = null", "correct": false }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'try' block in a try-catch statement?",
      "answers": [
        { "text": "To handle the exception", "correct": false },
        { "text": "To execute code if no exception is thrown", "correct": false },
        { "text": "To catch and handle an exception", "correct": false },
        { "text": "To enclose the code that might throw an exception", "correct": true }
      ]
    },
    {
      "question": "In Java, what is the purpose of the 'this()' call in a constructor?",
      "answers": [
        { "text": "To call a method from the superclass", "correct": false },
        { "text": "To create a new instance of the superclass", "correct": false },
        { "text": "To call the constructor of the current class", "correct": true },
        { "text": "To access a static variable of the current class", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of the 'throw' statement in Java?",
      "answers": [
        { "text": "To catch an exception", "correct": false },
        { "text": "To specify a variable type", "correct": false },
        { "text": "To declare a method", "correct": false },
        { "text": "To explicitly throw an exception", "correct": true }
      ]
    },
    {
      question: "In Java, what is the purpose of the 'enum' keyword?",
      "answers": [
        { "text": "To declare a new variable", "correct": false },
        { "text": "To declare a constant", "correct": false },
        { "text": "To define an enumeration type", "correct": true },
        { "text": "To create a new instance of a class", "correct": false }
      ]
    },
    {
      question: "What is the correct way to create a new thread in Java?",
      answers: [
        { text: "new Thread(myRunnable)", correct: true },
        { text: "Thread.start(myRunnable)", correct: false },
        { text: "Thread.run(myRunnable)", correct: false },
        { text: "run new Thread(myRunnable)", correct: false },
      ],
    },
    {
      question: "In Java, what is the purpose of the 'enum' keyword?",
      answers: [
        { text: "To declare a new variable", correct: false },
        { text: "To declare a constant", correct: false },
        { text: "To define an enumeration type", correct: true },
        { text: "To create a new instance of a class", correct: false },
      ],
    },
    {
      question: "What is the correct syntax for a 'for-each' loop in Java?",
      answers: [
        { text: "for (i = 0; i < array.length; i++) { /* code */ }", correct: false },
        { text: "for (int i : array) { /* code */ }", correct: true },
        { text: "foreach (int i in array) { /* code */ }", correct: false },
        { text: "for-each (int i : array) { /* code */ }", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'synchronized' keyword in Java?",
      answers: [
        { text: "To make a method static", correct: false },
        { text: "To synchronize threads and control access to an object or method", correct: true },
        { text: "To declare a variable", correct: false },
        { text: "To create a singleton class", correct: false },
      ],
    },
    {
      question: "In Java, what is the purpose of the 'super()' call in a constructor?",
      answers: [
        { text: "To call a method from the superclass", correct: false },
        { text: "To create a new instance of the superclass", correct: false },
        { text: "To call the constructor of the superclass", correct: true },
        { text: "To access a static variable of the superclass", correct: false },
      ],
    },
    {
      question: "What is the correct syntax for a 'while' loop in Java?",
      answers: [
        { text: "while (condition) { /* code */ }", correct: true },
        { text: "for (int i = 0; i < 5; i++) { /* code */ }", correct: false },
        { text: "do { /* code */ } while (condition);", correct: false },
        { text: "repeat { /* code */ } until (condition);", correct: false },
      ],
    },
    {
      question: "In Java, what is the purpose of the 'default' case in a 'switch' statement?",
      answers: [
        { text: "To specify the default value of a variable", correct: false },
        { text: "To execute code if no other case matches", correct: true },
        { text: "To define a default method for an interface", correct: false },
        { text: "To provide a default constructor for a class", correct: false },
      ],
    },
    {
      question: "What is the correct way to declare a constant in Java?",
      answers: [
        { text: "const int MY_CONSTANT = 10;", correct: false },
        { text: "final int MY_CONSTANT = 10;", correct: true },
        { text: "static int MY_CONSTANT = 10;", correct: false },
        { text: "constant int MY_CONSTANT = 10;", correct: false },
      ],
    },
    // Add more questions for Java
  ],
  DBMS:[
    {
      question: "What does DBMS stand for?",
      answers: [
        { text: "Database Management System", correct: true },
        { text: "Data Backup and Management System", correct: false },
        { text: "Digital Business Management Software", correct: false },
        { text: "Dynamic Binary Mapping System", correct: false },
      ],
    },
    {
      question: "Which of the following is not a type of database model?",
      answers: [
        { text: "Relational Database Model", correct: false },
        { text: "Hierarchical Database Model", correct: false },
        { text: "Circular Database Model", correct: true },
        { text: "Network Database Model", correct: false },
      ],
    },
    {
      question: "What is a primary key in a relational database?",
      answers: [
        { text: "A key used for opening the database", correct: false },
        { text: "A key used for encrypting data", correct: false },
        { text: "A unique identifier for a record in a table", correct: true },
        { text: "A key used for sorting records", correct: false },
      ],
    },
    {
      question: "What is normalization in the context of database design?",
      answers: [
        { text: "A process of optimizing database performance", correct: false },
        { text: "A process of organizing data to minimize redundancy", correct: true },
        { text: "A process of converting data to a different format", correct: false },
        { text: "A process of encrypting database tables", correct: false },
      ],
    },
    {
      question: "Which SQL keyword is used to retrieve specific data from a database?",
      answers: [
        { text: "SELECT", correct: true },
        { text: "SEARCH", correct: false },
        { text: "EXTRACT", correct: false },
        { text: "FETCH", correct: false },
      ],
    },
    {
      question: "What is the purpose of the GROUP BY clause in SQL?",
      answers: [
        { text: "To filter records based on a condition", correct: false },
        { text: "To order records in ascending or descending order", correct: false },
        { text: "To group rows that have the same values in specified columns", correct: true },
        { text: "To join multiple tables in a query", correct: false },
      ],
    },
    {
      question: "In database terminology, what does ACID stand for?",
      answers: [
        { text: "Allergic Conditions in Databases", correct: false },
        { text: "Atomicity, Consistency, Isolation, Durability", correct: true },
        { text: "Advanced Computer Information Database", correct: false },
        { text: "Association of Database Integrators and Consultants", correct: false },
      ],
    },
    {
      question: "What is the purpose of the JOIN operation in SQL?",
      answers: [
        { text: "To retrieve data from a single table", correct: false },
        { text: "To combine rows from two or more tables based on a related column", correct: true },
        { text: "To delete records from a table", correct: false },
        { text: "To insert new records into a table", correct: false },
      ],
    },
    {
      question: "What is a foreign key in a relational database?",
      answers: [
        { text: "A key used for opening foreign databases", correct: false },
        { text: "A key used for foreign currency transactions", correct: false },
        { text: "A column that references the primary key of another table", correct: true },
        { text: "A key used for sorting records in a foreign order", correct: false },
      ],
    },
    {
      question: "Which of the following is an example of a NoSQL database?",
      answers: [
        { text: "MySQL", correct: false },
        { text: "MongoDB", correct: true },
        { text: "Oracle Database", correct: false },
        { text: "Microsoft SQL Server", correct: false },
      ],
    },
    {
      question: "What is the purpose of the HAVING clause in SQL?",
      answers: [
        { text: "To filter records based on a condition", correct: true },
        { text: "To order records in ascending or descending order", correct: false },
        { text: "To group rows that have the same values in specified columns", correct: false },
        { text: "To join multiple tables in a query", correct: false },
      ],
    },
    {
      question: "Which database model organizes data in a tree-like structure?",
      answers: [
        { text: "Relational Database Model", correct: false },
        { text: "Hierarchical Database Model", correct: true },
        { text: "Network Database Model", correct: false },
        { text: "Document-oriented Database Model", correct: false },
      ],
    },
    {
      question: "What is the purpose of the COMMIT statement in SQL?",
      answers: [
        { text: "To roll back a transaction", correct: false },
        { text: "To permanently save changes made during the current transaction", correct: true },
        { text: "To retrieve data from a database", correct: false },
        { text: "To create a new table", correct: false },
      ],
    },
    {
      question: "Which of the following is not a type of database schema?",
      answers: [
        { text: "Physical Schema", correct: false },
        { text: "Logical Schema", correct: false },
        { text: "Foreign Schema", correct: true },
        { text: "External Schema", correct: false },
      ],
    },
    {
      question: "What is the purpose of the ORDER BY clause in SQL?",
      answers: [
        { text: "To filter records based on a condition", correct: false },
        { text: "To order records in ascending or descending order", correct: true },
        { text: "To group rows that have the same values in specified columns", correct: false },
        { text: "To join multiple tables in a query", correct: false },
      ],
    },
    {
      question: "Which type of database architecture allows multiple users to access the database simultaneously without interference?",
      answers: [
        { text: "Single-user Database Architecture", correct: false },
        { text: "Centralized Database Architecture", correct: false },
        { text: "Distributed Database Architecture", correct: true },
        { text: "Hierarchical Database Architecture", correct: false },
      ],
    },
    {
      question: "What is the purpose of the ROLLBACK statement in SQL?",
      answers: [
        { text: "To roll forward a transaction", correct: false },
        { text: "To permanently save changes made during the current transaction", correct: false },
        { text: "To undo changes made during the current transaction", correct: true },
        { text: "To create a new table", correct: false },
      ],
    },
    {
      question: "Which normal form eliminates all partial dependencies?",
      answers: [
        { text: "First Normal Form (1NF)", correct: false },
        { text: "Second Normal Form (2NF)", correct: false },
        { text: "Third Normal Form (3NF)", correct: true },
        { text: "Boyce-Codd Normal Form (BCNF)", correct: false },
      ],
    },
    {
      question: "What is a view in a relational database?",
      answers: [
        { text: "A virtual table based on the result of a SELECT query", correct: true },
        { text: "A physical table containing stored data", correct: false },
        { text: "A table used for storing views of external data", correct: false },
        { text: "A special type of index", correct: false },
      ],
    },
    {
      question: "Which SQL statement is used to remove data from a database?",
      answers: [
        { text: "DELETE", correct: true },
        { text: "REMOVE", correct: false },
        { text: "ERASE", correct: false },
        { text: "TRUNCATE", correct: false },
      ],
    },
    {
      question: "What is a deadlock in the context of database systems?",
      answers: [
        { text: "A situation where all transactions are successfully completed", correct: false },
        { text: "A situation where two or more transactions are waiting for each other to release locks", correct: true },
        { text: "A situation where a transaction is rolled back", correct: false },
        { text: "A situation where a database is locked for maintenance", correct: false },
      ],
    },
    {
      question: "Which database language is used to interact with a relational database management system (RDBMS)?",
      answers: [
        { text: "Java", correct: false },
        { text: "C++", correct: false },
        { text: "Structured Query Language (SQL)", correct: true },
        { text: "Python", correct: false },
      ],
    },
    {
      question: "What is the purpose of the CASCADE option in a foreign key constraint?",
      answers: [
        { text: "To prevent updates to the referenced key", correct: false },
        { text: "To update the referenced key when the primary key is updated", correct: true },
        { text: "To automatically create a new foreign key", correct: false },
        { text: "To delete the referenced key when the primary key is deleted", correct: false },
      ],
    },
    {
      question: "Which of the following is a key feature of a distributed database system?",
      answers: [
        { text: "Centralized control and management", correct: false },
        { text: "Low data redundancy", correct: false },
        { text: "High availability and fault tolerance", correct: true },
        { text: "Limited scalability", correct: false },
      ],
    },
    {
      question: "What is the purpose of the TRUNCATE statement in SQL?",
      answers: [
        { text: "To roll back a transaction", correct: false },
        { text: "To permanently save changes made during the current transaction", correct: false },
        { text: "To undo changes made during the current transaction", correct: false },
        { text: "To quickly delete all rows from a table", correct: true },
      ],
    },
    {
      question: "Which type of index organizes the data in the same order as the physical order of the data rows?",
      answers: [
        { text: "Clustered Index", correct: true },
        { text: "Non-clustered Index", correct: false },
        { text: "Bitmap Index", correct: false },
        { text: "Sparse Index", correct: false },
      ],
    },
    {
      question: "What is the purpose of the COMMIT statement in SQL?",
      answers: [
        { text: "To roll back a transaction", correct: false },
        { text: "To permanently save changes made during the current transaction", correct: true },
        { text: "To retrieve data from a database", correct: false },
        { text: "To create a new table", correct: false },
      ],
    },
    {
      question: "Which normal form eliminates all transitive dependencies?",
      answers: [
        { text: "First Normal Form (1NF)", correct: false },
        { text: "Second Normal Form (2NF)", correct: true },
        { text: "Third Normal Form (3NF)", correct: false },
        { text: "Boyce-Codd Normal Form (BCNF)", correct: false },
      ],
    },
    {
      question: "What is the purpose of the UNION operator in SQL?",
      answers: [
        { text: "To combine rows from two or more tables without duplicates", correct: true },
        { text: "To join multiple tables in a query", correct: false },
        { text: "To filter records based on a condition", correct: false },
        { text: "To order records in ascending or descending order", correct: false },
      ],
    },
    {
      question: "Which of the following is not a type of database index?",
      answers: [
        { text: "Clustered Index", correct: false },
        { text: "Foreign Key Index", correct: true },
        { text: "Non-clustered Index", correct: false },
        { text: "Bitmap Index", correct: false },
      ],
    },
    {
      question: "What is the purpose of the DML (Data Manipulation Language) in SQL?",
      answers: [
        { text: "To define the structure of the database", correct: false },
        { text: "To manipulate data in the database", correct: true },
        { text: "To control access to the database", correct: false },
        { text: "To manage database transactions", correct: false },
      ],
    },
    {
      question: "Which of the following is a benefit of using stored procedures in a database?",
      answers: [
        { text: "Increased data redundancy", correct: false },
        { text: "Improved security and access control", correct: true },
        { text: "Reduced query performance", correct: false },
        { text: "Limited scalability", correct: false },
      ],
    },
    {
      question: "What is the purpose of the WHERE clause in SQL?",
      answers: [
        { text: "To order records in ascending or descending order", correct: false },
        { text: "To group rows that have the same values in specified columns", correct: false },
        { text: "To filter records based on a condition", correct: true },
        { text: "To join multiple tables in a query", correct: false },
      ],
    },
    {
      question: "Which of the following statements is true about a primary key in a relational database?",
      answers: [
        { text: "It can have NULL values.", correct: false },
        { text: "It must be unique within the table.", correct: true },
        { text: "It can be updated after insertion.", correct: false },
        { text: "It is not used for indexing.", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL LIKE operator?",
      answers: [
        { text: "To perform arithmetic operations", correct: false },
        { text: "To compare two columns for equality", correct: false },
        { text: "To search for a specified pattern in a column", correct: true },
        { text: "To check for the existence of a table", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL COUNT() function?",
      answers: [
        { text: "To calculate the average value of a column", correct: false },
        { text: "To count the number of rows in a result set or a specified condition", correct: true },
        { text: "To concatenate values of two or more columns", correct: false },
        { text: "To retrieve the maximum value from a column", correct: false },
      ],
    },
    {
      question: "Which of the following statements is true about the SQL INNER JOIN?",
      answers: [
        { text: "It returns all rows when there is a match in either table.", correct: false },
        { text: "It returns only the rows with matching values in both tables.", correct: true },
        { text: "It includes rows from the left table even if there is no match in the right table.", correct: false },
        { text: "It includes rows from the right table even if there is no match in the left table.", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL GROUP BY clause?",
      answers: [
        { text: "To filter records based on a condition", correct: false },
        { text: "To order records in ascending or descending order", correct: false },
        { text: "To group rows that have the same values in specified columns", correct: true },
        { text: "To join multiple tables in a query", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL CONTINUE statement?",
      answers: [
        { text: "To continue a loop in a stored procedure", correct: true },
        { text: "To skip the next iteration of a loop", correct: false },
        { text: "To stop the execution of a loop", correct: false },
        { text: "To bypass the condition in an IF statement", correct: false },
      ],
    },
    {
      question: "Which of the following is an example of a SQL DDL (Data Definition Language) statement?",
      answers: [
        { text: "SELECT", correct: false },
        { text: "INSERT", correct: false },
        { text: "CREATE TABLE", correct: true },
        { text: "UPDATE", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL AVG() function?",
      answers: [
        { text: "To find the maximum value in a column", correct: false },
        { text: "To calculate the average value of a column", correct: true },
        { text: "To count the number of rows in a table", correct: false },
        { text: "To retrieve the first value in a column", correct: false },
      ],
    },
    {
      question: "Which of the following is a characteristic of a transaction in a database?",
      answers: [
        { text: "It cannot be rolled back once committed.", correct: false },
        { text: "It is not affected by concurrent transactions.", correct: false },
        { text: "It ensures the database remains in a consistent state.", correct: true },
        { text: "It is a single SQL statement.", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL MAX() function?",
      answers: [
        { text: "To find the minimum value in a column", correct: false },
        { text: "To calculate the average value of a column", correct: false },
        { text: "To count the number of rows in a table", correct: false },
        { text: "To retrieve the maximum value from a column", correct: true },
      ],
    },
    {
      question: "What is the purpose of the SQL NOT NULL constraint?",
      answers: [
        { text: "To allow NULL values in a column", correct: false },
        { text: "To prevent NULL values in a column", correct: true },
        { text: "To define a unique constraint on a column", correct: false },
        { text: "To specify a default value for a column", correct: false },
      ],
    },
    {
      question: "Which of the following is an advantage of using a stored procedure in a database?",
      answers: [
        { text: "Increased data redundancy", correct: false },
        { text: "Improved security and access control", correct: true },
        { text: "Decreased execution control", correct: false },
        { text: "Limited data integrity", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL DISTINCT keyword?",
      answers: [
        { text: "To filter records based on a condition", correct: false },
        { text: "To order records in ascending or descending order", correct: false },
        { text: "To eliminate duplicate values from a result set", correct: true },
        { text: "To join multiple tables in a query", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL PRIMARY KEY constraint?",
      answers: [
        { text: "To define a unique constraint on a column", correct: true },
        { text: "To prevent NULL values in a column", correct: false },
        { text: "To specify a default value for a column", correct: false },
        { text: "To allow NULL values in a column", correct: false },
      ],
    },
    {
      question: "Which of the following is a disadvantage of using a distributed database system?",
      answers: [
        { text: "Improved fault tolerance", correct: false },
        { text: "Enhanced scalability", correct: false },
        { text: "Increased complexity of management", correct: true },
        { text: "Reduced data redundancy", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL UPDATE statement?",
      answers: [
        { text: "To insert new records into a table", correct: false },
        { text: "To permanently save changes made during the current transaction", correct: false },
        { text: "To undo changes made during the current transaction", correct: false },
        { text: "To modify existing records in a table", correct: true },
      ],
    },
    {
      question: "Which of the following is a characteristic of a primary key in a relational database?",
      answers: [
        { text: "It can have NULL values.", correct: false },
        { text: "It must be unique within the table.", correct: true },
        { text: "It can be updated after insertion.", correct: false },
        { text: "It is not used for indexing.", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL CASE statement?",
      answers: [
        { text: "To filter records based on a condition", correct: false },
        { text: "To order records in ascending or descending order", correct: false },
        { text: "To perform conditional logic in a query", correct: true },
        { text: "To join multiple tables in a query", correct: false },
      ],
    },
    {
      question: "Which of the following statements is true about a foreign key in a relational database?",
      answers: [
        { text: "It is used for foreign currency transactions.", correct: false },
        { text: "It is a column that references the primary key of another table.", correct: true },
        { text: "It must be unique within the table.", correct: false },
        { text: "It is a unique identifier for a record in a table.", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL MIN() function?",
      answers: [
        { text: "To find the maximum value in a column", correct: false },
        { text: "To calculate the average value of a column", correct: false },
        { text: "To count the number of rows in a table", correct: false },
        { text: "To retrieve the minimum value from a column", correct: true },
      ],
    },
    {
      question: "Which of the following is an example of a SQL DML (Data Manipulation Language) statement?",
      answers: [
        { text: "CREATE TABLE", correct: false },
        { text: "SELECT", correct: true },
        { text: "ALTER TABLE", correct: false },
        { text: "DROP TABLE", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL BETWEEN operator?",
      answers: [
        { text: "To perform arithmetic operations", correct: false },
        { text: "To compare two columns for equality", correct: false },
        { text: "To search for a specified pattern in a column", correct: false },
        { text: "To filter records based on a range of values", correct: true },
      ],
    },
    {
      question: "What is the purpose of the SQL IN keyword?",
      answers: [
        { text: "To perform arithmetic operations", correct: false },
        { text: "To compare two columns for equality", correct: false },
        { text: "To search for a specified pattern in a column", correct: false },
        { text: "To filter records based on a specified list of values", correct: true },
      ],
    },
    {
      question: "Which of the following is a benefit of using indexes in a database?",
      answers: [
        { text: "Increased data redundancy", correct: false },
        { text: "Decreased search performance", correct: false },
        { text: "Improved query performance", correct: true },
        { text: "Limited data integrity", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL LIKE operator?",
      answers: [
        { text: "To perform arithmetic operations", correct: false },
        { text: "To compare two columns for equality", correct: false },
        { text: "To search for a specified pattern in a column", correct: true },
        { text: "To check for the existence of a table", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL COUNT() function?",
      answers: [
        { text: "To calculate the average value of a column", correct: false },
        { text: "To count the number of rows in a result set or a specified condition", correct: true },
        { text: "To concatenate values of two or more columns", correct: false },
        { text: "To retrieve the maximum value from a column", correct: false },
      ],
    },
    {
      question: "Which of the following statements is true about the SQL INNER JOIN?",
      answers: [
        { text: "It returns all rows when there is a match in either table.", correct: false },
        { text: "It returns only the rows with matching values in both tables.", correct: true },
        { text: "It includes rows from the left table even if there is no match in the right table.", correct: false },
        { text: "It includes rows from the right table even if there is no match in the left table.", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL GROUP BY clause?",
      answers: [
        { text: "To filter records based on a condition", correct: false },
        { text: "To order records in ascending or descending order", correct: false },
        { text: "To group rows that have the same values in specified columns", correct: true },
        { text: "To join multiple tables in a query", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL CONTINUE statement?",
      answers: [
        { text: "To continue a loop in a stored procedure", correct: true },
        { text: "To skip the next iteration of a loop", correct: false },
        { text: "To stop the execution of a loop", correct: false },
        { text: "To bypass the condition in an IF statement", correct: false },
      ],
    },
    {
      question: "Which of the following is an example of a SQL DDL (Data Definition Language) statement?",
      answers: [
        { text: "SELECT", correct: false },
        { text: "INSERT", correct: false },
        { text: "CREATE TABLE", correct: true },
        { text: "UPDATE", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL AVG() function?",
      answers: [
        { text: "To find the maximum value in a column", correct: false },
        { text: "To calculate the average value of a column", correct: true },
        { text: "To count the number of rows in a table", correct: false },
        { text: "To retrieve the first value in a column", correct: false },
      ],
    },
    {
      question: "Which of the following is a characteristic of a transaction in a database?",
      answers: [
        { text: "It cannot be rolled back once committed.", correct: false },
        { text: "It is not affected by concurrent transactions.", correct: false },
        { text: "It ensures the database remains in a consistent state.", correct: true },
        { text: "It is a single SQL statement.", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL MAX() function?",
      answers: [
        { text: "To find the minimum value in a column", correct: false },
        { text: "To calculate the average value of a column", correct: false },
        { text: "To count the number of rows in a table", correct: false },
        { text: "To retrieve the maximum value from a column", correct: true },
      ],
    },
    {
      question: "What is the purpose of the SQL NOT NULL constraint?",
      answers: [
        { text: "To allow NULL values in a column", correct: false },
        { text: "To prevent NULL values in a column", correct: true },
        { text: "To define a unique constraint on a column", correct: false },
        { text: "To specify a default value for a column", correct: false },
      ],
    },
    {
      question: "Which of the following is an advantage of using a stored procedure in a database?",
      answers: [
        { text: "Increased data redundancy", correct: false },
        { text: "Improved security and access control", correct: true },
        { text: "Decreased execution control", correct: false },
        { text: "Limited data integrity", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL DISTINCT keyword?",
      answers: [
        { text: "To filter records based on a condition", correct: false },
        { text: "To order records in ascending or descending order", correct: false },
        { text: "To eliminate duplicate values from a result set", correct: true },
        { text: "To join multiple tables in a query", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL PRIMARY KEY constraint?",
      answers: [
        { text: "To define a unique constraint on a column", correct: true },
        { text: "To prevent NULL values in a column", correct: false },
        { text: "To specify a default value for a column", correct: false },
        { text: "To allow NULL values in a column", correct: false },
      ],
    },
    {
      question: "Which of the following is a disadvantage of using a distributed database system?",
      answers: [
        { text: "Improved fault tolerance", correct: false },
        { text: "Enhanced scalability", correct: false },
        { text: "Increased complexity of management", correct: true },
        { text: "Reduced data redundancy", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL UPDATE statement?",
      answers: [
        { text: "To insert new records into a table", correct: false },
        { text: "To permanently save changes made during the current transaction", correct: false },
        { text: "To undo changes made during the current transaction", correct: false },
        { text: "To modify existing records in a table", correct: true },
      ],
    },
    {
      question: "Which of the following is a characteristic of a primary key in a relational database?",
      answers: [
        { text: "It can have NULL values.", correct: false },
        { text: "It must be unique within the table.", correct: true },
        { text: "It can be updated after insertion.", correct: false },
        { text: "It is not used for indexing.", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL CASE statement?",
      answers: [
        { text: "To filter records based on a condition", correct: false },
        { text: "To order records in ascending or descending order", correct: false },
        { text: "To perform conditional logic in a query", correct: true },
        { text: "To join multiple tables in a query", correct: false },
      ],
    },
    {
      question: "Which of the following statements is true about a foreign key in a relational database?",
      answers: [
        { text: "It is used for foreign currency transactions.", correct: false },
        { text: "It is a column that references the primary key of another table.", correct: true },
        { text: "It must be unique within the table.", correct: false },
        { text: "It is a unique identifier for a record in a table.", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL MIN() function?",
      answers: [
        { text: "To find the maximum value in a column", correct: false },
        { text: "To calculate the average value of a column", correct: false },
        { text: "To count the number of rows in a table", correct: false },
        { text: "To retrieve the minimum value from a column", correct: true },
      ],
    },
    {
      question: "Which of the following is an example of a SQL DML (Data Manipulation Language) statement?",
      answers: [
        { text: "CREATE TABLE", correct: false },
        { text: "SELECT", correct: true },
        { text: "ALTER TABLE", correct: false },
        { text: "DROP TABLE", correct: false },
      ],
    },
    {
      question: "What is the purpose of the SQL BETWEEN operator?",
      answers: [
        { text: "To perform arithmetic operations", correct: false },
        { text: "To compare two columns for equality", correct: false },
        { text: "To search for a specified pattern in a column", correct: false },
        { text: "To filter records based on a range of values", correct: true },
      ],
    },
    {
      question: "What is the purpose of the SQL IN keyword?",
      answers: [
        { text: "To perform arithmetic operations", correct: false },
        { text: "To compare two columns for equality", correct: false },
        { text: "To search for a specified pattern in a column", correct: false },
        { text: "To filter records based on a specified list of values", correct: true },
      ],
    },
    {
      question: "Which of the following is a benefit of using indexes in a database?",
      answers: [
        { text: "Increased data redundancy", correct: false },
        { text: "Decreased search performance", correct: false },
        { text: "Improved query performance", correct: true },
        { text: "Limited data integrity", correct: false },
      ],
    },
  ],
  OS: [
    {
      question: "What is the primary purpose of an operating system?",
      answers: [
        { text: "Manage hardware resources", correct: true },
        { text: "Run applications", correct: false },
        { text: "Provide internet access", correct: false },
        { text: "Create user interfaces", correct: false },
      ],
    },
    {
      question: "Which component is responsible for managing the allocation of resources to different processes?",
      answers: [
        { text: "Kernel", correct: false },
        { text: "Scheduler", correct: true },
        { text: "File system", correct: false },
        { text: "Device drivers", correct: false },
      ],
    },
    {
      question: "What is the purpose of a device driver in an operating system?",
      answers: [
        { text: "Manage memory", correct: false },
        { text: "Provide user interfaces", correct: false },
        { text: "Interface with hardware devices", correct: true },
        { text: "Schedule processes", correct: false },
      ],
    },
    {
      question: "Which memory management technique allows processes to be moved between main memory and disk?",
      answers: [
        { text: "Paging", correct: false },
        { text: "Segmentation", correct: false },
        { text: "Virtual memory", correct: true },
        { text: "Cache memory", correct: false },
      ],
    },
    {
      question: "What is the function of the File Allocation Table (FAT) in file systems?",
      answers: [
        { text: "Manage file permissions", correct: false },
        { text: "Store file metadata", correct: false },
        { text: "Keep track of file allocation on disk", correct: true },
        { text: "Encrypt files", correct: false },
      ],
    },
    {
      question: "Which scheduling algorithm selects the process with the shortest total remaining processing time?",
      answers: [
        { text: "First-Come-First-Serve (FCFS)", correct: false },
        { text: "Round Robin", correct: false },
        { text: "Shortest Job Next (SJN)", correct: true },
        { text: "Priority Scheduling", correct: false },
      ],
    },
    {
      question: "What is the role of the Kernel in an operating system?",
      answers: [
        { text: "Manage file systems", correct: false },
        { text: "Manage hardware resources", correct: true },
        { text: "Run applications", correct: false },
        { text: "Handle network communication", correct: false },
      ],
    },
    {
      question: "In the world of operating systems, what does the term 'kangaroo scheduling' refer to?",
      answers: [
        { text: "A scheduling algorithm based on the movements of kangaroos", correct: false },
        { text: "A method of jumping between different processes in a non-sequential order", correct: true },
        { text: "A wildlife conservation initiative for kangaroos using computer algorithms", correct: false },
        { text: "A term coined by developers for spontaneous and unpredictable task execution", correct: false },
      ],
    },
    
    {
      question: "In the context of file systems, what does 'RAID' stand for?",
      answers: [
        { text: "Redundant Array of Independent Disks", correct: true },
        { text: "Random Access Instruction Device", correct: false },
        { text: "Read After Invalid Data", correct: false },
        { text: "Remote Access to Integrated Directory", correct: false },
      ],
    },
    {
      question: "Which command is used to display the current working directory in a Unix-based operating system?",
      answers: [
        { text: "ls", correct: false },
        { text: "cd", correct: false },
        { text: "pwd", correct: true },
        { text: "dir", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'grep' command in Unix-like operating systems?",
      answers: [
        { text: "Search for text within files", correct: true },
        { text: "Create a new directory", correct: false },
        { text: "Display system information", correct: false },
        { text: "Move files between directories", correct: false },
      ],
    },
    {
      question: "Which file system is commonly used in Linux-based operating systems?",
      answers: [
        { text: "NTFS", correct: false },
        { text: "FAT32", correct: false },
        { text: "Ext4", correct: true },
        { text: "HFS+", correct: false },
      ],
    },
    {
      question: "In the context of networking, what does 'LAN' stand for?",
      answers: [
        { text: "Local Area Network", correct: true },
        { text: "Large Area Network", correct: false },
        { text: "Low-level Access Node", correct: false },
        { text: "Logical Application Node", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'cron' service in Unix-like operating systems?",
      answers: [
        { text: "Monitor system processes in real-time", correct: false },
        { text: "Schedule and automate tasks", correct: true },
        { text: "Change file permissions", correct: false },
        { text: "List currently running processes", correct: false },
      ],
    },
    {
      question: "In the context of security, what is 'encryption'?",
      answers: [
        { text: "A method of compressing files", correct: false },
        { text: "A process of converting data into a code to prevent unauthorized access", correct: true },
        { text: "A type of file system", correct: false },
        { text: "A mechanism for managing user authentication", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'whoami' command in Unix-like operating systems?",
      answers: [
        { text: "Display information about the current user", correct: true },
        { text: "List currently running processes", correct: false },
        { text: "Change file permissions", correct: false },
        { text: "Search for files", correct: false },
      ],
    },
    {
      question: "In the context of file systems, what is a 'symbolic link'?",
      answers: [
        { text: "A shortcut to a file or directory", correct: true },
        { text: "A type of encryption algorithm", correct: false },
        { text: "A file permission setting", correct: false },
        { text: "A method of compressing files", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'grep' command in Unix-like operating systems?",
      answers: [
        { text: "Search for text within files", correct: true },
        { text: "Create a new directory", correct: false },
        { text: "Display system information", correct: false },
        { text: "Move files between directories", correct: false },
      ],
    },
    {
      question: "In the context of process management, what is 'daemon'?",
      answers: [
        { text: "A process that consumes excessive system resources", correct: false },
        { text: "A background process that runs continuously", correct: true },
        { text: "A process with high priority", correct: false },
        { text: "A process that executes in the foreground", correct: false },
      ],
    },
    {
      question: "In the context of security, what is 'phishing'?",
      answers: [
        { text: "A method of encrypting files", correct: false },
        { text: "An attempt to deceive individuals into revealing sensitive information", correct: true },
        { text: "A firewall configuration", correct: false },
        { text: "A network security protocol", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'ifconfig' command in Unix-like operating systems?",
      answers: [
        { text: "Display system information", correct: false },
        { text: "Configure network settings", correct: true },
        { text: "Search for files", correct: false },
        { text: "Manage user accounts", correct: false },
      ],
    },
    {
      question: "In the context of memory management, what is 'swapping'?",
      answers: [
        { text: "Optimizing disk access", correct: false },
        { text: "Moving entire processes between main memory and disk", correct: true },
        { text: "Encrypting data in memory", correct: false },
        { text: "Allocating memory for a new process", correct: false },
      ],
    },
    {
      question: "In the context of networking, what is 'DHCP'?",
      answers: [
        { text: "Dynamic Host Configuration Protocol - assigns IP addresses to devices on a network", correct: true },
        { text: "Data Handling and Control Protocol", correct: false },
        { text: "Domain Host Configuration Process", correct: false },
        { text: "Directory Hierarchy Configuration Protocol", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'netstat' command in Unix-like operating systems?",
      answers: [
        { text: "List currently running processes", correct: false },
        { text: "Display system information", correct: false },
        { text: "Show network statistics and connections", correct: true },
        { text: "Change file permissions", correct: false },
      ],
    },
    {
      question: "In the context of process management, what is 'fork()' in Unix-like operating systems?",
      answers: [
        { text: "Terminate the current process", correct: false },
        { text: "Create a new process", correct: true },
        { text: "Pause the execution of a process", correct: false },
        { text: "Merge two processes", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'ping' command in networking?",
      answers: [
        { text: "Test the reachability of a host on a network", correct: true },
        { text: "Monitor system processes in real-time", correct: false },
        { text: "Change file permissions", correct: false },
        { text: "List currently running processes", correct: false },
      ],
    },
    {
      question: "In the context of security, what is 'antivirus'?",
      answers: [
        { text: "A type of firewall configuration", correct: false },
        { text: "A software designed to detect and remove viruses from a computer", correct: true },
        { text: "A method of encrypting files", correct: false },
        { text: "An authentication mechanism", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'kill' command in Unix-like operating systems?",
      answers: [
        { text: "Terminate a process", correct: true },
        { text: "Display system information", correct: false },
        { text: "Create a new directory", correct: false },
        { text: "List files in a directory", correct: false },
      ],
    },
    {
      question: "In the context of file systems, what is 'mounting'?",
      answers: [
        { text: "Attaching a storage device to the file system hierarchy", correct: true },
        { text: "Creating a symbolic link to a file or directory", correct: false },
        { text: "Optimizing disk access", correct: false },
        { text: "A file permission setting", correct: false },
      ],
    },
    {
      question: "In the context of security, what is 'biometrics'?",
      answers: [
        { text: "A type of encryption algorithm", correct: false },
        { text: "Authentication based on unique physical or behavioral characteristics", correct: true },
        { text: "A method of compressing files", correct: false },
        { text: "A network security protocol", correct: false },
      ],
    },
    {
      question: "In the context of memory management, what is 'fragmentation'?",
      answers: [
        { text: "Optimizing disk access", correct: false },
        { text: "The division of memory into small, non-contiguous blocks", correct: true },
        { text: "Encrypting data in memory", correct: false },
        { text: "Allocating memory for a new process", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'ip' command in Unix-like operating systems?",
      answers: [
        { text: "Display system information", correct: false },
        { text: "Configure network settings", correct: true },
        { text: "Search for files", correct: false },
        { text: "Manage user accounts", correct: false },
      ],
    },
    {
      question: "In the context of process management, what is 'zombie process'?",
      answers: [
        { text: "A process that consumes excessive system resources", correct: false },
        { text: "A process that has terminated but still has an entry in the process table", correct: true },
        { text: "A process with high priority", correct: false },
        { text: "A process that executes in the background", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'ls' command in Unix-like operating systems?",
      answers: [
        { text: "List currently running processes", correct: false },
        { text: "Display system information", correct: false },
        { text: "List files in a directory", correct: true },
        { text: "Change file permissions", correct: false },
      ],
    },
    {
      question: "In the context of memory management, what is 'thrashing'?",
      answers: [
        { text: "Optimizing disk access", correct: false },
        { text: "Excessive swapping of pages between memory and disk", correct: true },
        { text: "Encrypting data in memory", correct: false },
        { text: "Allocating memory for a new process", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'sed' command in Unix-like operating systems?",
      answers: [
        { text: "Search for files", correct: false },
        { text: "Display system information", correct: false },
        { text: "Stream editor for text transformation", correct: true },
        { text: "Configure network settings", correct: false },
      ],
    },
    {
      question: "In the context of file systems, what is 'journaling'?",
      answers: [
        { text: "Recording file access in a log", correct: true },
        { text: "Encrypting files", correct: false },
        { text: "Managing file permissions", correct: false },
        { text: "Organizing files in a hierarchical structure", correct: false },
      ],
    },
    {
      question: "In the context of security, what is 'firewall'?",
      answers: [
        { text: "A physical barrier to protect the computer", correct: false },
        { text: "A software or hardware-based network security system", correct: true },
        { text: "A type of antivirus software", correct: false },
        { text: "A process of encrypting files", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'awk' command in Unix-like operating systems?",
      answers: [
        { text: "Search for files", correct: false },
        { text: "Display system information", correct: false },
        { text: "Pattern scanning and processing language", correct: true },
        { text: "Configure network settings", correct: false },
      ],
    },
    {
      question: "In the context of file systems, what is 'RAID'?",
      answers: [
        { text: "A method of organizing files hierarchically", correct: false },
        { text: "A file permission setting", correct: false },
        { text: "A Redundant Array of Independent Disks for data storage", correct: true },
        { text: "A device driver for disk storage", correct: false },
      ],
    },
    {
      question: "In the context of security, what is 'biometrics'?",
      answers: [
        { text: "A type of encryption algorithm", correct: false },
        { text: "Authentication based on unique physical or behavioral characteristics", correct: true },
        { text: "A method of compressing files", correct: false },
        { text: "A network security protocol", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'uptime' command in Unix-like operating systems?",
      answers: [
        { text: "List currently running processes", correct: false },
        { text: "Display system uptime and load average", correct: true },
        { text: "Monitor network traffic", correct: false },
        { text: "Change file permissions", correct: false },
      ],
    },
    {
      question: "In the context of memory management, what is 'fragmentation'?",
      answers: [
        { text: "Optimizing disk access", correct: false },
        { text: "The division of memory into small, non-contiguous blocks", correct: true },
        { text: "Encrypting data in memory", correct: false },
        { text: "Allocating memory for a new process", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'ip' command in Unix-like operating systems?",
      answers: [
        { text: "Display system information", correct: false },
        { text: "Configure network settings", correct: true },
        { text: "Search for files", correct: false },
        { text: "Manage user accounts", correct: false },
      ],
    },
    {
      question: "In the context of process management, what is 'fork()' in Unix-like operating systems?",
      answers: [
        { text: "Terminate the current process", correct: false },
        { text: "Create a new process", correct: true },
        { text: "Pause the execution of a process", correct: false },
        { text: "Merge two processes", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'traceroute' command in networking?",
      answers: [
        { text: "Trace the route of a network packet", correct: true },
        { text: "Monitor network traffic", correct: false },
        { text: "Create a secure connection", correct: false },
        { text: "Check for network vulnerabilities", correct: false },
      ],
    },
    {
      question: "In the context of security, what is 'two-factor authentication'?",
      answers: [
        { text: "Authentication based on a single method", correct: false },
        { text: "Authentication based on two unique factors (e.g., password and token)", correct: true },
        { text: "Authentication based on biometrics only", correct: false },
        { text: "Authentication without any verification", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'chmod' command in Unix-like operating systems?",
      answers: [
        { text: "Change file ownership", correct: false },
        { text: "Change file permissions", correct: true },
        { text: "Create a new file", correct: false },
        { text: "List directory contents", correct: false },
      ],
    },
    {
      question: "In the context of networking, what is 'subnetting'?",
      answers: [
        { text: "A method of compressing data for faster transmission", correct: false },
        { text: "Dividing a large network into smaller, more manageable sub-networks", correct: true },
        { text: "A security measure to block unauthorized access", correct: false },
        { text: "A type of firewall configuration", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'grep' command in Unix-like operating systems?",
      answers: [
        { text: "Search for text within files", correct: true },
        { text: "Create a new directory", correct: false },
        { text: "Display system information", correct: false },
        { text: "Move files between directories", correct: false },
      ],
    },
    {
      question: "In the context of operating systems, what is 'DMA'?",
      answers: [
        { text: "Direct Memory Access - a mechanism for peripherals to transfer data directly to/from memory", correct: true },
        { text: "Distributed Memory Architecture - a type of system organization", correct: false },
        { text: "Dynamic Memory Allocation - a method for managing memory in real-time", correct: false },
        { text: "Disk Management Algorithm - a strategy for optimizing disk access", correct: false },
      ],
    },
    {
      question: "In the context of file systems, what is 'inode'?",
      answers: [
        { text: "A type of virus", correct: false },
        { text: "A file permission setting", correct: false },
        { text: "An index node containing metadata about a file", correct: true },
        { text: "A device driver for disk storage", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'scp' command in Unix-like operating systems?",
      answers: [
        { text: "Securely copy files between hosts", correct: true },
        { text: "Search for files", correct: false },
        { text: "Display system information", correct: false },
        { text: "Manage user accounts", correct: false },
      ],
    },
    {
      question: "In the context of security, what is 'encryption'?",
      answers: [
        { text: "A method of compressing files", correct: false },
        { text: "A process of converting data into a code to prevent unauthorized access", correct: true },
        { text: "A type of file system", correct: false },
        { text: "A mechanism for managing user authentication", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'chown' command in Unix-like operating systems?",
      answers: [
        { text: "Change file permissions", correct: false },
        { text: "Change file ownership", correct: true },
        { text: "Create a new directory", correct: false },
        { text: "List directory contents", correct: false },
      ],
    },
    {
      question: "Which of the following is an example of a distributed operating system?",
      answers: [
        { text: "Windows", correct: false },
        { text: "Linux", correct: false },
        { text: "UNIX", correct: false },
        { text: "Amoeba", correct: true },
      ],
    },
    {
      question: "What is the purpose of the 'df' command in Unix-like operating systems?",
      answers: [
        { text: "Display system information", correct: false },
        { text: "List currently running processes", correct: false },
        { text: "Show disk space usage", correct: true },
        { text: "Change file permissions", correct: false },
      ],
    },
    {
      question: "In the context of operating systems, what is 'paging'?",
      answers: [
        { text: "Managing file permissions", correct: false },
        { text: "Moving processes between main memory and disk", correct: true },
        { text: "Encrypting files", correct: false },
        { text: "Creating user interfaces", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'ifconfig' command in Unix-like operating systems?",
      answers: [
        { text: "Display system information", correct: false },
        { text: "Configure network settings", correct: true },
        { text: "Search for files", correct: false },
        { text: "Manage user accounts", correct: false },
      ],
    },
    {
      question: "In the context of process management, what is 'zombie process'?",
      answers: [
        { text: "A process that consumes excessive system resources", correct: false },
        { text: "A process that has terminated but still has an entry in the process table", correct: true },
        { text: "A process with high priority", correct: false },
        { text: "A process that executes in the background", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'ls' command in Unix-like operating systems?",
      answers: [
        { text: "List currently running processes", correct: false },
        { text: "Display system information", correct: false },
        { text: "List files in a directory", correct: true },
        { text: "Change file permissions", correct: false },
      ],
    },
    {
      question: "In the context of memory management, what is 'thrashing'?",
      answers: [
        { text: "Optimizing disk access", correct: false },
        { text: "Excessive swapping of pages between memory and disk", correct: true },
        { text: "Encrypting data in memory", correct: false },
        { text: "Allocating memory for a new process", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'sed' command in Unix-like operating systems?",
      answers: [
        { text: "Search for files", correct: false },
        { text: "Display system information", correct: false },
        { text: "Stream editor for text transformation", correct: true },
        { text: "Configure network settings", correct: false },
      ],
    },
    {
      question: "In the context of file systems, what is 'journaling'?",
      answers: [
        { text: "Recording file access in a log", correct: true },
        { text: "Encrypting files", correct: false },
        { text: "Managing file permissions", correct: false },
        { text: "Organizing files in a hierarchical structure", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'dd' command in Unix-like operating systems?",
      answers: [
        { text: "Display system information", correct: false },
        { text: "List currently running processes", correct: false },
        { text: "Convert and copy files", correct: true },
        { text: "Change file permissions", correct: false },
      ],
    },
    {
      question: "In the context of security, what is 'firewall'?",
      answers: [
        { text: "A physical barrier to protect the computer", correct: false },
        { text: "A software or hardware-based network security system", correct: true },
        { text: "A type of antivirus software", correct: false },
        { text: "A process of encrypting files", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'tar' command in Unix-like operating systems?",
      answers: [
        { text: "List currently running processes", correct: false },
        { text: "Display system information", correct: false },
        { text: "Create or extract archive files", correct: true },
        { text: "Change file permissions", correct: false },
      ],
    },
    {
      question: "In the context of process management, what is 'context switching'?",
      answers: [
        { text: "Switching between different users", correct: false },
        { text: "Switching between different processes", correct: true },
        { text: "Switching between different file systems", correct: false },
        { text: "Switching between different network protocols", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'awk' command in Unix-like operating systems?",
      answers: [
        { text: "Search for files", correct: false },
        { text: "Display system information", correct: false },
        { text: "Pattern scanning and processing language", correct: true },
        { text: "Configure network settings", correct: false },
      ],
    },
    {
      question: "In the context of file systems, what is 'RAID'?",
      answers: [
        { text: "A method of organizing files hierarchically", correct: false },
        { text: "A file permission setting", correct: false },
        { text: "A Redundant Array of Independent Disks for data storage", correct: true },
        { text: "A device driver for disk storage", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'cron' service in Unix-like operating systems?",
      answers: [
        { text: "Monitor system processes in real-time", correct: false },
        { text: "Schedule and automate tasks", correct: true },
        { text: "Change file permissions", correct: false },
        { text: "List currently running processes", correct: false },
      ],
    },
    {
      question: "In the context of security, what is 'biometrics'?",
      answers: [
        { text: "A type of encryption algorithm", correct: false },
        { text: "Authentication based on unique physical or behavioral characteristics", correct: true },
        { text: "A method of compressing files", correct: false },
        { text: "A network security protocol", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'uptime' command in Unix-like operating systems?",
      answers: [
        { text: "List currently running processes", correct: false },
        { text: "Display system uptime and load average", correct: true },
        { text: "Monitor network traffic", correct: false },
        { text: "Change file permissions", correct: false },
      ],
    },
    {
      question: "In the context of memory management, what is 'fragmentation'?",
      answers: [
        { text: "Optimizing disk access", correct: false },
        { text: "The division of memory into small, non-contiguous blocks", correct: true },
        { text: "Encrypting data in memory", correct: false },
        { text: "Allocating memory for a new process", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'ip' command in Unix-like operating systems?",
      answers: [
        { text: "Display system information", correct: false },
        { text: "Configure network settings", correct: true },
        { text: "Search for files", correct: false },
        { text: "Manage user accounts", correct: false },
      ],
    },
    {
      question: "In the context of process management, what is 'fork()' in Unix-like operating systems?",
      answers: [
        { text: "Terminate the current process", correct: false },
        { text: "Create a new process", correct: true },
        { text: "Pause the execution of a process", correct: false },
        { text: "Merge two processes", correct: false },
      ],
    },
    {
      question: "What is the purpose of the 'traceroute' command in networking?",
      answers: [
        { text: "Trace the route of a network packet", correct: true },
        { text: "Monitor network traffic", correct: false },
        { text: "Create a secure connection", correct: false },
        { text: "Check for network vulnerabilities", correct: false },
      ],
    },
    {
      question: "In the context of security, what is 'two-factor authentication'?",
      answers: [
        { text: "Authentication based on a single method", correct: false },
        { text: "Authentication based on two unique factors (e.g., password and token)", correct: true },
        { text: "Authentication based on biometrics only", correct: false },
        { text: "Authentication without any verification", correct: false },
      ],
    },
    {
      question: "In the context of networking, what is 'subnetting'?",
      answers: [
        { text: "A method of compressing data for faster transmission", correct: false },
        { text: "Dividing a large network into smaller, more manageable sub-networks", correct: true },
        { text: "A security measure to block unauthorized access", correct: false },
        { text: "A type of firewall configuration", correct: false },
      ],
    },
    {
      question: "In the context of operating systems, what is 'DMA'?",
      answers: [
        { text: "Direct Memory Access - a mechanism for peripherals to transfer data directly to/from memory", correct: true },
        { text: "Distributed Memory Architecture - a type of system organization", correct: false },
        { text: "Dynamic Memory Allocation - a method for managing memory in real-time", correct: false },
        { text: "Disk Management Algorithm - a strategy for optimizing disk access", correct: false },
      ],
    },
  ],
  DS:[
    {
      question: "What does 'DFS' stand for in the context of graph traversal?",
      answers: [
        { text: "Depth-First Search", correct: true },
        { text: "Distributed File System", correct: false },
        { text: "Data Flow Simulation", correct: false },
        { text: "Dynamic File Storage", correct: false },
      ],
    },
    {
      question: "Which data structure follows the Last In, First Out (LIFO) principle?",
      answers: [
        { text: "Queue", correct: false },
        { text: "Stack", correct: true },
        { text: "Linked List", correct: false },
        { text: "Tree", correct: false },
      ],
    },
    {
      question: "What is the time complexity of binary search in a sorted array?",
      answers: [
        { text: "O(log n)", correct: true },
        { text: "O(n)", correct: false },
        { text: "O(n^2)", correct: false },
        { text: "O(1)", correct: false },
      ],
    },
    {
      question: "What is the purpose of a hash table in data structures?",
      answers: [
        { text: "To store data in a tree structure", correct: false },
        { text: "To perform sorting operations efficiently", correct: false },
        { text: "To implement dynamic arrays", correct: false },
        { text: "To achieve constant-time average complexity for key lookups", correct: true },
      ],
    },
    {
      question: "Which sorting algorithm has the best average-case time complexity?",
      answers: [
        { text: "Bubble Sort", correct: false },
        { text: "Insertion Sort", correct: false },
        { text: "Merge Sort", correct: true },
        { text: "Quick Sort", correct: false },
      ],
    },
    {
      question: "What is the purpose of a doubly linked list in data structures?",
      answers: [
        { text: "To store key-value pairs", correct: false },
        { text: "To implement priority queues", correct: false },
        { text: "To allow traversal in both directions", correct: true },
        { text: "To represent hierarchical relationships", correct: false },
      ],
    },
    {
      question: "Which data structure is used for breadth-first traversal in a graph?",
      answers: [
        { text: "Stack", correct: false },
        { text: "Queue", correct: true },
        { text: "Heap", correct: false },
        { text: "Array", correct: false },
      ],
    },
    {
      question: "What is the primary advantage of a self-balancing binary search tree?",
      answers: [
        { text: "Constant time complexity for search operations", correct: false },
        { text: "Reduced memory consumption", correct: false },
        { text: "Efficient insertion and deletion operations", correct: true },
        { text: "Ease of implementation", correct: false },
      ],
    },
    {
      question: "Which algorithm is commonly used for finding the shortest path in a graph?",
      answers: [
        { text: "Depth-First Search", correct: false },
        { text: "Breadth-First Search", correct: false },
        { text: "Dijkstra's Algorithm", correct: true },
        { text: "Bellman-Ford Algorithm", correct: false },
      ],
    },
    {
      question: "What is the purpose of a binary heap in data structures?",
      answers: [
        { text: "To represent hierarchical relationships", correct: false },
        { text: "To efficiently implement dynamic arrays", correct: false },
        { text: "To perform heap sort", correct: false },
        { text: "To efficiently extract the minimum (or maximum) element", correct: true },
      ],
    },
  ]
};
