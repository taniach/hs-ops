package middleware

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	"go_todo/server/models"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

// GetAllSales get all sales route
func GetAllSales(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	payload := getAllSales()
	json.NewEncoder(w).Encode(payload)
}

// CreateSale create sale route
func CreateSale(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	var sale models.Sale
	_ = json.NewDecoder(r.Body).Decode(&sale)
	// fmt.Println(task, r.Body)
	insertOneSale(sale)
	json.NewEncoder(w).Encode(sale)
}

// get all sales from the DB and return it
func getAllSales() []primitive.M {
	cur, err := salesCollection.Find(context.Background(), bson.D{{}})
	if err != nil {
		log.Fatal(err)
	}

	var results []primitive.M
	for cur.Next(context.Background()) {
		var result bson.M
		e := cur.Decode(&result)
		if e != nil {
			log.Fatal(e)
		}
		// fmt.Println("cur..>", cur, "result", reflect.TypeOf(result), reflect.TypeOf(result["_id"]))
		results = append(results, result)

	}

	if err := cur.Err(); err != nil {
		log.Fatal(err)
	}

	cur.Close(context.Background())
	return results
}

// Insert one task in the DB
func insertOneSale(sale models.Sale) {
	insertResult, err := salesCollection.InsertOne(context.Background(), sale)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Inserted a Single Record ", insertResult.InsertedID)
}

// DeleteAllSales delete all sales route
func DeleteAllSales(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Context-Type", "application/x-www-form-urlencoded")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	count := deleteAllSales()
	json.NewEncoder(w).Encode(count)
	// json.NewEncoder(w).Encode("Task not found")

}

// delete all sales from the DB
func deleteAllSales() int64 {
	d, err := salesCollection.DeleteMany(context.Background(), bson.D{{}}, nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Deleted Document", d.DeletedCount)
	return d.DeletedCount
}
