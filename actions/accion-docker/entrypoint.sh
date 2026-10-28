#!/bin/bash
for documentacion in "README.MD, LICENSE.md, CONTRIBUTING.md"

do 
    if [ -f $archivo ]; then
        echo "$archivo esta en el repositorio";
    else 
        echo "$archivo no esta en el repositorio"
    fi
done