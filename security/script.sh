#!/bin/bash
while :
do
	echo "Press [CTRL+C] to stop.."
	curl --data "login=overwhelemd&lat=10&lng=10"  localhost:8000/sendLocation
done