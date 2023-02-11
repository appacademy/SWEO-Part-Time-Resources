//Prompt 1 -- Create the tables:
//I want to create a db to track the dogs in all shelters across the US
//A shelter has a location, the size of the shelter(small, med, large), and one or more dogs.
//each dog has a name, age, and an association to a certain breed (i.e. Terrier)

//The first shelter is a large shelter in Texas, and has these dogs (name, age, breed)
//"fido", 5, "Terrier"
//"Rex", 3, "Lab"
//"Stanley", 1, "Terrier"

//The second shelter is a small shelter in Oklahoma, and has these dogs (name, age, breed)
//"Woofer", 4, "Poodle"
//"Barker", 4, "Lab"
//no name given, 6, "Pug"
//"Yapper", 2, "Terrier"


//I want to find all of the shelters that are larger than small,
//and order them by their location in reverse alphabetical order
//I'd expect the output to be Texas / large

//I want to find all the dogs that are younger than 3,
//For the ones selected, I want to know their breed, name, and age.
//I want the result ordered in reverse alphabetical order based on their breed and name.
//I'd expect the output to be:
//"Terrier", "Yapper", 2
//"Terrier", "Stanley", 1

//Someone really want to adopt a certain breed of dog: "Terrier", and they want to know the location and size of the
//first result based on reverse-alphabetically ordered Location (i.e. New York instead of Alabama)
//of the shelter that has at least one of the breed they're looking for.
//I'd expect the output to be "texas" "large"
