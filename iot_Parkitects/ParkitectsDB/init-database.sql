USE master;
GO

-- Create the ParkitectDB database only if it does not already exist
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'ParkitectsDB')
BEGIN
    CREATE DATABASE ParkitectsDB;
END
GO

-- Switch to the ParkitectDB database
USE ParkitectsDB;
GO

-- Create the ParkingLot table
CREATE TABLE Parking (
    parkingID INT PRIMARY KEY IDENTITY(1,1),
    lotName NVARCHAR(255) NOT NULL,
    campusLocation NVARCHAR(255) NOT NULL,
    totalCapacity INT NOT NULL
);


-- Create the User table
CREATE TABLE [User] (
    userID INT PRIMARY KEY IDENTITY(1,1),
    username NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL,
    passwordHash NVARCHAR(255),
    userRole NVARCHAR(255) NOT NULL,
    googleToken NVARCHAR(255),
    isParked BIT NOT NULL DEFAULT 0
);


-- Create the ParkingLayout table
CREATE TABLE ParkingLayout (
    layoutID INT PRIMARY KEY IDENTITY(1,1), 
    parkingID INT NOT NULL,
    sectionName NVARCHAR(255) NOT NULL,
    CONSTRAINT FK_ParkingLayout_Parking FOREIGN KEY (parkingID) REFERENCES Parking(parkingID) ON DELETE CASCADE
);

-- Create the ParkingBay table
CREATE TABLE ParkingBay (
    bayID INT PRIMARY KEY IDENTITY(1,1),
    layoutID INT NOT NULL,
    bayNumber NVARCHAR(255) NOT NULL,
    isOccupied BIT NOT NULL,
    CONSTRAINT FK_ParkingBay_ParkingLayout FOREIGN KEY (layoutID) REFERENCES ParkingLayout(layoutID) ON DELETE CASCADE
);


-- Part of analytics
-- Create the ParkingSession table
CREATE TABLE ParkingSession (
    sessionID INT PRIMARY KEY IDENTITY(1,1),
    userID INT NOT NULL,
    bayID INT NOT NULL,
    startDate DATETIME NOT NULL,
    endDate DATETIME NULL,
       CONSTRAINT FK_ParkingSession_User FOREIGN KEY (userID) REFERENCES [User](userID) ON DELETE CASCADE
);

-- Part of analytics
-- Create the Sensor table
CREATE TABLE Sensor (
    sensorID INT PRIMARY KEY IDENTITY(1,1),
    bayID INT NOT NULL,
    distanceReadingCm INT NOT NULL,
    hardwareModel NVARCHAR(255) NOT NULL,
    location GEOGRAPHY NULL,
    CONSTRAINT FK_Sensor_ParkingBay FOREIGN KEY (bayID) REFERENCES ParkingBay(bayID) ON DELETE CASCADE
);

-- Create the FindMyCar table
CREATE TABLE FindMyCar (
    findMyCarID INT PRIMARY KEY IDENTITY(1,1),
    userLocation GEOGRAPHY NOT NULL,
    sensorLocation GEOGRAPHY NOT NULL,
    distance FLOAT NOT NULL,
    direction NVARCHAR(255) NOT NULL
);

-- Create the Permissions table
CREATE TABLE Permissions (
    permissionsID INT PRIMARY KEY IDENTITY(1,1),
    userID INT NOT NULL,
    bluetooth BIT NOT NULL,
    notifications BIT NOT NULL,
    location BIT NOT NULL,
    ruleAlerts BIT NOT NULL,
    emailNotifications BIT NOT NULL,
     CONSTRAINT FK_Permissions_User FOREIGN KEY (userID) REFERENCES [User](userID) ON DELETE CASCADE
);

-- Create the Preferences table
CREATE TABLE Preferences (
    preferenceID INT PRIMARY KEY IDENTITY(1,1),
    userID INT NOT NULL,
    text FLOAT,
    colorMode NVARCHAR(255),
    screenReader BIT NOT NULL,
    hapticFeedback BIT NOT NULL,
    language NVARCHAR(255),
    CONSTRAINT FK_Preferences_User FOREIGN KEY (userID) REFERENCES [User](userID) ON DELETE CASCADE

);


-- Create the Tickets table
CREATE TABLE Tickets (
    categoryID INT PRIMARY KEY IDENTITY(1,1),
    userID INT NOT NULL,
    bayID INT NOT NULL,
    reason NVARCHAR(255) NOT NULL,
    description NVARCHAR(255),
    image NVARCHAR(255),
    status NVARCHAR(255) NOT NULL,
    response NVARCHAR(255),
    CONSTRAINT FK_Ticket_User FOREIGN KEY (userID) REFERENCES [User](userID) ON DELETE CASCADE,
    CONSTRAINT FK_Ticket_ParkingBay FOREIGN KEY (bayID) REFERENCES ParkingBay(bayID) ON DELETE CASCADE
);

-- Create ChatBot table
CREATE TABLE ChatBot (
    chatID INT PRIMARY KEY IDENTITY(1,1),
    question NVARCHAR(255),
    selected INT,
    answer NVARCHAR(255)
);

-- Create Notification table
CREATE TABLE Notification (
    notificationID INT PRIMARY KEY IDENTITY(1,1),
    notificationType NVARCHAR(255) NOT NULL,
    title NVARCHAR(255) NOT NULL,
    description NVARCHAR(255) NOT NULL,
    time DATETIME NOT NULL
);
GO