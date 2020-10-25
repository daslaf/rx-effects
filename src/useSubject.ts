import React from 'react';
import { Subject } from 'rxjs';

/**
 * Creates an immutable reference of an RxJS Subject
 */
function useSubject<T = any>() {
  const [subject] = React.useState(() => new Subject<T>());

  React.useEffect(() => {
    return () => subject.complete();
  }, []);

  return subject;
}

export default useSubject;
