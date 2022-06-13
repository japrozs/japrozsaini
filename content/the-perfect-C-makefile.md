---
slug: the-perfect-C-makefile
title: The perfect C Makefile
description: The perfect Makefile that's so short and simple that I use it for all my projects.
date: 1-June-2022
---

Here's the perfect Makefile.

```makefile
CC = clang 
CFLAGS = -Wall -Wextra -pedantic -I include -g
SRC = $(wildcard *.c src/*.c)
HEAD = $(wildcard include/*.h)
OBJ = $(SRC:.c=.o)
EXEC = out/proj

all: clean $(OBJ) $(EXEC) $(HEAD)

$(EXEC): $(OBJ)
	$(CC) $^ -o $@
	rm -rf src/*.o

%.o: %.cpp
	$(CC) $(CFLAGS) $^ -o $@

clean:
	rm -rf *.o src/*.o $(EXEC)
```

Before you run this makefile, make sure your already have the following directories in your project.

```bash
src      # contains all your C code
include  # contains your header/include files
out 	 # will contain the outputted binary
```
