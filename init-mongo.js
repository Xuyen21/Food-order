db.createUser(
    {
      user: "xuyen",
      pwd:  "12345",   // or cleartext password
      roles: [ { role: "readWrite", db: "food-details" } ]
    }
  )