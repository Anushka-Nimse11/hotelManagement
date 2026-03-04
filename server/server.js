const express = require('express')
const mysql = require('mysql')
const cors = require('cors');
const moment = require("moment");

const app = express()
app.use(cors());

app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password:'',
    database: 'hotelmanagment'
});

// Connect to DB
db.connect(err => {
  if (err) {
    console.log('DB connection error:', err);
  } else {
    console.log('DB connected successfully');
  }
});


app.get('/', (req, res) => {
  res.send('Backend is running');
});

// <-------------------------table booking--------------------------------->
app.post('/booking', (req, res) => {
    const sql = "INSERT INTO tablebooking (firstName, middleName, lastName, email, mobileNumber, dateOfBooking, timeOfBooking, numOfGuests, specialRequest) VALUES(?,?,?,?,?,?,?,?,?)";
    const values = [
        req.body.firstName,
        req.body.middleName,
        req.body.lastName,
        req.body.email,
        req.body.mobileNumber,
        req.body.dateOfBooking,
        req.body.timeOfBooking,
        req.body.numOfGuests,
        req.body.specialRequest
    ]

    db.query(sql, values, (err, data) => {
        if(err){
            console.log(err);
            return res.json(err);
        }
        else{
            return res.json(data);
        }
    })
});

// <-------------------------Retrive details of table booking (Admin)---------------------------->
app.get('/TableBookingDetails', (req, res) => {
  const sql = "SELECT * FROM tablebooking";

  db.query(sql, (err, data) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).json({ error: "Failed to fetch table booking details" });
    }

    return res.status(200).json(data);
  });
});



// Fetch bookings for a logged-in user
app.get('/bookings', (req, res) => {
  const email = req.query.email;
  if (!email) {
    return res.status(401).json({ message: "Unauthorized: Email required" });
  }

  const sql = "SELECT * FROM tablebooking WHERE email = ?";
  db.query(sql, [email], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(data);
  });
});


// <---------------------------Registration (user)----------------------------->
app.post('/registration', (req, res) => {
    const sql = "INSERT INTO user (Name, Email, Password, UserType, Address, MobileNo) VALUES(?,?,?,'Users',?,?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.address,
        req.body.mobileNo,
    ]

    db.query(sql, values, (err, data) => {
        if(err){
            console.log(err);
            return res.json(err);
        }
        else{
            return res.json(data);
        }
    })
});

// <--------------------------Add Admin--------------------->
app.post('/addAdmin', (req, res) => {
    const sql = "INSERT INTO user (Name, Email, Password, UserType, Address, MobileNo) VALUES(?,?,?,'Admin',?,?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.address,
        req.body.mobileNo,
    ]

    db.query(sql, values, (err, data) => {
        if(err){
            console.log(err);
            return res.json(err);
        }
        else{
            return res.json(data);
        }
    })
});


//<--------------------------Retrive details of admin------------------------>
app.get('/adminDetails', (req, res) => {
  const sql = "SELECT * FROM user WHERE UserType='Admin'";

  db.query(sql, (err, data) => {
    if (err) {
      console.error("Database Error:", err);
      return res.status(500).json({ error: "Failed to fetch table booking details" });
    }

    return res.status(200).json(data);
  });
});





// <----------------------------Login---------------------------->
app.post('/login', (req, res) => {
    const sql = "SELECT UserId, Email, UserType FROM user WHERE Email=? AND Password=?";
  const Values = [req.body.email, req.body.password];

  db.query(sql, Values, (err, data) => {
    if(err){
     console.log(err);
      return res.json({ message: "Server error", error: err });
    }

    if (data.length > 0) {
      return res.json({
        message: "Login Successful",

        UserId: data[0].UserId,
        UserType: data[0].UserType
        
      });
    }
    else{
      return res.status(401).json({
      message: "Invalid email or password"
    });
  }
  });
});


// <---------------------- Update Admin ------------------------>
app.put('/updateAdmin/:id', (req, res) => {
  const sql = `
    UPDATE user 
    SET Name=?, Email=?, Address=?, MobileNo=? 
    WHERE UserId=? AND UserType='Admin'
  `;

  const values = [
    req.body.name,
    req.body.email,
    req.body.address,
    req.body.mobileNo,
    req.params.id,
  ];

  db.query(sql, values, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json({ message: "Admin updated successfully" });
  });
});



// <-------------------- Deactivate Admin -------------------->
app.put('/deactivateAdmin/:id', (req, res) => {
  const sql = `
    UPDATE user 
    SET Status='Inactive'
    WHERE UserId=? AND UserType='Admin'
  `;

  db.query(sql, [req.params.id], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json({ message: "Admin deactivated" });
  });
});


// <-------------------- Reactivate Admin -------------------->
app.put('/reactivateAdmin/:id', (req, res) => {
  const sql = `
    UPDATE user 
    SET Status='Active'
    WHERE UserId=? AND UserType='Admin'
  `;

  db.query(sql, [req.params.id], (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json(err);
    }
    res.json({ message: "Admin reactivated successfully" });
  });
});

