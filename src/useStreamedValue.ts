import React from 'react';
import useBehaviorSubject from './useBehaviorSubject';

/**
 * Creates an Observable from a value which emits every time the value changes.
 * Changes are tracked as in React.useEffect dependency, so beware if you pass an
 * object literal, a function or anything that is compared by reference.
 */
function useStreamedValue<T = any>(value: T) {
  const subject = useBehaviorSubject(value);

  React.useEffect(() => {
    subject.next(value);
  }, [value]);

  return React.useState(() => subject.asObservable())[0];
}

export default useStreamedValue;
