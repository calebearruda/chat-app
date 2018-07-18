import { WORKER, USER } from '../constants/typesUser'

export const messages = [
  {
    message: 'Hello',
    user_id: 2
  },
  {
    message: 'I need some help to sort out the issue on my website.',
    user_id: 2
  },
  {
    message: 'He Evline',
    user_id: 1
  },
  {
    message: 'Could you please tell me your customer ID?',
    user_id: 1
  },
  {
    message: 'Yes user, this is 5524888',
    user_id: 2
  },
  {
    message: 'Ok, thanks! Let me quickly lock into this',
    user_id: 1
  }
]

export const users = [
  {
    user_id: 1,
    name: 'Calebe Arruda',
    avatar: '',
    type: WORKER
  },
  {
    user_id: 2,
    name: 'Evline',
    avatar: '',
    type: USER
  }
]
