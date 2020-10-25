import React from 'react';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import useSubject from './useSubject';

type Effect<T = any> = { type: T };

/**
 * Creates a combo of an RxJS Subject
 */
function useEffectDispatcher<Effects extends Effect>() {
  const dispatch = useSubject<Effects>();

  const [asObservable] = React.useState(() => dispatch.asObservable());
  const [useEffectType] = React.useState(
    () =>
      function useEffectType<T extends Effects['type']>(type: T) {
        const [effect$] = React.useState(() =>
          asObservable.pipe(filter((effect) => effect.type === type))
        );

        return effect$ as Observable<Extract<Effects, Effect<T>>>;
      }
  );

  return { dispatch, useEffectType } as const;
}

export default useEffectDispatcher;
export { Effect };
