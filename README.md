# Inventory Management System with TypeScript and Node.js

## Project Description

This project demonstrates an inventory management system using Node.js and TypeScript. It provides a REST API to add, update, and track inventory levels in real-time. The system includes a feature for exporting inventory data to CSV for reporting.

## Features

- **Inventory Management**: Add, update, and remove items, track stock levels in real-time.
- **Export to CSV**: Export inventory data to CSV for reporting purposes.
- **Low Stock Alerts**: Send notifications when stock levels are critically low (future).
- **REST API**: Expose endpoints for managing items and tracking inventory.
- **Dockerized**: The application is containerized for easy deployment and scaling.

## Setup Instructions

### Prerequisites
- **Docker**: To run the application in containers.
- **Node.js**: Version 14 or later.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/the-real-jerry-tan/typescript-inventory-management-system.git
   cd typescript-inventory-management-system
   ```

2. Build and run the Docker container:
   ```bash
   cd docker
   docker build -t ts-inventory-management .
   docker run -p 3000:3000 ts-inventory-management
   ```

3. The REST API will be available at [http://localhost:3000](http://localhost:3000).

## Future Enhancements

- **Low Stock Alerts**: Integrate notification features when stock reaches a critical threshold.
- **Inventory History**: Track historical inventory changes.
- **Real-Time Data Sync**: Sync with external inventory systems.

## Author

This project is maintained by [Jerry Tan](https://github.com/the-real-jerry-tan).

## License

© 2024 Jerry Tan. All Rights Reserved. Unauthorized use or distribution is prohibited.
