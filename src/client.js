// import ApolloClient from "apollo-boost"
// import { useCookies } from "react-cookie"
// const [cookies] = useCookies(["user-token"])

// // const token =
// //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRhN2FlNjRlYzE1MzIxMTY0N2EzNWMiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NjU1OTI2ODcsImV4cCI6MTU2ODE4NDY4N30.FZIWJ7sWhmQo6MPgUbY2Js-uVMWY1kUdASvr2oyY6Sd"
// const url = `${process.env.API_URL}`

// const user_token = cookies["user-token"]

// export default new ApolloClient({
//   uri: `${url}/graphql`,
//   request: operation => {
//     operation.setContext({
//       headers: {
//         Authorization: `Bearer ${user_token}`,
//       },
//     })
//   },
// })
