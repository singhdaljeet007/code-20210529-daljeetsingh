# initial setup
npm init
npm install
npm i --save-dev typescript @types/node ts-node
mkdir src && touch Readme.md src/index.ts tsconfig.json

# build setup
mkdir bin && touch bin/bmi_calculator

# dry run
bash bin/bmi_calculator input.json

# initialize git repo
git init
touch .gitignore

# implementing business logic
touch dataProcessor.ts && BmiCalculator.ts
mkdir src/interfaces && touch src/interfaces/Person.ts

# code coverage added
mkdir tests 
npm i --save-dev jest ts-jest @types/jest

# production build
npm i -g typescript && tsc
# docker setup
touch Dockerfile .dokerignore
docker build -t bmi-calculator .
docker run -it bmi-calculator:latest