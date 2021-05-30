FROM node:12.13-alpine as builder

# STAGE #1 Create work directory & build node project
WORKDIR /bmi_calculator

COPY package.json .

RUN npm i

COPY . .

RUN npm run test && npm run build

FROM node:12.13-alpine as production

WORKDIR /bmi_calculator

COPY --from=builder /bmi_calculator/package*.json /bmi_calculator/
COPY --from=builder /bmi_calculator/input.json /bmi_calculator/input.json
COPY --from=builder /bmi_calculator/dist/ /bmi_calculator/dist/
RUN npm i -g typescript
CMD ["npm", "start"]