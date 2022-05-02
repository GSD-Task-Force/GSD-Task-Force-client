import apiUrl from '../apiConfig'
import axios from 'axios'

export const CreateTask = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/task/',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      task: {
        title: data.title,
        description: data.description
      }
    }
  })
}
