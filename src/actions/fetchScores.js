import Axios from 'axios'

function fetchScores(address){

  const url = `http://localhost:3001/api/v1/voting_districts?full_address=${address}`
  const response = Axios.get(url)
  console.log('request', response)
  debugger
  return {
    type: 'FETCH_SCORES',
    payload: response
  }
}
export default fetchScores
