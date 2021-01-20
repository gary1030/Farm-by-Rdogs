const { gql } = require('apollo-server');

module.exports = gql`
    type Farm {
        id: ID!
        farmName: String!
        farmType: String!
        members: [FarmUser]!
        chunks: [Chunk!]! 
        plants: [Plant]!
        createdAt: String!
    }
    type FarmUser{
        id: String!
        username: String!
        email: String!
        createdAt: String!
    }
    type Chunk {
        id: ID!
        coordinates: Coordinate!
        createdAt: String!
    }
    type Coordinate {
        x: Int!
        y: Int!
    }
    type Plant {
        id: ID!
        plantType: String!
        title: String
        body: String!
        chunkCoordinates: Coordinate!
        plantCoordinates: Coordinate!
        author: String!
        createdAt: String!
    }
    type User {
        id: ID!
        email: String!
        profile: String!
        token: String
        username: String!
        farms: [FarmInfo]!
        invitations: [Friend]!
        friends: [Friend]!
        createdAt: String!
    }
    type FarmInfo {
        id: ID!
        farmName: String!
        farmType: String!
        invitedBy: String!
        createdAt: String!
    }
    type Friend {
        id: String!
        username: String!
        email: String!
        createdAt: String!
    }
    input RegisterInput {
        username: String!
        passwordHash: String!
        confirmHash: String!
        email: String!
    }
    input CoordinateInput {
        x: Int!
        y: Int!
    }
    input PlantInput {
        farmId: ID!
        plantId: ID
        plantType: String
        title: String
        body: String
        chunkCoordinates: CoordinateInput
        plantCoordinates: CoordinateInput
    }
    type Query {
        getFarms: [Farm]!
        getFarm(farmId: ID!): Farm!
        getUserData(userId: ID!): User!
        getFriendList(userId: ID!): [Friend]!
    }
    type Mutation {
        register(registerInput: RegisterInput!): User!
        login(username: String!, passwordHash: String!): User!
        createPlant(plantInput: PlantInput!): Plant!
        editPlant(plantInput: PlantInput!): Plant!
        deletePlant(farmId: ID!, plantId: ID!): String!
        createFarm(farmName: String!, farmType: String!): Farm!
        leaveFarm(farmId: ID!): String!
        sendInvitation(friendName: String!): String!
        acceptInvitation(friendName: String!): String!
        declineInvitation(friendName: String!): String!
        getFriends: [Friend]!
        getInvitations: [Friend]!
        editProfile(newProfile: String!): String!
        addFarmer(farmId: ID!, friendId: ID!): String!
        addChunk(farmId: ID!, chunkCoordinates: CoordinateInput!): String! 
    }

    type Subscription {
        farm(farmId: ID!): FarmSubscriptionPayload!
        friendList(userId: ID!): FriendListSubscriptionPayload!
    }

    type FriendListSubscriptionPayload {
        friend: Friend!
    }

    type FarmSubscriptionPayload {
        mutation: PlantMutationType!
        index: Int!
        plant: Plant!
    }

    enum PlantMutationType {
        CREATED_PLANT
        EDITED_PLANT
        DELETED_PLANT
    }
`;