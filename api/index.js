import useRequest from '../utils/useRequest'

const { request } = useRequest()

export function getList(data) {
  return request({
    url: '/api/vote/list',
    method: 'GET',
    params: data
  })
}

export function vote(data) {
  return request({
    url: '/api/vote',
    method: 'POST',
    data,
    isJson: true
  })
}

export function createVote(data) {
  return request({
    url: '/api/vote/add',
    method: 'POST',
    data,
    isJson: true
  })
}

export function deleteVote(data) {
  return request({
    url: '/api/vote/delete',
    method: 'POST',
    data,
    isJson: true
  })
}
