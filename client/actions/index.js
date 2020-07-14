import { addingToCount } from '../../server/countService'
export const INCREMENT_COUNT = 'INCREMENT_COUNT'

export const addToCountAction = () => async (
  dispatch,
  getState
) => {
  await addingToCount()
  dispatch({
    type: INCREMENT_COUNT

  })
}
