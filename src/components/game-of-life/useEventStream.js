import { useMemo, useCallback } from 'react'
import { Subject } from 'rxjs'

/*
  returns
  eventEmit: emits stream triggered by a DOM/Custom event
  eventStream$: emitted stream
*/
export const useEventStream = () => {
  const eventStream$ = useMemo(() => new Subject(), [])
  // eslint-disable-next-line
  const eventEmit = useCallback(e => eventStream$.next(e), [])
  return [eventEmit, eventStream$]
}
