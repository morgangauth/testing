package main

import (
	"fmt"
	"time"
)

// Person represents basic information about a person
type Person struct {
	Name    string
	Age     int
	Country string
}

func (p Person) Greet() string {
	return fmt.Sprintf("Hello, my name is %s and I'm %d years old from %s", p.Name, p.Age, p.Country)
}

func (p Person) FormalGreet() string {
	return fmt.Sprintf("Good day to you! I am %s from %s, pleased to make your acquaintance.", p.Name, p.Country)
}

func (p Person) CasualGreet() string {
	return fmt.Sprintf("SUP! %s here, just chillin' from %s!", p.Name, p.Country)
}

func main() {
	// Create a new person
	person := Person{
		Name:    "Alice",
		Age:     28,
		Country: "Canada",
	}

	// Print current time
	fmt.Println("Current time:", time.Now().Format(time.RFC850))

	// Use all greeting methods
	fmt.Println(person.Greet())
	fmt.Println(person.FormalGreet())
	fmt.Println(person.CasualGreet())

	// Demonstrate a simple loop
	fmt.Println("Counting to 3:")
	for i := 1; i <= 3; i++ {
		fmt.Printf("%d ", i)
	}
}
