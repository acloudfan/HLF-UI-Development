#!/bin/bash

if [ -z "$1" ]; then
    echo 'Usage:  rs-auth-github.sh   <Access Key>'
    exit 1
fi

echo   -e '\n\n'
echo   'Executing using Token in Query:'
echo   ''
curl -X GET --header 'Accept: application/json' 'http://localhost:3000/api/Aircraft'?access_token=$1
echo   -e '\n\n'
echo   'Executing using Token in Header:'
echo   -e '\n\n'
curl -X GET --header 'Accept: application/json' --header "x-access-token: $1" 'http://localhost:3000/api/Aircraft' 
echo   -e '\n\n'

