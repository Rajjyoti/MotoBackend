import bcrypt from 'bcryptjs'

const drivers = [
    {
      name: 'Test Driver 1',
      email: 'driver1@example.com',
      password: bcrypt.hashSync('123456', 10),
      location: {
        type: 'Point',
        coordinates: [-73.9667, 40.78]
      }
    },
    {
      name: 'Test Driver 2',
      email: 'driver2@example.com',
      password: bcrypt.hashSync('123456', 10),
      location: {
        type: 'Point',
        coordinates: [-74.0060, 40.7128]
      }
    },
    {
      name: 'Test Driver 3',
      email: 'driver3@example.com',
      password: bcrypt.hashSync('123456', 10),
      location: {
        type: 'Point',
        coordinates: [-73.968285, 40.785091]
      }
    }
  ];

export default drivers
  