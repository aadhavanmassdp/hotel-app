<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hotel Management System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #0d6efd;
            --secondary: #6c757d;
            --success: #198754;
            --info: #0dcaf0;
            --warning: #ffc107;
            --danger: #dc3545;
            --light: #f8f9fa;
            --dark: #212529;
        }
        
        body {
            background-color: #f5f7fa;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            padding-bottom: 50px;
        }
        
        .sidebar {
            background: linear-gradient(180deg, var(--primary), #0b5ed7);
            color: white;
            height: 100vh;
            position: fixed;
            padding-top: 20px;
            box-shadow: 3px 0 10px rgba(0,0,0,0.1);
        }
        
        .sidebar .nav-link {
            color: rgba(255,255,255,0.7);
            padding: 12px 20px;
            border-radius: 0;
            transition: all 0.3s;
        }
        
        .sidebar .nav-link:hover, .sidebar .nav-link.active {
            color: white;
            background: rgba(255,255,255,0.1);
        }
        
        .sidebar .nav-link i {
            margin-right: 10px;
            width: 20px;
            text-align: center;
        }
        
        .main-content {
            margin-left: 250px;
            padding: 20px;
        }
        
        .header {
            background: white;
            border-radius: 10px;
            padding: 15px 25px;
            margin-bottom: 25px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.05);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .card {
            border-radius: 10px;
            border: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            margin-bottom: 25px;
            transition: transform 0.3s;
        }
        
        .card:hover {
            transform: translateY(-5px);
        }
        
        .card-header {
            background: white;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            font-weight: 600;
            padding: 15px 20px;
            border-radius: 10px 10px 0 0 !important;
        }
        
        .stats-card {
            text-align: center;
            padding: 20px 15px;
        }
        
        .stats-card i {
            font-size: 36px;
            margin-bottom: 15px;
            color: var(--primary);
        }
        
        .stats-card h3 {
            font-size: 28px;
            margin: 10px 0;
            color: var(--dark);
        }
        
        .stats-card p {
            color: var(--secondary);
            margin: 0;
        }
        
        .room-card {
            text-align: center;
            padding: 20px 10px;
        }
        
        .room-card .room-number {
            font-size: 24px;
            font-weight: bold;
            margin: 10px 0;
        }
        
        .room-card .room-type {
            background: var(--light);
            padding: 5px 10px;
            border-radius: 20px;
            display: inline-block;
            margin-bottom: 15px;
            font-size: 12px;
        }
        
        .room-card .room-status {
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .status-available {
            background: rgba(25, 135, 84, 0.15);
            color: var(--success);
        }
        
        .status-occupied {
            background: rgba(220, 53, 69, 0.15);
            color: var(--danger);
        }
        
        .status-maintenance {
            background: rgba(255, 193, 7, 0.15);
            color: var(--warning);
        }
        
        .guest-card {
            display: flex;
            align-items: center;
            padding: 15px;
        }
        
        .guest-card img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 15px;
        }
        
        .guest-info h5 {
            margin: 0;
            font-weight: 600;
        }
        
        .guest-info p {
            margin: 0;
            color: var(--secondary);
            font-size: 13px;
        }
        
        .action-buttons .btn {
            margin: 0 3px;
        }
        
        .booking-form {
            background: white;
            border-radius: 10px;
            padding: 25px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }
        
        .table th {
            border-top: none;
            font-weight: 600;
        }
        
        .table tr {
            transition: all 0.2s;
        }
        
        .table tr:hover {
            background: rgba(13, 110, 253, 0.03);
        }
        
        .status-badge {
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
        }
        
        .badge-available {
            background: rgba(25, 135, 84, 0.15);
            color: var(--success);
        }
        
        .badge-occupied {
            background: rgba(220, 53, 69, 0.15);
            color: var(--danger);
        }
        
        .badge-maintenance {
            background: rgba(255, 193, 7, 0.15);
            color: var(--warning);
        }
        
        .dashboard-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .search-box {
            position: relative;
            width: 300px;
        }
        
        .search-box input {
            padding-left: 40px;
            border-radius: 20px;
        }
        
        .search-box i {
            position: absolute;
            left: 15px;
            top: 12px;
            color: var(--secondary);
        }
        
        .footer {
            text-align: center;
            margin-top: 30px;
            color: var(--secondary);
            font-size: 14px;
        }
        
        .nav-tabs .nav-link.active {
            color: var(--primary);
            border-bottom: 3px solid var(--primary);
        }
        
        @media (max-width: 992px) {
            .sidebar {
                width: 70px;
                text-align: center;
            }
            
            .sidebar .nav-link span {
                display: none;
            }
            
            .sidebar .nav-link i {
                margin-right: 0;
                font-size: 20px;
            }
            
            .main-content {
                margin-left: 70px;
            }
        }
        
        @media (max-width: 768px) {
            .header {
                flex-direction: column;
                text-align: center;
            }
            
            .search-box {
                width: 100%;
                margin-top: 15px;
            }
            
            .main-content {
                margin-left: 0;
            }
        }
    </style>
</head>
<body>
    <!-- Sidebar -->
    <div class="sidebar col-md-2 d-none d-md-block">
        <div class="text-center mb-4">
            <h4 class="text-white">HotelPro</h4>
            <p class="text-white-50">Management System</p>
        </div>
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="#">
                    <i class="fas fa-home"></i> <span>Dashboard</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-calendar-check"></i> <span>Bookings</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-hotel"></i> <span>Rooms</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-user-friends"></i> <span>Guests</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-chart-line"></i> <span>Reports</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-cog"></i> <span>Settings</span>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="fas fa-sign-out-alt"></i> <span>Logout</span>
                </a>
            </li>
        </ul>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <!-- Header -->
        <div class="header">
            <h3>Hotel Management Dashboard</h3>
            <div class="search-box">
                <i class="fas fa-search"></i>
                <input type="text" class="form-control" placeholder="Search guests, rooms, bookings...">
            </div>
        </div>

        <!-- Stats Cards -->
        <div class="row">
            <div class="col-md-3">
                <div class="card stats-card">
                    <i class="fas fa-hotel text-primary"></i>
                    <h3>48</h3>
                    <p>Total Rooms</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stats-card">
                    <i class="fas fa-user-check text-success"></i>
                    <h3>32</h3>
                    <p>Occupied Rooms</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stats-card">
                    <i class="fas fa-calendar-check text-info"></i>
                    <h3>12</h3>
                    <p>Today's Check-ins</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card stats-card">
                    <i class="fas fa-dollar-sign text-warning"></i>
                    <h3>$12,450</h3>
                    <p>Daily Revenue</p>
                </div>
            </div>
        </div>

        <!-- Dashboard Content -->
        <div class="dashboard-header">
            <h4>Recent Activities</h4>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookingModal">
                <i class="fas fa-plus"></i> New Booking
            </button>
        </div>

        <div class="row">
            <!-- Room Status -->
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <span>Room Status</span>
                        <div class="dropdown">
                            <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                                Filter
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">All Rooms</a></li>
                                <li><a class="dropdown-item" href="#">Available</a></li>
                                <li><a class="dropdown-item" href="#">Occupied</a></li>
                                <li><a class="dropdown-item" href="#">Maintenance</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card room-card">
                                    <div class="room-number">101</div>
                                    <div class="room-type">Deluxe</div>
                                    <div class="room-status status-available">Available</div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card room-card">
                                    <div class="room-number">102</div>
                                    <div class="room-type">Standard</div>
                                    <div class="room-status status-occupied">Occupied</div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="card room-card">
                                    <div class="room-number">103</div>
                                    <div class="room-type">Suite</div>
                                    <div class="room-status status-maintenance">Maintenance</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Recent Bookings -->
            <div class="col-lg-6">
                <div class="card">
                    <div class="card-header">
                        Recent Bookings
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-borderless">
                                <thead>
                                    <tr>
                                        <th>Guest</th>
                                        <th>Room</th>
                                        <th>Check-in</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="me-2">
                                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" class="rounded-circle" width="30" height="30">
                                                </div>
                                                <div>John Smith</div>
                                            </div>
                                        </td>
                                        <td>201</td>
                                        <td>Nov 8, 2025</td>
                                        <td><span class="status-badge badge-occupied">Checked In</span></td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-primary"><i class="fas fa-edit"></i></button>
                                            <button class="btn btn-sm btn-outline-danger"><i class="fas fa-times"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="me-2">
                                                    <img src="https://randomuser.me/api/portraits/women/44.jpg" class="rounded-circle" width="30" height="30">
                                                </div>
                                                <div>Sarah Johnson</div>
                                            </div>
                                        </td>
                                        <td>305</td>
                                        <td>Nov 9, 2025</td>
                                        <td><span class="status-badge badge-available">Confirmed</span></td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-primary"><i class="fas fa-edit"></i></button>
                                            <button class="btn btn-sm btn-outline-danger"><i class="fas fa-times"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="me-2">
                                                    <img src="https://randomuser.me/api/portraits/men/22.jpg" class="rounded-circle" width="30" height="30">
                                                </div>
                                                <div>Robert Davis</div>
                                            </div>
                                        </td>
                                        <td>107</td>
                                        <td>Nov 10, 2025</td>
                                        <td><span class="status-badge badge-available">Confirmed</span></td>
                                        <td>
                                            <button class="btn btn-sm btn-outline-primary"><i class="fas fa-edit"></i></button>
                                            <button class="btn btn-sm btn-outline-danger"><i class="fas fa-times"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Upcoming Checkouts -->
        <div class="card">
            <div class="card-header">
                Today's Checkouts
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th>Guest</th>
                                <th>Room</th>
                                <th>Check-out</th>
                                <th>Status</th>
                                <th>Bill</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <img src="https://randomuser.me/api/portraits/women/68.jpg" class="rounded-circle" width="30" height="30">
                                        </div>
                                        <div>Emily Wilson</div>
                                    </div>
                                </td>
                                <td>204</td>
                                <td>Nov 8, 2025</td>
                                <td><span class="status-badge badge-occupied">Checked Out</span></td>
                                <td>$245.00</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-success">View Invoice</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <img src="https://randomuser.me/api/portraits/men/41.jpg" class="rounded-circle" width="30" height="30">
                                        </div>
                                        <div>Michael Brown</div>
                                    </div>
                                </td>
                                <td>302</td>
                                <td>Nov 8, 2025</td>
                                <td><span class="status-badge badge-occupied">Checked Out</span></td>
                                <td>$180.00</td>
                                <td>
                                    <button class="btn btn-sm btn-outline-success">View Invoice</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Booking Modal -->
    <div class="modal fade" id="bookingModal" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Create New Booking</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Guest Name</label>
                                    <input type="text" class="form-control" placeholder="Enter guest name">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="Enter email">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Phone</label>
                                    <input type="tel" class="form-control" placeholder="Enter phone number">
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label class="form-label">Check-in Date</label>
                                    <input type="date" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Check-out Date</label>
                                    <input type="date" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Room Type</label>
                                    <select class="form-select">
                                        <option>Standard</option>
                                        <option>Deluxe</option>
                                        <option>Suite</option>
                                        <option>Penthouse</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Special Requests</label>
                            <textarea class="form-control" rows="3" placeholder="Any special requests..."></textarea>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-secondary me-2" data-bs-dismiss="modal">Cancel</button>
                            <button type="submit" class="btn btn-primary">Confirm Booking</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <div class="footer">
        <p>Hotel Management System &copy; 2025 | All Rights Reserved</p>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Sample JavaScript for interactivity
        document.addEventListener('DOMContentLoaded', function() {
            // Room status card interaction
            const roomCards = document.querySelectorAll('.room-card');
            roomCards.forEach(card => {
                card.addEventListener('click', function() {
                    const roomNumber = this.querySelector('.room-number').textContent;
                    alert(`Room ${roomNumber} details will be displayed here`);
                });
            });
            
            // Booking form submission
            const bookingForm = document.querySelector('.modal form');
            if(bookingForm) {
                bookingForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Booking created successfully!');
                    // Reset form
                    this.reset();
                    // Close modal
                    bootstrap.Modal.getInstance(document.getElementById('bookingModal')).hide();
                });
            }
            
            // Responsive sidebar toggle for mobile
            const sidebarToggle = document.createElement('button');
            sidebarToggle.className = 'btn btn-primary d-md-none mb-3';
            sidebarToggle.innerHTML = '<i class="fas fa-bars"></i> Menu';
            sidebarToggle.addEventListener('click', function() {
                document.querySelector('.sidebar').classList.toggle('d-none');
            });
            
            document.querySelector('.header').insertAdjacentElement('afterbegin', sidebarToggle);
        });
    </script>
</body>
</html>
