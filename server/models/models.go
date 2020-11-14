package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// ToDoList is a model for a tasks to do
type ToDoList struct {
	ID     primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Task   string             `json:"task,omitempty"`
	Status bool               `json:"status,omitempty"`
}

// Sale is a model for packets sold to a customer in a transaction
type Sale struct {
	ID                primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	DateOrdered       time.Time          `json:"dateOrdered"`
	CustomerName      string             `json:"customerName"`
	NumberOfPackets   int                `json:"numberOfPackets"`
	NumberOfBrochures int                `json:"numberOfBrochures"`
	Platform          string             `json:"platform"`
}