//<--------------------Update table details(user)-------------------->
app.put("/updateBooking/:id", (req, res) => {
  const { id } = req.params;
  const {
    firstName,
    middleName,
    lastName,
    mobileNumber,
    dateOfBooking,
    timeOfBooking,
    numOfGuests,
    specialRequest,
  } = req.body;

  const query = `
    UPDATE tablebooking
    SET firstName=?, middleName=?, lastName=?, mobileNumber=?, dateOfBooking=?, timeOfBooking=?, numOfGuests=?, specialRequest=?
    WHERE tId=?
  `;

  db.query(
    query,
    [
      firstName,
      middleName,
      lastName,
      mobileNumber,
      dateOfBooking,
      timeOfBooking,
      numOfGuests,
      specialRequest,
      id,
    ],
    (err, result) => {
      if (err) return res.status(500).send(err);

      // Send updated booking
      db.query("SELECT * FROM tablebooking WHERE tId=?", [id], (err2, rows) => {
        if (err2) return res.status(500).send(err2);
        res.send(rows[0]); // Send updated record
      });
    }
  );
});


// <------------------- Delete Table Booking (user)------------------->
app.delete('/deleteBooking/:id', (req, res) => {
  const sql = "DELETE FROM tablebooking WHERE tId=?";

  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Booking deleted successfully" });
  });
});

// <------------------- Update Booking Status (Admin) ------------------->
app.put('/updateBookingStatus/:id', (req, res) => {
  const sql = `
    UPDATE tablebooking 
    SET Status=?
    WHERE tId=?
  `;

  db.query(sql, [req.body.status, req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Booking status updated" });
  });
});



// <------------- Dashboard Counts ---------------->
app.get("/dashboardCounts", (req, res) => {
  const queries = {
    totalUsers: "SELECT COUNT(*) AS count FROM user WHERE UserType='Users'",
    totalBookings: "SELECT COUNT(*) AS count FROM tablebooking",
    confirmed: "SELECT COUNT(*) AS count FROM tablebooking WHERE Status='Confirmed'",
    pending: "SELECT COUNT(*) AS count FROM tablebooking WHERE Status='Pending'",
    cancelled: "SELECT COUNT(*) AS count FROM tablebooking WHERE Status='Cancelled'"
  };

  const results = {};

  db.query(queries.totalUsers, (err, data) => {
    if (err) return res.status(500).json(err);
    results.totalUsers = data[0].count;

     db.query(queries.totalBookings, (err, data) => {
      if (err) return res.status(500).json(err);
      results.totalBookings = data[0].count;

    db.query(queries.confirmed, (err, data) => {
      if (err) return res.status(500).json(err);
      results.confirmed = data[0].count;

      db.query(queries.pending, (err, data) => {
        if (err) return res.status(500).json(err);
        results.pending = data[0].count;

        db.query(queries.cancelled, (err, data) => {
          if (err) return res.status(500).json(err);
          results.cancelled = data[0].count;

          res.json(results);
        });
        });
      });
    });
  });
});




// ----------------- Bookings Trend (Last 7 days) -----------------
app.get("/bookingsTrend", (req, res) => {
  const dates = [];
  for (let i = 6; i >= 0; i--) {
    dates.push(moment().subtract(i, "days").format("YYYY-MM-DD"));
  }

  const results = [];
  let completed = 0;

  dates.forEach((date) => {
    const sql = "SELECT COUNT(*) AS count FROM tablebooking WHERE dateOfBooking = ?";
    db.query(sql, [date], (err, data) => {
      if (err) return res.status(500).json(err);

      results.push({ date, count: data[0].count });
      completed++;

      if (completed === dates.length) {
        res.json(results);
      }
    });
  });
});

// ----------------- Recent Bookings (Last 5) -----------------
app.get("/recentBookings", (req, res) => {
  const sql = "SELECT * FROM tablebooking ORDER BY tId DESC LIMIT 5";
  db.query(sql, (err, data) => {
    if (err) return res.status(500).json(err);
    res.json(data);
  });
});

// ----------------- Active Bookings Today -----------------
app.get("/activeToday", (req, res) => {
  const today = moment().format("YYYY-MM-DD");
  const sql = "SELECT COUNT(*) AS count FROM tablebooking WHERE dateOfBooking = ?";
  db.query(sql, [today], (err, data) => {
    if (err) return res.status(500).json(err);
    res.json({ count: data[0].count });
  });
});

// ----------------- New Users This Month -----------------
app.get("/newUsersMonth", (req, res) => {
  const startOfMonth = moment().startOf("month").format("YYYY-MM-DD");
  const sql = "SELECT COUNT(*) AS count FROM user WHERE UserType='Users' AND createdAt >= ?";
  db.query(sql, [startOfMonth], (err, data) => {
    if (err) return res.status(500).json(err);
    res.json({ count: data[0].count });
  });
});



// // <------------------------------Add Menu Item--------------------------->
// app.post('/addMenu', (req, res) => {
//     const sql = "INSERT INTO menuItem (MenuImage, Name, Price, Category) VALUES(?,?,?,?)";
//     const values = [
//         req.body.MenuImage,
//         req.body.Name,
//         req.body.Price,
//         req.body.Category,
//     ]

//     db.query(sql, values, (err, data) => {
//         if(err){
//             console.log(err);
//             return res.json(err);
//         }
//         else{
//             return res.json(data);
//         }
//     })
// });



app.listen(5000, () =>{
    console.log("Server started successfully on port 5000");
})