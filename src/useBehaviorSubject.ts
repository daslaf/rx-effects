import React from 'react';
import { BehaviorSubject } from 'rxjs';

/**
 * Creates an immutable reference of an RxJS BehaviorSubject
 */
function useBehaviorSubject<T = any>(initialValue: T) {
  const [subject] = React.useState(() => new BehaviorSubject<T>(initialValue));

  React.useEffect(() => {
    return () => subject.complete();
  }, []);

  return subject;
}

export default useBehaviorSubject;
