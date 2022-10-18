# Project Planning State Shape

## State Shape will be a blueprint of how your state will look like during certain moments of your applications life cycle
- This should be used to map out when exactly you will need certain data/information so that you will not unnecessarily update state and bog down your application
- Try to think about the most efficient way and times to update your state.

### below is an example of small example of logging/clicking on a server for a discord application

# Slices of State

## Home Page, non logged in user
* state: {
>* session: {}
>* servers: {}
>* currentServer: {}
>* channels: {}
>* dmRooms: {}
* }

## After Logging In
* state: {
>* session: { user: {userId: int, username: string, profilePicture: string}}
>* servers: { serverId : { serverId : int, serverName : string, serverPicture : string }, serverId: { serverId : int, serverName : string, serverPicture : string }, serverId: { serverId : int, serverName : string, serverPicture : string } }
>* currentServer: {}
>* dmRooms: { dmRoomId: { dmRoomId:int, dmRoomMembers: [] }, { dmRoomId: { dmRoomId : int, dmRoomMembers : [] }, { dmRoomId : { dmRoomId : int, dmRoomMembers : [] } }
* }


# Clicking on a server

* state: {
>* session: { user: {userId: int, username: string, profilePicture: string}}
>* servers: {serverId: {serverId: int, serverName: string, serverPicture: string}, serverId: {serverId: int, serverName: string, serverPicture: string}, serverId: {serverId: int, serverName: string, serverPicture: string} }
>* currentServer: { serverId: { serverId : int, serverName: string, serverPicture : string, serverChannels : { channelId : { channelId : int, channelName : string }, channelId: { channelId: int, channelName : string } }, serverMembers : {membersObj}, currentChannel : { channelId : { channelObj } }
>* dmRooms: {dmRoomId: {dmRoomId:int, dmRoomMembers: []}, {dmRoomId: {dmRoomId:int, dmRoomMembers: []}, {dmRoomId: {dmRoomId:int, dmRoomMembers: []}}
* }
