Demostrates how to create the UI for HyperLedger Fabric Apps

The scripts & code are part of a course on Hyperledger Fabric
For more information on the course, please visit 

http://ACloudFan.com


#1 Enable authentication for REST-Server
> npm install -g passport-github
> Setup the OAuth app on Github.com
> Configure the launch script

#2 Enable multi-user mode for the REST-Server
> Setup database
> Setup connector
> Update the launch script

#3 Enable the Angular application for Authenticatio



# airlinev8
# Add a participant with participantkey = your github ID
composer participant add -d '{"$class":"org.acme.airline.participant.ACMENetworkAdmin","participantKey":"acloudfan","contact":{"$class":"org.acme.airline.participant.Contact","fName":"a","lname":"f","email":"acloudfan@acmeairline.com"}}' -c admin@airlinev8

# Issue the identity
# This would generate the card for the participant
composer identity issue -u acloudfan  -a org.acme.airline.participant.ACMENetworkAdmin#acloudfan -c admin@airlinev8