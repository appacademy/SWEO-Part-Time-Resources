# Part 1
# Set environment variables in the command-line then run server
PORT=5000 SECRET_MESSAGE="Hello from command-line" node app.js
# Navigate to localhost:5000 to see secret message

# This also works:
export PORT=5000
export SECRET_MESSAGE="Hello from command-line"
node app.js
# Navigate to localhost:5000 to see secret message
# Should see "Hello from command-line"



# Part 2
# Install `dotenv-cli`
npm install dotenv-cli
# Run dotenv in the command-line then start the server
dotenv node app.js
# Navigate to localhost:5000 to see secret message
# Should see "Hello from .env"