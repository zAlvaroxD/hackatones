module.exports = {
    "port": 8000,
    "appEndpoint": "http://localhost:8000",
    "apiEndpoint": "http://localhost:8000",
    "jwt_secret": "myS33!!creeeT",
    "jwt_expiration_in_seconds": 36000,
    "environment": "dev",
    "permissionLevels": {
        "NORMAL_USER": 1,
        "PAID_USER": 4,
        "ADMIN": 2048
    }
};
